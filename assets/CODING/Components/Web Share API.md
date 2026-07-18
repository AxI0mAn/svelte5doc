Для создания кнопки «Поделиться» в современном веб-приложении (PWA) лучше всего использовать Web Share API. Это стандартный браузерный механизм, который вызывает родное системное меню телефона (как в обычных мобильных приложениях).

Если браузер не поддерживает этот метод (например, на старых ПК), мы предусмотрим «запасной вариант» — копирование ссылки в буфер обмена.

Вот пошаговая реализация для Svelte 5.

1. Логика функции «Поделиться»
Создадим универсальную функцию. Она будет пытаться вызвать системное окно, а если не получится — просто скопирует адрес сайта.

JavaScript
// src/lib/utils/shareApp.js
export async function shareApp() {
  const shareData = {
    title: 'Axio Calcul',
    text: 'Крутой калькулятор с инженерными функциями и играми!',
    url: window.location.origin + '/axio_calcul/' // Путь к твоему репозиторию
  };

  try {
    // Проверяем, поддерживает ли браузер Web Share API
    if (navigator.share) {
      await navigator.share(shareData);
      console.log('Успешно отправлено');
    } else {
      // Запасной вариант: Копирование в буфер обмена
      await navigator.clipboard.writeText(shareData.url);
      alert('Ссылка скопирована в буфер обмена!');
    }
  } catch (err) {
    console.error('Ошибка при попытке поделиться:', err);
  }
}
2. Создание компонента кнопки
В Svelte 5 мы можем оформить это как красивую кнопку в интерфейсе.

Svelte
<script>
  import { shareApp } from '$lib/utils/shareApp';
  
  // Можно добавить иконку из твоего набора
  import shareIcon from '$lib/assets/icons/share.svg';
</script>

<button class="share-btn" onclick={shareApp} aria-label="Поделиться">
  <img src={shareIcon} alt="" />
  <span>Поделиться</span>
</button>

<style>
  .share-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: var(--bg-secondary, #222);
    color: white;
    border: 1px solid #444;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .share-btn:active {
    transform: scale(0.95);
  }

  .share-btn img {
    width: 20px;
    height: 20px;
  }
</style>
Почему это лучше, чем просто ссылки на соцсети?
Все сразу: Пользователю откроется список всех его установленных приложений (Telegram, WhatsApp, Viber, Instagram, почта и т.д.). Тебе не нужно рисовать 10 разных кнопок.

Родной опыт: Это выглядит как стандартная функция телефона, что повышает доверие.

Автоматизация: Если ты изменишь заголовок или описание в объекте shareData, они автоматически обновятся во всех соцсетях при отправке.

Важные нюансы для PWA на GitHub Pages:
HTTPS: Web Share API работает только по протоколу HTTPS. На GitHub Pages с этим проблем нет, но локально (localhost) это может работать не во всех браузерах (хотя Chrome обычно разрешает).

start_url: Убедись, что в shareData.url указан именно тот путь, который ты прописал как start_url в своем manifest.json. Тогда люди, получившие ссылку, смогут сразу установить приложение.

Где лучше разместить эту кнопку?
Обычно такую кнопку ставят:

В Settings (Настройки).

В QuickMenu или боковую панель.

На странице «О приложении» (About).

Это отличный способ «завирусить» свой проект без затрат на рекламу!
