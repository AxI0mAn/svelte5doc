Я понимаю, как это раздражает — код правильный, а IDE продолжает «краснеть». Это происходит из-за того, что TypeScript в Svelte-файлах иногда игнорирует JSDoc-типы для деструктурированных пропсов и считает их обычными строками (string), которые «шире», чем узкие типы "lazy" | "eager".

Вот три способа решить это, от самого правильного до самого быстрого.

# Способ 1: Явное приведение через JSDoc (Самый надежный)

Если TypeScript не верит определению в начале файла, мы можем подтвердить тип прямо в месте передачи атрибута. Это «успокоит» линтер:

Svelte
<img
  src={src.jpeg}
  {alt}
  loading={/** @type {"lazy" | "eager"} */ (loading)}
  decoding={/** @type {"async" | "auto" | "sync"} */ (decoding)}
  {width}
  {height}
  {...rest}
  onload={handleLoad}
  class="fade-img"
/>




# Способ 2: Использование пропсов без деструктуризации

В Svelte 5 ошибка часто исчезает, если не «разбирать» объект $props() на части, а обращаться к нему целиком. Тогда TypeScript лучше видит связь типов.

JavaScript
<script>
  let props = $props();
  // Теперь обращаемся через props.loading, props.decoding и т.д.
</script>

<img
  src={props.src.jpeg}
  alt={props.alt || ''}
  loading={props.loading} 
  decoding={props.decoding}
  width={props.width}
  height={props.height}
  {...props.rest}
  onload={handleLoad}
  class="fade-img"
/>





# Способ 3: "Грубый" (Удаление атрибутов из явного списка)

Если вы используете {...rest}, вы можете просто не передавать loading и decoding в тег img явно. Они и так попадут туда через {...rest}, если вы передадите их компоненту.

JavaScript
<script>
  let {
    src,
    alt = '',
    // Мы объявляем их здесь, чтобы задать значения по умолчанию,
    // но в теге img ниже МЫ ИХ НЕ ПИШЕМ ЯВНО
    loading = 'lazy', 
    decoding = 'async',
    class: className = '',
    width,
    height,
    ...rest
  } = $props();
</script>

<picture>
  {#if src.webp}
    <source srcset={src.webp} type="image/webp" />
  {/if}
  <img
    src={src.jpeg}
    {alt}
    {width}
    {height}
    {...rest} 
    /* loading и decoding уже внутри rest, 
       так как они пришли в пропсах. 
       Линтер не будет ругаться на {...rest}!
    */
    onload={handleLoad}
    class="fade-img"
  />
</picture>



Почему Способ 3 может быть лучшим для вас:

Когда вы пишете {...rest}, JavaScript просто копирует все свойства. TypeScript не проверяет типы внутри rest так же строго, как явные атрибуты. Если вы передадите в компонент loading="lazy", оно попадет в rest и успешно применится к картинке без ошибок типизации.

Мой совет: Если хотите быстро избавиться от подчеркиваний и сохранить чистоту — используйте Способ 1 (приведение типа прямо в фигурных скобках). Это стандартная практика в JS-проектах с типами.























