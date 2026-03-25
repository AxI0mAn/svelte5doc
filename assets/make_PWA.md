черновик




manifest.json и sw.js (Service Worker) необходимы, чтобы приложение было устанавливаемым и работало офлайн. SvelteKit сам по себе не делает приложение PWA «из коробки», он лишь предоставляет структуру.

В SvelteKit файлы, которые должны быть доступны по прямым ссылкам (как /manifest.json или /sw.js), должны находиться в папке static, а не в src. Все содержимое папки static при сборке копируется в корень сайта. 
Иконки: Разместите icon-192.png и icon-512.png также в папке static.

На примере калькулятора:

Как превратить ваш Калькулятор в PWA (SvelteKit 5)
Чтобы превратить проект на SvelteKit в Progressive Web App, вам нужно добавить статические файлы конфигурации и зарегистрировать Service Worker. В SvelteKit все подобные файлы должны располагаться в директории static.
1. Создайте static/manifest.webmanifest
Этот файл сообщает браузеру, как ваше приложение должно выглядеть при установке. Использование расширения .webmanifest является современным стандартом для PWA.
{
  "short_name": "Калькулятор",
  "name": "Svelte Калькулятор PWA",
  "icons": [
    {
      "src": "icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "background_color": "#1e293b",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#1e293b",
  "description": "Простой и быстрый калькулятор на Svelte 5"
}


2. Создайте Service Worker (static/sw.js)
Service Worker — это прокси-скрипт, который работает в фоновом режиме. Он позволяет приложению открываться мгновенно и работать без интернета, перехватывая сетевые запросы и отдавая файлы из кэша.
В SvelteKit вы можете использовать встроенный модуль $service-worker для автоматического получения списка всех файлов сборки, но для простого примера в папке static подойдет следующий код:
const CACHE_NAME = 'calc-v1';
const ASSETS = [
  '/',
  '/manifest.webmanifest',
  // Добавьте сюда пути к вашим иконкам
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});



3. Подключите в src/app.html
В SvelteKit основной шаблон находится в src/app.html. Добавьте регистрацию в секцию <head>:
<link rel="manifest" href="%sveltekit.assets%/manifest.webmanifest">
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
</script>



Важные нюансы для SvelteKit:
    1. Расположение: Только папка static. Файлы в src проходят через компилятор и их имена могут меняться (хешироваться), поэтому Service Worker не сможет их найти по статичным путям, если не использовать специальные плагины (например, @vite-pwa/sveltekit).
    2. HTTPS: PWA требуют защищенного соединения. При локальной разработке (localhost) всё будет работать, но для деплоя используйте только сервисы с SSL.
       GitHub Pages идеально подходит, так как предоставляет бесплатный SSL.
      Совет для GitHub Pages: Создайте пустой файл static/.nojekyll, чтобы GitHub не игнорировал папки и файлы, начинающиеся с подчеркивания (актуально для сборки SvelteKit).
    3. Иконки: Разместите icon-192.png и icon-512.png также в папке static.
После деплоя в DevTools (вкладка Application) вы сможете увидеть статус активации Service Worker и корректность прочтения Manifest.

