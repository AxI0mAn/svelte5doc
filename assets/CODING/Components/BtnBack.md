Для реализации кнопки «Назад», которая имитирует поведение системной кнопки Android или стрелки браузера, лучшим решением будет использование стандартного History API браузера — метода history.back().

Поскольку мы работаем в SvelteKit, нам нужно учесть один важный нюанс: на стороне сервера (SSR) объекта window и history не существует. Поэтому вызов должен происходить строго на клиенте в момент клика.

Вот готовый, чистый и универсальный компонент кнопки на Svelte 5.

Код компонента BtnBack.svelte
Svelte
<script>
  // Принимаем кастомные классы, чтобы кнопку можно было стилизовать снаружи
  let { customClass = '' } = $props();

  /**
   * Возвращает пользователя на предыдущую страницу
   * @param {MouseEvent} e
   */
  function goBack(e) {
    e.preventDefault();
    
    // Проверяем, есть ли в истории браузера куда возвращаться
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      // Фолбек (запасной вариант): если пользователь открыл эту страницу 
      // прямой ссылкой в новой вкладке, возвращаем его на главную
      import('$app/navigation').then(({ goto }) => {
        goto('/');
      });
    }
  }
</script>

<button 
  type="button" 
  class="btn-back {customClass}" 
  onclick={goBack}
  aria-label="Назад"
>
  <!-- Здесь может быть твоя иконка стрелочки -->
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
  <span>Назад</span>
</button>

<style>
  /* Базовые аскетичные стили, которые не ломают общую верстку */
  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    font-family: inherit;
    color: inherit;
  }
</style>
Как использовать на страницах проекта:
Ты просто импортируешь её в нужный +page.svelte и, если необходимо, передаешь свои CSS-классы для позиционирования или изменения цвета (например, твои служебные классы op, btn__func и т.д.):

Svelte
<script>
  import BtnBack from '$lib/components/BtnBack.svelte';
</script>

<main class="page">
  <!-- Кнопка автоматически унаследует стили темы или кастомные классы -->
  <BtnBack customClass="op constanta" />
  
  <h1>Страница калькулятора</h1>
  <!-- Контент -->
</main>
Почему это решение идеальное:
Имитация 1-в-1: window.history.back() заставляет браузер достать предыдущую страницу из своего кэша. Это в точности повторяет нажатие кнопки «Назад» на Android или в браузере.

Безопасность для SvelteKit (SSR): Проверка typeof window !== 'undefined' гарантирует, что при сборке проекта (npm run build) статический адаптер не упадет с ошибкой «window is not defined».

Умный запасной путь (Fallback): Если историю невозможно прочитать (например, пользователь скопировал ссылку, вставил в новую вкладку и нажал на кнопку — истории переходов в этой вкладке еще нет), кнопка не сломается и не «зависнет». Она мягко перенаправит пользователя на главную страницу проекта (/) с помощью встроенного роутера SvelteKit goto.
