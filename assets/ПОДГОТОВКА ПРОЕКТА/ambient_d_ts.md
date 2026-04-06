VSCodium/TypeScript не знает, какой тип данных возвращает импорт файла .webp.

Выполнить всё из этого файла и тогда можно использовать картинки:

	import src from '$lib/assets/image/antipod.jpeg';
  и
  <img {src} alt="puma" />

🛠️ Решение: Объявление типов для ассетов
Чтобы устранить ошибку Cannot find module... or its corresponding type declarations, нужно явно сообщить TypeScript, что импорт файлов .webp (и любых других статических ассетов, кроме стандартных JS/TS) вернет тип string (публичный URL).



Шаг 1: Создание файла объявления типов (.d.ts)
Создайте файл объявления типов в папке src, который будет доступен для TypeScript.
src/ambient.d.ts (Или src/app.d.ts, если вы хотите использовать стандартный файл SvelteKit)

TypeScript

// src/ambient.d.ts (или app.d.ts)

// Объявляем модули для всех статических ассетов, которые мы импортируем.
// Мы говорим TypeScript, что импорт этих файлов вернет строковое значение (URL).

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

// 1. Для импорта SVG как строки (через {@html ...})
declare module '*.svg?raw' {
  const content: string;
  export default content;
}

// 2. Для импорта SVG как Svelte-компонента (через <Icon />)
declare module '*.svg?svelte' {
  import type { Component } from 'svelte';
  const component: Component<any>;
  export default component;
}

// 3. Базовая декларация для обычных импортов SVG
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// Добавьте сюда любые другие форматы, которые вы планируете импортировать (например, .mp4, .json)

Шаг 2: Убедитесь, что tsconfig.json включает этот файл
Если вы используете стандартный файл src/app.d.ts, он будет включен автоматически. Если вы создали src/ambient.d.ts, убедитесь, что ваш корневой tsconfig.json включает его в раздел include:
JSON
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  },
  // ⭐️ Убедитесь, что все .d.ts файлы включены
  "include": ["src/**/*.d.ts", "src/**/*.js", "src/**/*.svelte"]
}



Шаг 3: Перезапуск инструментов
    1. Сброс TS Server: В VSCodium нажмите Ctrl + Shift + P, затем выберите "TypeScript: Restart TS Server".
    2. Перезапуск сервера SvelteKit: Полностью остановите (Ctrl + C) и запустите npm run dev.
После этого TypeScript должен понять, что импорт .webp — это валидный модуль, возвращающий URL, и красное подчеркивание исчезнет.

