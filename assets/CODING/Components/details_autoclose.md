На странице есть несколько <details>. напиши функцию, которая на этой странице отслеживает <details> так, что открытым может быть только один. Если открыли первый, а потом открыли третий, то первый закроется.


# Вариант 1 для новых браузеров

Если вы не ограничены поддержкой очень старых браузеров, в HTML появился стандартный атрибут name для <details>. Если дать нескольким элементам одинаковое имя, браузер сам сделает их аккордеоном без всякого JavaScript:

HTML
<details name="my-accordion">
  <summary>Первый</summary>
  Контент
</details>

<details name="my-accordion">
  <summary>Второй</summary>
  Контент
</details>


# Вариант 2 для старых браузеров.


Вы можете оставить функцию в отдельном .js файле, но вызывать её внутри хука onMount. Этот хук гарантирует, что код выполнится только в браузере.

1. Oтдельный файл (например, utils.js) с функцией:

JavaScript
export function initAccordion() {
    const details = document.querySelectorAll('details');

    details.forEach((targetDetail) => {
        targetDetail.addEventListener('toggle', () => {
            if (targetDetail.open) {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.open = false;
                    }
                });
            }
        });
    });
}


2. Ваш компонент Svelte:

Svelte
<script>
    import { onMount } from 'svelte';
    import { initAccordion } from './utils.js';

    onMount(() => {
        // Код внутри onMount никогда не запустится на сервере
        initAccordion();
    });
</script>

<details>
    <summary>Раздел 1</summary>
    Контент 1
</details>
<details>
    <summary>Раздел 2</summary>
    Контент 2
</details>
