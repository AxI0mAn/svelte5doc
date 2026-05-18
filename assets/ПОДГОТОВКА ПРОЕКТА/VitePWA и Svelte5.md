в Svelte 5 "из коробки" PWA нет.
SvelteKit — это фреймворк для построения интерфейса и маршрутизации. Работа с Service Worker (оффлайн-режим, установка на экран, кэширование) — это отдельная сервисная логика.

Это точно необходимо? Нет. Можно писать sw.js руками.

Но почему это важно? Твой текущий ручной sw.js не знает, когда ты изменил код. Он кэширует старые файлы. Когда ты делаешь пуш в GitHub, имена файлов меняются (например, index-abc123.js на index-xyz789.js). Ручной SW пытается скачать старый файл, получает 404 и "ломает" приложение у пользователя.

Vite PWA делает это автоматически: он пересобирает список всех файлов при каждой сборке и дает им версии.

3. Автоматическое обновление для пользователей
Чтобы приложение само обновлялось у пользователей без "белого экрана" и зависаний, нам нужно настроить стратегию Self-Update.


Почему это решит все твои проблемы:
Автоматизация: Тебе больше не нужен файл sw.js в папке static. Удали его! Библиотека сама создаст идеальный sw.js при сборке.

Версионность: Каждая сборка будет иметь уникальный ID. Браузер увидит новый ID и сам скачает новые файлы в фоновом режиме.

Никаких 404 в Cache: Библиотека сама сканирует папку build и точно знает, какие файлы существуют. Ошибка addAll исчезнет навсегда.

Установка на телефон: Благодаря правильному манифесту и рабочему SW, кнопка "Установить" появится снова.

Важное замечание: Перед тем как деплоить это обновление, обязательно удали старый sw.js из репозитория, чтобы он не конфликтовал с новым автоматическим.






Для перехода на автоматическое обновление (Self-Update) через vite-pwa нам нужно аккуратно внедрить плагин SvelteKitPWA в твой существующий конфиг, сохранив все настройки SCSS, алиасов и автопрефиксера.
Шаг 1: Установка
Сначала установи саму библиотеку (если еще не сделал):
Bash
npm add -D @vite-pwa/sveltekit
Шаг 2: Обновленный vite.config.js
Я объединил твой текущий код с настройками PWA.
JavaScript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'; // 1. Импортируем плагин

export default defineConfig({
  plugins: [
    sveltekit(),
    // 2. Настройка PWA
    SvelteKitPWA({
      registerType: 'autoUpdate', // Автоматическое обновление без перезагрузки вручную
      manifest: false,            // Используем твой manifest.json из static
      workbox: {
        // Кэшируем все важные файлы
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json}'],
        // Чистим старый кэш автоматически
        cleanupOutdatedCaches: true,
        // Настройка для GitHub Pages (чтобы не было проблем с путями)
        navigateFallback: './index.html',
      },
      devOptions: {
        enabled: true // Позволяет тестировать PWA в dev-режиме
      }
    })
  ],

  resolve: {
    alias: {
      '$utils': path.resolve('./src/lib/components/utils'),
    },
  },

  server: {
    watch: {
      ignored: ['**/node_modules/**']
    }
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', 'not dead']
        })
      ],
    },

    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "${path.resolve('src/styles/variables').replace(/\\/g, '/')}" as *;
          @use "${path.resolve('src/styles/mixins').replace(/\\/g, '/')}" as *;
        `
      }
    },

    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
});
Шаг 3: Настройка src/routes/+layout.svelte
Чтобы браузер понимал, что нужно проверить наличие обновлений и активировать новый Service Worker, добавь этот блок в твой главный лейаут.
Svelte
<script>
  import { onMount } from 'svelte';
  import { pwaInfo } from 'virtual:pwa-info'; // Информация о манифесте

  let { children } = $props();

  onMount(async () => {
    // Регистрируем Service Worker автоматически
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register');
      registerSW({
        immediate: true, // Проверять обновление сразу
        onRegistered(r) {
          console.log('PWA: Service Worker зарегистрирован');
        },
        onRegisterError(error) {
          console.error('PWA: Ошибка регистрации:', error);
        }
      });
    }
  });
</script>

{@html pwaInfo?.webManifest.linkTag}

{@render children()}
Что это изменит:
    1. Прощай, ручной sw.js: Тебе больше не нужно вручную прописывать ASSETS и следить за версиями. Плагин делает это при каждой сборке (build). ВАЖНО: Удали файл static/sw.js, чтобы он не конфликтовал с новым.
    2. Умное кэширование: Библиотека использует Workbox (стандарт индустрии). Она создает "хэши" для каждого файла. Если ты изменил только один CSS-файл, браузер скачает только его, а не всё приложение заново.
    3. Исправление addAll: Ошибка Failed to execute 'addAll' on 'Cache' исчезнет, так как список файлов генерируется программно на основе реально существующих файлов в папке сборки.
    4. Авто-обновление: Как только ты запушишь новую версию на GitHub Pages, Service Worker в фоне скачает обновления. При следующем переходе по страницам или перезагрузке пользователь увидит свежую версию без "танцев с бубном".
Что проверить перед деплоем:
    1. Файл static/manifest.json: Убедись, что он переименован (не .webmanifest) и в нем правильно указаны start_url и scope (с учетом /axio_calcul/).
    2. Удали старое: Удали старый sw.js из папки static и из своего репозитория на GitHub.
    3. Очисти браузер: После первого деплоя новой системы один раз нажми "Unregister" Service Worker в DevTools, чтобы старый "кривой" воркер не мешал новому "умному".



ошибки в src/routes/+layout.svelte
1. 'virtual:pwa-info' - Cannot find module 'virtual:pwa-info' or its corresponding type declarations.
2. import('virtual:pwa-register') - Cannot find module 'virtual:pwa-register' or its corresponding type declarations.
Эти ошибки — абсолютно нормальное явление при первой настройке PWA. Они возникают потому, что модули с префиксом virtual: не существуют физически на диске — их генерирует Vite «на лету» во время работы. TypeScript (или VS Code) об этом не знает и паникует.
Вот как это исправить пошагово:
1. Исправление ошибок импорта (TypeScript/VS Code)
Тебе нужно объяснить редактору, что эти модули существуют.
Вариант А (Самый простой):   добавь в существующий src/ambient.d.ts следующее содержимое:
TypeScript
declare module 'virtual:pwa-info' {
        export const pwaInfo: {
                webManifest: {
                        linkTag: string;
                };
        } | undefined;
}

declare module 'virtual:pwa-register' {
        export type RegisterSWOptions = {
                immediate?: boolean;
                onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
                onRegisterError?: (error: any) => void;
                onNeedRefresh?: () => void;
                onOfflineReady?: () => void;
        };

        export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>;
}
После сохранения файла ошибки в +layout.svelte должны исчезнуть через пару секунд.

2. Почему это важно для автоматического обновления?
Теперь, когда ошибки исчезли, давай разберем, как работает эта связка. Библиотека @vite-pwa/sveltekit берет на себя всю «грязную» работу, которую ты раньше делал вручную в sw.js.
    1. pwaInfo: Автоматически генерирует правильный путь к твоему manifest.json, учитывая base (имя репозитория на GitHub Pages). Тебе больше не нужно переживать, забыл ты /axio_calcul/ в пути или нет.
    2. registerSW: Это «пульт управления» воркером. Параметр immediate: true заставляет браузер проверять новую версию кода сразу при открытии сайта.
    3. Авто-обновление: Поскольку мы указали в конфиге registerType: 'autoUpdate', Workbox (движок внутри плагина) сам скачает новые файлы, удалит старые из кэша и применит изменения.

3. Последний штрих в src/app.html
Поскольку мы теперь используем pwaInfo?.webManifest.linkTag в +layout.svelte, тебе нужно удалить ручную строку подключения манифеста из src/app.html, если ты её туда добавлял.
Удали это из src/app.html:
HTML
<link rel="manifest" href="/manifest.json" /> ```
Плагин сам вставит эту строку через `{@html pwaInfo.webManifest.linkTag}`. Это гарантирует, что путь к манифесту всегда будет правильным (и на локалке, и на GitHub).

---

### Как проверить, что всё работает?

1.  Запусти проект локально: `npm run dev`.
2.  Открой консоль браузера. Ты должен увидеть: `PWA: Service Worker зарегистрирован`.
3.  Вкладка **Application -> Service Workers**: там должен появиться воркер (в режиме dev он может называться `dev-sw.js`).
4.  **Главный тест:** Сделай любое мелкое изменение в коде (например, поменяй текст в заголовке), сделай `build` и `deploy`. Открой сайт. Если всё настроено верно, при второй загрузке страницы изменения подтянутся автоматически без ошибок `addAll`.

**Если VS Code всё еще ругается**, попробуй перезагрузить окно (Ctrl+Shift+P -> *Developer: Reload Window*).







Настройка и deBUg

Замена порта В файле package.json (постоянный)
Если ты хочешь, чтобы команда всегда запускалась на нужном порту, измени раздел scripts:
JSON
"scripts": {
  "dev": "vite dev --port 3000",
  "preview": "vite preview --port 8080"
}

Сделай npm run build -> npm run preview.


Почему на 8080 всё заработало?
Для браузера каждый порт — это отдельное изолированное государство.
    • На 5173 у тебя остался «зомби-воркер» от старой ручной системы.
    • На 8080 чистая территория. @vite-pwa/sveltekit развернул там свою новую, автоматизированную инфраструктуру, и браузер её сразу принял.

Твой план действий для финального деплоя на GitHub:
Теперь, когда мы убедились в работоспособности системы в режиме preview, можно выходить «в продакшн».
Шаг 1. Чистка src/app.html (Финальная проверка)
Убедись, что там нет строки <script src="/sw.js"></script> или любого ручного упоминания sw.js. Всё управление теперь только внутри +layout.svelte через virtual:pwa-register.
Шаг 2. Конфиг vite.config.js
Проверь, что в SvelteKitPWA секция workbox выглядит так (это важно для GitHub Pages):
JavaScript
workbox: {
  globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,json}'],
  cleanupOutdatedCaches: true,
  // Настройка для правильной работы путей в папке репозитория
  navigateFallback: 'index.html' 
}
Шаг 3. Деплой
    1. Сделай push в репозиторий.
    2. Когда GitHub Pages обновится, зайди на сайт.
    3. Внимание: В первый раз на реальном сайте тебе, скорее всего, всё равно придется нажать "Clear site data" в DevTools, чтобы «убить» старый воркер, который привязан к домену axi0man.github.io/axio_calcul/.

Как это будет работать дальше?
С этого момента, каждый раз, когда ты будешь менять код и деплоить:
    1. vite-pwa сгенерирует новый список файлов с новыми хэшами.
    2. При заходе пользователя на сайт, твой код в +layout.svelte (функция registerSW) увидит обновление.
    3. Благодаря registerType: 'autoUpdate', воркер сам скачает обновления в фоне.
    4. При следующем клике по меню или обновлении страницы пользователь получит абсолютно свежую версию. Больше никаких 404 и "белых экранов"!

