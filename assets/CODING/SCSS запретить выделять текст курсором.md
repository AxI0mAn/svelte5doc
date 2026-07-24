🎯 КАК ЗАПРЕТИТЬ ВЫДЕЛЕНИЕ ТЕКСТА
Вот несколько способов запретить выделение текста на странице:

1. CSS — user-select: none (РЕКОМЕНДУЮ)
Глобально для всей страницы:

css
/* В глобальном файле стилей (например, app.css или global.scss) */
* {
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE/Edge */
}
Для конкретного элемента:

css
.no-select {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
2. Для страницы истории — в компоненте
В +page.svelte добавьте стили:

svelte
<style>
  /* Запрет выделения на всей странице */
  .history-container {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  /* Если нужно разрешить выделение в определенных местах (например, input) */
  input, textarea {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }
</style>
3. JavaScript — onselectstart (дополнительная защита)
svelte
<script>
  // Запрет выделения на всей странице
  if (typeof document !== 'undefined') {
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });
  }
</script>
4. Для мобильных устройств — touch-callout: none
css
* {
  -webkit-touch-callout: none; /* Запрет меню при долгом нажатии на ссылки/изображения */
}
📝 ПОЛНЫЙ КОД ДЛЯ СТРАНИЦЫ ИСТОРИИ
svelte
<script>
  // ... ваш код ...
</script>

<style>
  /* ===== ЗАПРЕТ ВЫДЕЛЕНИЯ ===== */
  .history-container {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none; /* Запрет меню на мобильных */
  }

  /* Разрешаем выделение в полях ввода, если они есть */
  input, textarea, [contenteditable="true"] {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }

  /* Остальные стили ... */
</style>
🎯 ИТОГ
Способ	Где работает	Когда использовать
user-select: none	Все браузеры	Основной способ
-webkit-touch-callout: none	Safari на iOS	Для мобильных
onselectstart	Все браузеры	Дополнительная защита
Готово! 🚀
