Что нужно для оффлайн-режима

# Для оффлайн-работы нужно:

Компонент	Что делает
Service Worker	Перехватывает запросы, отдаёт из кэша
Cache Storage	Хранит HTML, JS, CSS, иконки
IndexedDB	Хранит данные (заметки, отчёты, рецепты)
HTTPS	Обязательно (или localhost)
sw.js	Сгенерирован и зарегистрирован
Всё это уже работает у тебя.

# Где работает оффлайн-режим
Способ	Оффлайн работает?	Почему
Установленное PWA (с иконки на главном экране)	✅ Да	PWA использует SW, кэш сохраняется
Вкладка браузера (сайт открыт в Chrome)	✅ Да	SW работает в фоне, кэш заполняется
Ярлык на рабочем столе (Chrome → "Добавить на главный экран")	✅ Да	Это и есть PWA
Safari на iOS (без установки)	⚠️ Ограниченно	Safari имеет ограничения на SW и кэш
Firefox Private Mode	❌ Нет	Приватный режим не сохраняет кэш
Открытие через file://	❌ Нет	SW не работает с локальными файлами


# Как работает оффлайн в браузере (не установленное PWA):
1. Пользователь открывает сайт https://username.github.io/tiri/
2. SW регистрируется в фоне
3. SW скачивает все файлы из прекеша (195 файлов)
4. Пользователь закрывает вкладку
5. Открывает заново (уже без интернета)
6. SW отдаёт файлы из кэша — сайт работает


# Разница с PWA:

PWA — отдельное приложение, запускается с иконки
Вкладка — сайт в браузере, но оффлайн работает так же

# Что нужно для стабильного оффлайна
Условие	У тебя
SW активен	✅
≥ 10 файлов в кэше	✅ (143–195)
navigateFallback	✅ /tiri/index.html
IndexedDB работает	✅
skipWaiting: true	✅
clientsClaim: true	✅
cleanupOutdatedCaches: true	✅
Всё есть — оффлайн работает.

# Что НЕ работает оффлайн
Что	Почему
Отправка отчётов через мессенджер	Нужен интернет
Скачивание бэкапа	Работает, но через файл
Синхронизация между устройствами	Не реализована
Первая загрузка приложения	Нужен интернет для регистрации SW
Итог
Вопрос	Ответ
Убрать index.html закеширован?	✅ Да, можно
Оффлайн работает в PWA?	✅ Да
Оффлайн работает во вкладке?	✅ Да
Оффлайн работает с ярлыка?	✅ Да (это PWA)
Оффлайн работает в Safari без установки?	⚠️ Ограниченно




# tiri использует файл настроек (vite.config.js) и дополнение в +layout.svelte

// vite.config.js

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit';  - PWA не работает оффлайн
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate', // Автообновление при появлении новой версии
			// injectRegister: null, // Мы регистрируем вручную в +layout.svelte, это надежнее
			injectRegister: 'auto', // Автоматически регистрировать SW и следить за обновлениями
			manifest: false, //  манифест из static
			// outDir: 'build',              //  куда положить sw.js
			// buildBase: '/tiri/',          // base для GitHub Pages
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json,jpg,jpeg}'],
				skipWaiting: true,        // Не ждать закрытия вкладок
				clientsClaim: true,       // Сразу перехватывать управление
				cleanupOutdatedCaches: true, // Удалять старые кэши
				// Для GitHub Pages меняем на полный путь
				navigateFallback: '/tiri/index.html',
				navigateFallbackAllowlist: [/^(?!\/__).*/],
			},
			devOptions: {
				enabled: false, // Оставляем false для тестов Lighthouse!
				type: 'module',
				suppressWarnings: true
			},
			// ✅ ВАЖНО: указать правильные пути
			// srcDir: 'src',
			// filename: 'service-worker.js',
			// strategies: 'generateSW',
			// injectManifest: {},
			// ✅ Для SvelteKit нужен интеграционный путь
			// kit: {
			// 	includeVersionFile: true,
			// },
		})
	],

	resolve: {
		alias: {
			//   алиас
			'$utils': path.resolve('./src/lib/components/utils'),
		},
	},

	server: {
		// Возвращаем твою оптимизацию
		watch: {
			ignored: ['**/node_modules/**']
		}
	},

	css: {
		postcss: {
			plugins: [
				// Твоя точная настройка автопрефиксера
				autoprefixer({
					overrideBrowserslist: ['last 2 versions', 'not dead']
				})
			],
		},

		preprocessorOptions: {
			scss: {
				// Твой исправленный и надежный способ импорта
				additionalData: `
          @use "${path.resolve('src/styles/variables').replace(/\\/g, '/')}" as *;
          @use "${path.resolve('src/styles/mixins').replace(/\\/g, '/')}" as *;
        `
			}
		},

		//   Настройки CSS-модулей
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]__[local]--[hash:base64:5]',
		},
	},

	// Добавим это для уменьшения веса билда (из прошлых советов)
	build: {
		sourcemap: false,
		minify: 'terser'
	}
});



# дополнение в src/routes/+layout.svelte
// ========== controllerchange - автоматическое полное обновление при появлении новой версии приложения ========
	/**
	 *алгоритм
При первом заходе (новая версия на сервере)
Страница загружается
onMount → reg.update() → проверка нового sw.js
controllerchange → новый SW активирован
window.location.reload() → страница перезагружена с новой версией
Пользователь видит обновлённое приложение

При следующих заходах
Страница загружается из кэша
onMount → reg.update() → нет нового sw.js
Пользователь видит актуальную версию
	 */

	onMount(() => {
		if (!('serviceWorker' in navigator)) return;

		// ✅ Слушаем смену контроллера (новый SW активирован)
		let refreshing = false;
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			if (refreshing) return;
			refreshing = true;
			console.log('[PWA] Новый SW активирован, перезагружаем страницу...');
			window.location.reload();
		});

		// ✅ Проверяем обновления при каждом заходе
		navigator.serviceWorker.getRegistrations().then((registrations) => {
			registrations.forEach((reg) => {
				reg.update(); // Принудительно проверить обновления
			});
		});
	});



