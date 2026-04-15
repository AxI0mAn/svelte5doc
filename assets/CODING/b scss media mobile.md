Оптимизированный вариант:
SCSS

// Мобильные: вертикальные (узкие) ИЛИ горизонтальные (низкие)
// Добавляем проверку на сенсорный экран (coarse), чтобы не путать с окном браузера на ПК
@media 
  screen and (max-width: 480px) and (orientation: portrait),
  screen and (max-height: 480px) and (orientation: landscape),
  screen and (pointer: coarse) and (max-width: 1024px) {
    
    // Ваши мобильные стили здесь
}


Как проверить в Svelte 5?

Если вам нужно менять логику не только в CSS, но и в JS (например, менять количество кнопок), можно создать руну-состояние:

JavaScript

// В Svelte 5 можно сделать реактивный медиа-запрос
let isMobile = $state(false);

$effect(() => {
  const media = window.matchMedia("(max-width: 480px), (max-height: 500px)");
  isMobile = media.matches;
  
  const handler = (e) => isMobile = e.matches;
  media.addEventListener("change", handler);
  return () => media.removeEventListener("change", handler);
});
