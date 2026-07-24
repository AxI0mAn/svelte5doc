Как получить понимание о количестве пользователей и количестве установок PWA? Кроме Unami Analytics, есть бесплатные инструсенты??

Отслеживание установок и активности в PWA отличается от привычных мобильных приложений: здесь нет классической страницы в App Store или Google Play со статистикой скачиваний. Все данные собираются непосредственно внутри самого веб-приложения.

Чтобы понимание статистики было точным, важно разделить решение на два уровня:

Как правильно технически фиксировать факт установки и запуск PWA.

Какие бесплатные сервисы аналитики для этого использовать.

1. Техническая часть: Как отследить установку и запуск PWA
Независимо от выбранной аналитики, отследить PWA можно двумя основными способами:

Способ А: Перехват события appinstalled
Браузер отправляет событие appinstalled, когда пользователь завершает установку PWA на устройство.

JavaScript
window.addEventListener('appinstalled', () => {
  // Отправляем событие в вашу систему аналитики
  yourAnalytics.track('pwa_installed');
});
Способ Б: Параметры в manifest.json и проверка display-mode
Чтобы отличать обычных посетителей сайта от тех, кто открывает приложение через иконку на рабочем столе:

В manifest.json добавьте метку в start_url:

JSON
"start_url": "/?utm_source=pwa&utm_medium=pwa_app"
В JS-коде проверяйте режим отображения (standalone):

JavaScript
const isPWA = window.matchMedia('(display-mode: standalone)').matches;
if (isPWA) {
  yourAnalytics.track('pwa_launch');
}
2. Бесплатные альтернативы Umami Analytics
Если Umami по каким-то причинам не подходит, вот проверенные бесплатные инструменты (как облачные с бесплатным лимитом, так и self-hosted):

1. PostHog (Cloud / Self-hosted)
Бесплатный лимит: До 1 000 000 событий в месяц на бесплатном облачном тарифе.

Почему подходит: Идеален для продуктовой аналитики. Позволяет легко отправлять кастомные события (pwa_installed, pwa_launched), строить воронки (например: Зашел на сайт -> Нажал «Установить» -> Запустил PWA) и смотреть записи сессий.

2. PostHog / Mixpanel
Бесплатный лимит Mixpanel: До 100 000 отслеживаемых пользователей в месяц (MTU).

Почему подходит: Очень простая интеграция кастомных событий и атрибутов пользователей. Удобно разделять пользователей на две группы: is_pwa: true и is_pwa: false.

3. Google Analytics 4 (GA4)
Бесплатный лимит: Полностью бесплатный стандартный функционал без ограничений по трафику для большинства сайтов.

Почему подходит: Позволяет передавать пользовательские события (pwa_install) и пользовательские параметры (launch_mode). Настроив параметр utm_source=pwa в манифесте, вы автоматически увидите PWA как отдельный источник трафика.

4. Matomo (Self-Hosted)
Бесплатный лимит: 100% бесплатно при установке на собственный сервер.

Почему подходит: Полная альтернатива Google Analytics с сохранением приватности данных (no-cookie режим при желании). Отлично справляется с трекингом кастомных целей и событий.

5. Cloudflare Web Analytics
Бесплатный лимит: 100% бесплатно, подключается даже без использования CDN Cloudflare.

Почему подходит: Очень легкий скрипт (не влияет на производительность PWA), защищает приватность пользователей. Подходит для базового отслеживания визитов с фильтрацией по URL (например, по параметру /?utm_source=pwa).

6. Свое микро-решение (Firebase / Supabase / Cloudflare Workers)
Если вам нужно только число установок и количество активных пользователей без громоздких систем аналитики:

Создайте бесплатную базу данных в Supabase или Firebase Firestore.

При срабатывании appinstalled отправляйте один lightweight fetch() запрос на инкремент счетчика.

При каждом старте PWA отправляйте ping с анонимным ID устройства для подсчета DAU/MAU.

Показать пример интеграции события pwa_installed для конкретного сервиса?

Да

Расскажи подробнее о своём микро-решении... Я хочу фиксировать открытие приложения онлайн, скачивание PWA, запуск оффлайн PWA. Я не хочу использовать бекэенд. Как для этого использовать google таблицы?

Идея использовать Google Таблицы вместо полноценного бэкенда для такой задачи — отличный выбор, если хочется легко получать данные в привычном табличном виде без оплаты серверов.

Чтобы Google Таблица могла принимать данные от JS-кода вашего PWA, роль «бэкенда» выполнит бесплатный скрипт Google Apps Script, привязанный к вашей таблице. Он будет принимать POST-запросы от PWA и записывать строки с событиями.

Ниже пошаговая инструкция, как все настроить и как фиксировать все три нужных состояния: онлайн-открытие, установку PWA и офлайн-запуск.

Step 1: Настройка Google Таблицы и Apps Script
Создайте новую Google Таблицу.

В верхнем меню выберите Компоненты (Extensions) ➔ Apps Script.

Вставьте следующий код, заменив всё содержимое:

JavaScript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Записываем строчку: [Дата и время, Тип события, ID устройства, Статус сети]
    sheet.appendRow([
      new Date(),
      data.event || 'unknown',
      data.deviceId || 'anonymous',
      data.online ? 'Online' : 'Offline'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
Нажмите кнопку Начать развертывание (Deploy) ➔ Новое развертывание (New deployment).

Выберите тип: Веб-приложение (Web app).

В параметрах укажите:

Выполнять от имени (Execute as): Меня (Me)

У кого есть доступ (Who has access): Все (Anyone) — это важно!

Нажмите Развернуть (Deploy), предоставьте необходимые разрешения и скопируйте полученный URL веб-приложения.

Step 2: Как обрабатывать Офлайн-запуски?
Так как в офлайн-режиме браузер не может отправить запрос в Google Таблицы, стратегия следующая:

Когда приложение запускается без интернета, отправка событие блокируется, поэтому мы сохраняем событие в localStorage (или IndexedDB).

При следующем появлении сети (или при следующем онлайн-запуске) мы читаем накопившуюся очередь из localStorage и отправляем её на сервер.

Step 3: Клиентский код для PWA
Добавьте этот модуль в ваш JS-код (подставив свой URL Apps Script):

JavaScript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ВАШ_ID_СКРИПТА/exec';

// 1. Уникальный ID устройства (генерируем один раз и храним в localStorage)
function getDeviceId() {
  let id = localStorage.getItem('pwa_device_id');
  if (!id) {
    id = 'dev_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
    localStorage.setItem('pwa_device_id', id);
  }
  return id;
}

// 2. Функция отправки события
async function trackEvent(eventName) {
  const payload = {
    event: eventName,
    deviceId: getDeviceId(),
    online: navigator.onLine,
    timestamp: new Date().toISOString()
  };

  // Если сети нет — сохраняем событие в очередь в localStorage
  if (!navigator.onLine) {
    const queue = JSON.parse(localStorage.getItem('pwa_offline_queue') || '[]');
    queue.push(payload);
    localStorage.setItem('pwa_offline_queue', JSON.stringify(queue));
    return;
  }

  // Если сеть есть — отправляем с помощью no-cors (из-за ограничений Google Apps Script CORS)
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error('Ошибка отправки:', err);
  }
}

// 3. Функция отправки всех накопленных офлайн-событий при появлении сети
async function flushOfflineQueue() {
  if (!navigator.onLine) return;
  const queue = JSON.parse(localStorage.getItem('pwa_offline_queue') || '[]');
  if (queue.length === 0) return;

  for (const item of queue) {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
    } catch (e) {
      console.error('Не удалось отправить офлайн-событие', e);
    }
  }
  // Очищаем очередь после отправки
  localStorage.setItem('pwa_offline_queue', '[]');
}

// Отслеживаем восстановление сети
window.addEventListener('online', flushOfflineQueue);
Step 4: Логика фиксирования 3-х ваших событий
Теперь вызываем trackEvent() для нужных сценариев:

1. Скачивание / Установка PWA
Срабатывает, когда пользователь нажимает «Установить» в браузере:

JavaScript
window.addEventListener('appinstalled', () => {
  trackEvent('pwa_installed');
});
2. Онлайн-открытие vs Офлайн-запуск PWA
Проверяем режим работы (display-mode: standalone) и статус сети при загрузке страницы:

JavaScript
window.addEventListener('DOMContentLoaded', () => {
  // Пробуем сначала отправить накопленные офлайн-данные
  flushOfflineQueue();

  const isPWA = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

  if (isPWA) {
    if (navigator.onLine) {
      trackEvent('pwa_open_online');
    } else {
      // Сохранит событие локально, а отправит, когда появитсья сеть!
      trackEvent('pwa_open_offline');
    }
  } else {
    // Обычное посещение через браузер (не из иконки PWA)
    trackEvent('web_visit');
  }
});
Что важно учитывать при работе с Google Apps Script
mode: 'no-cors': Google Apps Script выполняет редиректы при ответе, из-за чего стандартные запросы блокируются политикой CORS браузера. Использование mode: 'no-cors' решают эту проблему (запрос уходит и записывается в таблицу, но JS в ответ получает "слепой" статус, что для аналитики не критично).

Лимиты Google: Бесплатный аккаунт Google позволяет делать до 20,000 вызовов Apps Script в день. Для небольших и средних проектов этого хватает с запасом.

Идентификация устройств: Благодаря генерации deviceId в localStorage, вы сможете легко отфильтровать таблицу и узнать не просто общее количество открытий, а количество уникальных пользователей (DAU/MAU).
