есть такая задача:

есть ссылка с картинкой внутри. стили для :hover и :active исправно работают.

Как внести такие изменения: если сайт открыт на устройстве без мыши (нет эффекта наведения - устройство без мыши), то после первого клика сначала показываем :hover эффект, а после второго отрабатываем эффект :active и уже после этого само действие ссылки или кнопки. Ещё раз есть ссылки-карточки: первый клик на мобильном должен соответствовать :hover эффекту на ПК, а второй клик на мобильном должен соответствовать :active на ПК. Для ПК оставляем как есть: навели курсор - выполнили :hover эффект, а если клик мышей - то отрабатываем эффект :active.



# суть и простой пример
# Универсальная функция initTouchHover — лучшее решение


==============================================

# суть и простой пример

Вот оптимизированный код, объединяющий CSS и JS:

1. CSS (Обязательная часть)
Используем медиа-запрос (hover: hover), чтобы стили наведения для мыши не мешали логике тачскрина.

CSS
/* Состояние Hover для устройств с мышью */
@media (hover: hover) {
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
}

/* Состояние "Первого клика" для мобильных (через класс) */
.card.is-hovered {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Эффект нажатия (работает везде) */
.card:active {
  transform: scale(0.98);
  filter: brightness(0.9);
}
2. JavaScript (Логика с защитой от скролла)
JavaScript
export function initTouchCards() {
  // Проверяем, является ли устройство сенсорным
  const isTouch = !window.matchMedia('(hover: hover)').matches;
  if (!isTouch) return;

  const cards = document.querySelectorAll('.card');
  let touchStartPos = { x: 0, y: 0 };
  let isScrolling = false;

  cards.forEach(card => {
    // Запоминаем, где палец коснулся экрана
    card.addEventListener('touchstart', (e) => {
      touchStartPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      isScrolling = false;
    }, { passive: true });

    // Проверяем смещение при движении
    card.addEventListener('touchmove', (e) => {
      const moveX = Math.abs(e.touches[0].clientX - touchStartPos.x);
      const moveY = Math.abs(e.touches[0].clientY - touchStartPos.y);
      
      // Если смещение больше 10px - это скролл
      if (moveX > 10 || moveY > 10) {
        isScrolling = true;
      }
    }, { passive: true });

    // Обрабатываем клик (touchend / click)
    card.addEventListener('click', function(e) {
      // Если был скролл - ничего не делаем
      if (isScrolling) return;

      // Если карточка еще не "активирована" ховером
      if (!this.classList.contains('is-hovered')) {
        e.preventDefault(); // Стоп переход по ссылке
        
        // Сбрасываем остальные карточки
        cards.forEach(c => c.classList.remove('is-hovered'));
        
        // Включаем эффект на текущей
        this.classList.add('is-hovered');
      } else {
        // Если класс уже есть - это второй клик. 
        // Браузер сам выполнит переход по href и покажет :active
      }
    });
  });

  // Убираем ховер, если кликнули в пустое место
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
      cards.forEach(c => c.classList.remove('is-hovered'));
    }
  });
}
Почему этот вариант оптимален:
Защита от ложных срабатываний: Благодаря проверке moveX > 10 || moveY > 10, карточка не будет "всплывать" или блокировать клик, когда пользователь просто листает ленту вниз.

Использование passive: true: Это говорит браузеру, что обработчики не будут вызывать preventDefault внутри движения, что делает скролл страницы максимально плавным (без лагов).

Удобство UX: Пользователь может "сбросить" состояние ховера, просто кликнув по фону страницы.

Совместимость: На ПК этот код вообще не будет выполнять лишних действий, так как сработает проверка !isTouch.

Как внедрить:
Если у вас Svelte, просто вызовите initTouchCards() внутри onMount. Если обычный JS — вызовите функцию после загрузки DOM.


=====================================================

# Универсальная функция initTouchHover

/**
* перехватывает первый клик на мобильном устройстве, остановит переход по ссылке и просто «подсветит» карточку.
* второй клик сработает как нажатие 
* инструкция в /home/daxio/Desktop/Link to svelte5doc/assets/CODING/Double Tap Issue.md
*/

/* Применение 
// В Svelte 5 используйте руну $effect
<script>
import { initTouchHover } from './utils.js';

$effect(() => {
initTouchHover('.card');
});
</script>
*/

/**
* Универсальная функция для эмуляции hover на тачскринах
* @param {string} selector - CSS селектор элементов
* @param {string} hoverClass - Класс, заменяющий :hover
*/
export function initTouchHover(selector, hoverClass = 'is-hovered') {
if (typeof document === 'undefined') return;

const isTouch = !window.matchMedia('(hover: hover)').matches;
if (!isTouch) return;

const elements = document.querySelectorAll(selector);
let touchStartPos = { x: 0, y: 0 };
let isScrolling = false;

elements.forEach((el) => {
el.addEventListener('touchstart', (e) => {
if (e instanceof TouchEvent) {
touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
isScrolling = false;
}
}, { passive: true });

el.addEventListener('touchmove', (e) => {
if (e instanceof TouchEvent) {
const moveX = Math.abs(e.touches[0].clientX - touchStartPos.x);
const moveY = Math.abs(e.touches[0].clientY - touchStartPos.y);
if (moveX > 10 || moveY > 10) isScrolling = true;
}
}, { passive: true });

// Используем touchend для мгновенной реакции на тач
el.addEventListener('touchend', function (e) {
if (isScrolling) return;

if (!this.classList.contains(hoverClass)) {
// Останавливаем всё: и переход по ссылке, и последующий 'click'
e.preventDefault();

elements.forEach((item) => item.classList.remove(hoverClass));
this.classList.add(hoverClass);

console.log('TouchEnd: Класс добавлен');
} else {
// Если класс уже есть, позволяем браузеру сгенерировать клик и перейти
console.log('TouchEnd: Повторный тап, переход...');
}
}, { passive: false }); // Важно: false, чтобы работал preventDefault
});

document.addEventListener('click', (e) => {
if (e.target instanceof HTMLElement) {
const target = e.target.closest(selector);
if (!target) {
elements.forEach((item) => item.classList.remove(hoverClass));
}
}
});
}


Как использовать эту функцию в Svelte 

// Double Tap Issue - перехватывает первый клик на мобильном устройстве
import { initTouchHover } from '$lib/utils/initTouchCards';
$effect(() => {
initTouchHover('.catalog__card');
});



или обычном JS
Теперь ты можешь инициализировать разные элементы с разными настройками:

JavaScript
// В Svelte компоненте (onMount) или после загрузки DOM
onMount(() => {
  // Для обычных карточек
  initTouchHover('.card');
  
  // Для кнопок в меню с другим классом подсветки
  initTouchHover('.nav-item', 'nav-active');
  
  // Для картинок в галерее
  initTouchHover('.gallery-img');
});
Преимущества такого подхода:
Чистый код: Тебе не нужно дублировать логику скролла для каждой новой фичи.

Настраиваемость: Если для какого-то элемента тебе нужно добавить другой класс (например, active вместо is-hovered), ты просто передаешь его вторым параметром.

Изоляция: Функция сбрасывает «ховер» только у элементов того же селектора. Если ты открыл карточку, а потом нажал на кнопку меню, у карточки «ховер» снимется (благодаря обработчику клика по документу).

Важный совет по CSS:
Не забудь, что в CSS тебе теперь нужно прописывать стили для каждого переданного класса. Чтобы не писать много кода, можно использовать группировку селекторов:

CSS
/* Объединяем реальный ховер и наш мобильный класс */
@media (hover: hover) {
  .card:hover, .nav-item:hover { transform: scale(1.05); }
}

.card.is-hovered, .nav-item.nav-active {
  transform: scale(1.05);
}
Преимущества такого подхода:
Чистый код: Тебе не нужно дублировать логику скролла для каждой новой фичи.

Настраиваемость: Если для какого-то элемента тебе нужно добавить другой класс (например, active вместо is-hovered), ты просто передаешь его вторым параметром.

Изоляция: Функция сбрасывает «ховер» только у элементов того же селектора. Если ты открыл карточку, а потом нажал на кнопку меню, у карточки «ховер» снимется (благодаря обработчику клика по документу).

Важный совет по CSS:
Не забудь, что в CSS тебе теперь нужно прописывать стили для каждого переданного класса. Чтобы не писать много кода, можно использовать группировку селекторов:

CSS
/* Объединяем реальный ховер и наш мобильный класс */
@media (hover: hover) {
  .card:hover, .nav-item:hover { transform: scale(1.05); }
}

.card.is-hovered, .nav-item.nav-active {
  transform: scale(1.05);
}
