Svelte5 компоненты. Напиши код для кнопки "бургер", при нажатии на которую открывается список ссылок из трёх элементов. Второй элемент имеет вложенный список ссылок из четырёх элементов, где его третий элемент имеет вложенный список из двух элементов. 
Элементы имеющие вложения отмечены треугольником - аналогично <details>. Этот треугольник по умолчанию указывает на название элемента, а при открытии вложенного списка поворачивается на 90 градусов и показывает вниз. 
Кнопка бургер в виде svg и идентична https://codepen.io/junfrenkixp/pen/eYNxeja
Элементы меню имеют стили для :hover и :active, которые учитывают работу на мобильных устройствах — отсутствие залипания стиля.


<script>
// Руна $state для управления состоянием: открыто/закрыто
let menuOpen = $state(false);

// Данные для меню с вложенной структурой
// Вложенные списки также имеют реактивное состояние 'open'
const menuItems = $state([
{ label: 'Элемент 1', href: '#' },
{
label: 'Элемент 2 (с вложениями)',
href: '#',
open: false, // Теперь 'open' - это просто поле, управляемое через index
children: [
{ label: 'Элемент 2.1', href: '#' },
{ label: 'Элемент 2.2', href: '#' },
{
label: 'Элемент 2.3 (с вложениями)',
href: '#',
open: false,
children: [
{ label: 'Элемент 2.3.1', href: '#' },
{ label: 'Элемент 2.3.2', href: '#' }
]
},
{ label: 'Элемент 2.4', href: '#' }
]
},
{ label: 'Элемент 3', href: '#' }
]);

/**
* Переключает главное меню.
*/
function toggleMenu() {
menuOpen = !menuOpen;
}

/**
* Переключает вложенный список для элемента первого уровня.
* @param {Object} item - Объект элемента меню (например, 'Элемент 2').
*/
function toggleSubMenu(item) {
// Мы можем напрямую менять свойство 'open', т.к. весь массив menuItems реактивен
item.open = !item.open;
}

/**
* Переключает вложенный список для элемента второго уровня.
* @param {Object} subItem - Объект элемента подменю (например, 'Элемент 2.3').
*/
function toggleDeepSubMenu(subItem) {
subItem.open = !subItem.open;
}
</script>

<div class="burger-menu">
<button
class="burger-button"
class:is-active={menuOpen}
onclick={toggleMenu}
aria-expanded={menuOpen}
aria-controls="main-menu"
title="Переключить меню"
>
<svg viewBox="0 0 100 100" width="40">
<rect class="line top" x="10" y="20" width="80" height="10" rx="5" />
<rect class="line middle" x="10" y="45" width="80" height="10" rx="5" />
<rect class="line bottom" x="10" y="70" width="80" height="10" rx="5" />
</svg>
</button>

{#if menuOpen}
<nav class="menu-nav" id="main-menu">
<ul class="main-menu">
{#each menuItems as item}
<li class="menu-item" class:has-children={!!item.children} class:is-open={item.open}>
<div class="menu-link-wrapper">
<a href={item.href} class="menu-link">
{item.label}
</a>

{#if item.children}
<button
class="toggle-sub-menu"
onclick={() => toggleSubMenu(item)}
aria-expanded={item.open}
title="open"
>
<svg
class="triangle"
class:rotated={item.open}
viewBox="0 0 100 100"
aria-hidden="true"
>
<polygon points="0,0 100,50 0,100" />
</svg>
</button>
{/if}
</div>

{#if item.children && item.open}
<ul class="sub-menu level-1">
{#each item.children as subItem}
<li
class="menu-item"
class:has-children={!!subItem.children}
class:is-open={subItem.open}
>
<div class="menu-link-wrapper">
<a href={subItem.href} class="menu-link">
{subItem.label}
</a>

{#if subItem.children}
<button
class="toggle-sub-menu"
onclick={() => toggleDeepSubMenu(subItem)}
aria-expanded={subItem.open}
title="close"
>
<svg
class="triangle"
class:rotated={subItem.open}
viewBox="0 0 100 100"
aria-hidden="true"
>
<polygon points="0,0 100,50 0,100" />
</svg>
</button>
{/if}
</div>

{#if subItem.children && subItem.open}
<ul class="sub-menu level-2">
{#each subItem.children as deepSubItem}
<li class="menu-item">
<div class="menu-link-wrapper">
<a href={deepSubItem.href} class="menu-link">
{deepSubItem.label}
</a>
</div>
</li>
{/each}
</ul>
{/if}
</li>
{/each}
</ul>
{/if}
</li>
{/each}
</ul>
</nav>
{/if}
</div>

<style>
/* -------------------------------------- */
/* ОБЩИЕ СТИЛИ И ПЕРЕМЕННЫЕ */
/* -------------------------------------- */
:root {
--burger-color: #333;
--menu-bg-color: #fff;
--link-color: #333;
--hover-bg-color: #f0f0f0;
--active-bg-color: #e0e0e0;
--sub-menu-border: #ccc;
}

.main-menu,
.sub-menu {
list-style: none;
padding: 0;
margin: 0;
}

/* -------------------------------------- */
/* КНОПКА-БУРГЕР */
/* -------------------------------------- */
.burger-button {
background: none;
border: none;
padding: 10px;
cursor: pointer;
outline: none;
z-index: 1000;
/* Предотвращение залипания и задержки на мобильных */
-webkit-tap-highlight-color: transparent;
touch-action: manipulation;
}

.line {
fill: var(--burger-color);
transition:
transform 0.3s ease-in-out,
opacity 0.3s ease-in-out;
transform-origin: center;
}

/* Анимация перехода в "X" */
.burger-button.is-active .top {
transform: translate(0, 25px) rotate(45deg);
}
.burger-button.is-active .middle {
opacity: 0;
}
.burger-button.is-active .bottom {
transform: translate(0, -25px) rotate(-45deg);
}

/* -------------------------------------- */
/* МЕНЮ И ССЫЛКИ */
/* -------------------------------------- */

.menu-nav {
position: absolute;
top: 60px;
right: 0;
width: 300px;
max-width: 90vw;
background-color: var(--menu-bg-color);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
z-index: 999;
padding: 10px 0;
border: 1px solid #eee;
}

.menu-link-wrapper {
display: flex;
justify-content: space-between;
align-items: center;
}

.menu-link {
display: block;
flex-grow: 1;
padding: 10px 15px;
text-decoration: none;
color: var(--link-color);
transition: background-color 0.15s ease;
/* Предотвращение залипания и задержки на мобильных */
-webkit-tap-highlight-color: transparent;
touch-action: manipulation;
}

/* Стиль :hover (только для устройств с точным указателем) */
@media (hover: hover) and (pointer: fine) {
.menu-link:hover {
background-color: var(--hover-bg-color);
}
}

/* Стиль :active для всех устройств (мгновенное выделение при нажатии/касании) */
.menu-link:active {
background-color: var(--active-bg-color);
}

/* -------------------------------------- */
/* СТИЛИ ДЛЯ ВЛОЖЕННОСТИ */
/* -------------------------------------- */

.sub-menu {
margin: 5px 0 5px 15px;
/* Эмуляция вложенности SCSS */
&.level-1 {
padding-left: 20px;
border-left: 2px solid var(--sub-menu-border);
}
&.level-2 {
padding-left: 15px;
border-left: 1px solid var(--sub-menu-border);
}

/* Уменьшаем отступы для вложенных элементов */
& .menu-link {
padding: 8px 10px;
}
}

.toggle-sub-menu {
background: none;
border: none;
padding: 10px 15px;
cursor: pointer;
outline: none;
/* Предотвращение залипания и задержки на мобильных */
-webkit-tap-highlight-color: transparent;
touch-action: manipulation;
}

.triangle {
width: 10px;
height: 10px;
fill: var(--link-color);
transition: transform 0.2s ease-in-out;
transform-origin: 50% 50%;
transform: rotate(0deg); /* По умолчанию указывает на название */
}

/* Поворот треугольника при открытом вложенном меню */
.triangle.rotated {
transform: rotate(90deg); /* При открытии поворачивается на 90 градусов (вправо) */
}
</style>


