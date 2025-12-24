Перенос FSD-Структуры в SvelteKit


При переносе проекта с чистого JS на Svelte:

Файл index.html (корневой файл) БУДЕТ src/routes/+page.svelte - Это ваша корневая страница (роут /).

Не было макета БУДЕТ src/routes/+layout.svelte — Это Глобальный макет: Обертка для всех страниц. Сюда можно поместить Header, Footer (если они есть) и глобально импортировать src/app.scss.

Файл style/style.scss БУДЕТ src/app.scss — это Глобальные стили: Сюда импортируем _reset.scss и _fonts.scss.


В SvelteKit все, что не является страницей (роутом), обычно помещается в src/lib, который доступен через псевдоним $lib.



# 1. Слой PAGES (FSD)  --> Слой ROUTES (SvelteKit)
Папки страниц превратятся в файлы +pageName.svelte
-------------------------------------------------------------------------
В чистом FSD, папка PAGES содержит композицию виджетов и фич для конкретного роута.
html_template/scripts/FSD/PAGES/…  →   src/routes/.../+page.svelte

Содержимое ваших PAGES переносится в SvelteKit-роуты. Например, START будет роутом /start и будет реализован в src/routes/start/+page.svelte.
-------------------------------------------------------------------------
Папки LEVEL, PLAY, START   →   src/routes/level/+page.svelte и т. д.

В Svelte-компоненте +page.svelte вы будете импортировать Виджеты и Фичи и собирать из них страницу.
-------------------------------------------------------------------------
MODAL   →   src/lib/widgets/Modal/Modal.svelte

Модальные окна обычно становятся Виджетами или Фичами, которые затем используются на разных страницах.
-------------------------------------------------------------------------



# 2. Слой WIDGETS и SHARED    →   src/lib/widgets и src/lib/shared
Это самое простое преобразование. Мы сохраняем структуру, но переносим JS и SCSS внутрь Svelte-компонентов.
-------------------------------------------------------------------------
scripts/FSD/SHARED/BUTTON (.js, .scss)    →   src/lib/shared/Button/Button.svelte
В SvelteKit код компонента (.js и .scss) объединяется в одном файле .svelte.
-------------------------------------------------------------------------
scripts/FSD/WIDGETS/getData   →    src/lib/widgets/GetData/GetData.svelte (или логика в store/feature)
В зависимости от того, что делает getData, это может быть либо Svelte-компонент, либо Feature (если это логика, а не UI).



# 3. Папки helpers, utils $\rightarrow$ src/lib/shared/utils
Ваши вспомогательные функции — это классический слой SHARED в FSD.

-------------------------------------------------------------------------
helpers/   →    src/lib/shared/utils/
Используйте для чистых JS-функций (например, shuffleArray.js, getRandomIntInRange.js). Доступны через $lib/shared/utils/...
-------------------------------------------------------------------------
utils/   →    src/lib/shared/utils/
Эти функции также, скорее всего, являются утилитами. Объедините эти папки в одну логическую (utils). Доступны через $lib/shared/utils/…


📝 Предлагаемый Код в Компоненте
Основное изменение: В вашем старом проекте вы писали:
    1. component.js (логика)
    2. component.scss (стили)
    3. index.html (разметка)
В SvelteKit вы пишете:
    1. Component.svelte:
        ◦ <script> (логика, руны $state, импорты JS-утилит).
        ◦ <div> (разметка).
        ◦ <style lang="scss"> (стили, импорты SCSS-переменных).
Пример, компонента Svelte из button ( /html_template/scripts/FSD/SHARED/BUTTON/btnAnswer/btnAnswer.js)

<script>
  // Логика из Button.js переезжает сюда, используя руны $state
  let { handler = () => {} } = $props(); // Svelte 5 $props для свойств
</script>

<button class="custom-button" onclick={handler}>
  <slot />
</button>

<style lang="scss">
  // Стили из Button.scss переезжают сюда
  @use '$lib/shared/styles/variables.scss' as v;

  .custom-button {
    background-color: v.$color-primary;
    border: none;
    padding: 10px 20px;
    // ... и т.д.
  }
</style>


СТРУКТУРА ПАПОК И ФАЙЛОВ ОПИСАНА В    AI helpers/Gemini about Svelte5/src подробно.md



