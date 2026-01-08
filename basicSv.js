let taskNumberStart = 1;
let taskNumberEnd = 1;
let sectionName = 'Basic Svelte';
let colorAccent = '76, 199, 244,';

let pageTitle = document.createElement('title');
pageTitle.textContent = sectionName;
document.querySelector('head').appendChild(pageTitle);


let parent = document.querySelector('.pageMain');

let pageName = document.createElement('h2');
pageName.textContent = sectionName;
pageName.setAttribute('id', "up");
parent.appendChild(pageName);

let tasksNumbers = document.createElement('h6');
let tasksNumbersText = `tasks from ${taskNumberStart}  - to - ${taskNumberEnd}.`;
tasksNumbers.textContent = `${tasksNumbersText}`;

pageName.insertAdjacentElement('afterend', tasksNumbers);
console.log(`${sectionName}  ${tasksNumbersText}`);


let taskCurrent = taskNumberStart - 1;
let taskSubnumber = 1;
let nameTask;
let taskPractice;


let section = document.createElement('section');
section.classList.add('showcase');
section.style.backgroundColor = `rgba(${colorAccent} .25)`;
section.style.border = `4px groove rgba(${colorAccent} .5)`;
section.style.minHeight = '40vh';
parent.insertAdjacentElement('beforeend', section);



section.insertAdjacentHTML('beforeend', `<hr><hr>
<h3  class="title">  </h3>
<h4> </h4>

<hr><hr> 
`);




/* ===========================================================
*/

taskCurrent++;
taskSubnumber = 1;
nameTask = 'Компонент';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
<h2>В Svelte приложение состоит из одного или нескольких компонентов.</h2>

<p>Компонент — это многоразовый автономный блок кода, содержащий HTML, CSS и JavaScript, которые связаны между собой и записаны в <strong>.svelte </strong>файл.
</p>

 
<pre> 
  <code>
    &lt;script>  // JS code
      let name = 'Svelte'; // переменная
    &lt;/script>

    &lt;h1> &lt;!-- html code -->
      Hello <span>{name.toUpperCase()}</span>!   &lt;!--  используем переменную и модифицируем её -->
    &lt;/h1>

    &lt;style>
      /* css code*/
      span {
        color: green;      /* стили инкапсулируются и не влияют на другие span в проекте */
      }
    &lt;/style>
  </code>
</pre> 

<p>Фигурные скобки можно использовать и для управления атрибутами элементов.</p>
<p>Например:</p>
 
<pre> 
  <code>
&lt;script>
	let src = '/tutorial/image.gif';
&lt;/script>

&lt;img src={src} alt='some foto' />

если имя и значение атрибута совпадают, то можно опустить имя вот так:

&lt;img {src} alt='some foto' />

  </code>
</pre>  
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Импорт компонентов';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">

<p>Приложения состоят из большого количества компонентов.</p>
<p>Мы можем импортировать компоненты из других файлов и включать их в нашу разметку.</p>

<p>1. Можно создать отдельный компонент с расширением NewComponent.svelte - со своей разметкой, стилями и логикой. НЕ НУЖНО ИСПОЛЬЗОВАТЬ СЛОВО export!!!!</p>


<strong>ИМЯ КОМПОНЕНТА ДОЛЖНО НАЧИНАТЬСЯ С ЗАГЛАВНОЙ БУКВЫ! NewComponent.svelte </strong>



<p>2. Для использования этого компонента в другом (например, в App.svelte) - нужно сделать импорт:</p>
 
<pre> 
<code>
&lt;script>

	import NewComponent from './NewComponent.svelte'; 

&lt;/script>
</code>
</pre>

<p>3. Теперь можно использовать NewComponent в разметке App.svelte. Расположив его в разметке</p>

<pre>
<code>
&lt;NewComponent />  <-- Первая буква Заглавная - чтоб не путать с тегами html!

</code>
</pre>
<p>4. При этом будут использованы ЕГО стили - описанные в NewComponent.svelte !</p>

</article>`);






taskCurrent++;
taskSubnumber = 1;
nameTask = 'Aналог innerHTML';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span> task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article class="article">

<p>Если требуется отрисовать HTML непосредственно в компоненте - это можно сделать с помощью специального <strong> {@html ...} </strong>тега:</p>
 
<pre> 
<code>

&lt;p>{@html string}&lt;/p>
</code>
</pre> 

<p>Например:</p>
 
<pre> 
<code>

&lt;script>
	let string = &#96;this string contains some <strong> HTML!!!</strong>&#96;;
&lt;/script>

&lt;p>{@html string}&lt;/p> 
</code>
</pre>

<p>
<strong>Важно:</strong> Svelte не выполняет никакой очистки внутреннего выражения {@html ...}перед его вставкой в ​​DOM. Это не проблема, если контент представляет собой нечто, чему вы доверяете, например, написанную вами статью. Однако, если это ненадёжный пользовательский контент, например, комментарий к статье, крайне важно вручную экранировать его, иначе вы рискуете подвергнуть своих пользователей атакам межсайтового скриптинга (XSS).
</p>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Руна $state()';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">

  <a href="https://svelte.dev/tutorial/svelte/state">tutorial</a>

<h5>Концепция: Реактивность без DOM.</h5>
<p>В вашем проекте на чистом JS, когда вы хотели изменить текст кнопки, вы делали так:</p>

<p>1. <mark>Изменяли переменную</mark>: count = 10;</p>

<p>2. Вручную <mark>находили элемент</mark>: const button = document.getElementById('my-btn');</p>

<p>3. Вручную <mark>обновляли DOM</mark>: button.textContent = count;</p>

<p>В Svelte 5 этого делать не нужно. Svelte — это компилятор, который превращает ваш код в высокоэффективный ванильный JS, который знает, какие части DOM нужно обновить, как только вы меняете переменную. Вы просто меняете переменную.</p>

<h4>📝 Вывод: В Svelte 5 вы просто объявляете переменные, и DOM обновляется автоматически.</h4>

<p>В основе Svelte лежит мощная система, позволяющая синхронизировать DOM с состоянием вашего приложения, например, в ответ на событие.</p>

<pre>
<code>
let count = <strong>$state</strong>(0);
</code>
</pre>
<p>Это называется руной , и именно так вы сообщаете Svelte, что count это не обычная переменная. Руны выглядят как функции, но на самом деле это не так — при использовании Svelte они становятся частью самого языка.</p>
<p><mark><strong>$state()</strong> - это аналог let variable = value; </mark><br>
Его назначение - Объявление реактивного состояния. Любое изменение этой переменной автоматически обновляет интерфейс.</p>
<details>
<summary>Пример кода "счётчик"</summary>
<pre> 
<code>
&lt;script>
	let count = <strong>$state</strong>(0);

	function increment() {
		count++;
	}
&lt;/script>

&lt;button onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
&lt;/button>
</code>
</pre>
</details>

<p><strong>$state</strong> реагирует и на мутации — это называем глубокой реактивностью.</p>
<p>Добавляем в массив элементы — автоматически обновляется разметка:</p>
<details>
<summary>Пример кода "Масссив"</summary>
<pre>
<code>
&lt;script>
	let numbers = $state([1, 2, 3, 4]);

	function addNumber() {
		numbers.push(numbers[numbers.length-1]+1)
	}
&lt;/script>

&lt;p>{numbers.join(' + ')} = ...&lt;/p>

&lt;button onclick={addNumber}>
	Add a number
&lt;/button>
</code>
</pre>
</details>
<strong>Глубокая реактивность реализуется с использованием прокси , а мутации прокси не влияют на исходный объект.</strong>

<details>
<summary>Пример кода "Смена цвета элемента"</summary>
<pre>
<code>
&lt;script>
	// Состояние: Активен ли блок (булево значение)
	let isActive = $state(true);

	// Функция, которая просто переключает состояние
	function toggleActive() {
		isActive = !isActive;
	}
&lt;/script>

&lt;main>
	&lt;button onclick={toggleActive}>
		Переключить цвет (Сейчас: {isActive ? 'Красный' : 'Синий'})
	&lt;/button>

	&lt;div class="color-box" class:active={isActive}>Этот блок меняет цвет.&lt;/div>
&lt;/main>

&lt;style>
	.color-box {
		margin-top: 20px;
		padding: 20px;
		color: white;
		/* Базовый цвет (неактивный) */
		background-color: blue;
		transition: background-color 0.3s;
	}

	/* Стиль, который Svelte добавит, если isActive === true */
	.color-box.active {
		background-color: red;
	}

	button {
		border: 2px solid red;
	}
&lt;/style>

</code>
</pre>
</details>

<h4>Условный рендеринг.</h4>
<details>
<summary>Пример кода "Скрыть/показать элемент"</summary>
<pre> 
<code>

&lt;script>
	// 1. Состояние: Булевая переменная, отслеживающая, видим ли контент.
	let isVisible = $state(true);

	// 2. Функция: Меняет состояние на противоположное.
	function toggleVisibility() {
		// Мы просто меняем переменную. Svelte делает остальное!
		isVisible = !isVisible;
	}

	// 3. Вычисляемое значение (для текста кнопки):
	// Меняется автоматически, когда меняется isVisible.
	let buttonText = $derived(isVisible ? 'Скрыть Контент' : 'Показать Контент');
&lt;/script>

&lt;main>
	&lt;button on:click={toggleVisibility}>
		{buttonText}
	&lt;/button>

	{#if isVisible}
		&lt;div class="content-block">
			&lt;h3>Привет из Svelte!&lt;/h3>
			&lt;p>Этот блок виден, потому что isVisible = true.&lt;/p>
		&lt;/div>
	{/if}
&lt;/main>

&lt;style>
	.content-block {
		margin-top: 20px;
		padding: 20px;
		border: 2px solid #ff3e00;
		border-radius: 8px;
		background-color: #ffe8e2;
		transition: opacity 0.3s;
	}
	button {
		padding: 10px 15px;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
	}
&lt;/style>
</code>
</pre>
</details>

<h5>Как это работает:</h5>
<p>Мы не меняем класс, а как тогда исчезает блок? За счёт чего исчезает блок?</p>

<p>Блок исчезает за счет Условного Рендеринга (Conditional Rendering) и работы компилятора Svelte. Вы не просто скрываете блок, вы полностью удаляете его из DOM (Document Object Model).</p>

<p><mark>Механизм</mark> Скрытия/Показа:</p>
<p>Синтаксис: Используется специальный синтаксис шаблона Svelte:</p>
<pre>
<code>

{#if isVisible}
    &lt;div class="info-box">...&lt;/div>
{/if}

</code>
</pre>

<p><mark>Действие </mark>при isVisible = false (Скрытие):</p>

<p>Когда вы кликаете, функция toggleVisibility меняет $state переменную: isVisible = false.</p>

<p>Компилятор Svelte, зная, что блок зависит от isVisible через {#if}, генерирует чистый JavaScript, который вызывает команду removeChild() для этого блока.</p>

<p><mark>Результат</mark>: Блок &lt;div class="info-box"> полностью удаляется из HTML-разметки страницы.</p>

<p><mark>Действие</mark> при isVisible = true (Показ):</p>

<p>Когда вы кликаете снова, isVisible становится true.</p>

<p>Svelte генерирует JavaScript, который вызывает команду createElement() и appendChild() для этого блока.</p>

<p><mark>Результат</mark>: Блок &lt;div class="info-box"> создается заново и вставляется в DOM.</p>
</article>`);





taskCurrent++;
taskSubnumber = 1;
nameTask = 'Руна $derived';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/derived-state">tutorial</a>

<p><mark><strong>$derived()</strong> - аналогичен ручному вычислению. </mark><br>
Назначение - Объявление вычисляемого значения. Пересчитывается только тогда, когда меняются $state переменные, от которых оно зависит.</p>

<p>Выражение внутри <strong>$derived</strong> объявления будет повторно вычисляться всякий раз, когда элементы массива numbers обновляются — обновятся и его зависимости.</p>
<pre>
  let numbers = $state([1, 2, 3, 4]);
  let sum = $derived(numbers.reduce((s,i)=>s+i,0));
</pre>

<h3>Работа с массивами.</h3>
<details>
<summary>Пример кода</summary>
<pre>
<code>
&lt;script>
	let numbers = $state([1, 2, 3, 4]);
	let sum = $derived(numbers.reduce((s,i)=>s+i,0));
	function addNumber() {
		numbers.push(numbers.length + 1);
	}
&lt;/script>

&lt;p>{numbers.join(' + ')} = {sum}&lt;/p>

&lt;button onclick={addNumber}>
	Add a number
&lt;/button>
</code>
</pre>
</details>
<p>Каждый раз, когда в массив добавляется новое значение - пересчитывается сумма и всё это отражается в разметке.</p>

<details>
<summary>Пример. Работа с массивами.</summary>
<pre>
<code>
&lt;script>
	// $state делает массив numbers реактивным
	let numbers = $state([1, 2, 3, 4]);
	
	// $derived: Реактивное вычисляемое значение
	let sum = $derived(numbers.reduce((s,i)=>s+i,0));

	function addNumber() {
		// Правильно: Переприсваиваем, чтобы Svelte увидел изменение
		numbers = [...numbers, numbers.length + 1];
    // или просто  numbers = [...numbers, numbers.length + 1];
	} 
	
	function replNumber(a) {
		// Правильно: Создаем НОВЫЙ массив, заменяя первый элемент
		numbers = [a, ...numbers.slice(1)];
	}
&lt;/script>

&lt;p>{numbers.join(' + ')} = {sum}&lt;/p>

&lt;button onclick={addNumber}> <strong>немедленный вызов функции</strong>
	Add a number
&lt;/button>

&lt;button onclick={() => replNumber(22)}> <strong>передаём ссылку на функцию или оборачиваем вызов в стрелочную функцию.</strong>
	Replace a number (на 22)
&lt;/button>

</code>
</pre>
</details>

<h3>Работа с объектами.</h3>
<p>Изменение существующего свойства объекта:</p>
<br>
<pre>
<code>
numbers.one = 11;
</code>
</pre>
<p>Это работает автоматически! 
Svelte 5 умеет отслеживать изменение значений существующих свойств благодаря прокси-обертке.
</p>

<hr>

<p>Добавление нового свойства:</p><br>
<pre>
<code> 
numbers['three'] = 3; // <-- <strong>НЕ сработает напрямую</strong>
numbers = { ...numbers, 'three': 3 }; // <-- <strong>Создаем НОВЫЙ объект и добавляем свойство</strong>
</code>
</pre>
<p>Самый надежный и чистый способ для добавления или изменения свойств объекта — это создание нового объекта с помощью оператора Spread (...) и переприсваивание $state переменной.
</p>

<details>
<summary>Пример. Работа с объектами.</summary>
<pre>
<code>
<strong>Добавление свойства в объект:</strong>
<br>
&lt;script>
	let numbers = $state({'one': 1, 'two': 2});

	function addProperty() {
		// Создаем НОВЫЙ объект: берем все старые свойства и добавляем новое.
		numbers = { ...numbers, 'three': 3 };
	}
&lt;/script>

&lt;p>{numbers.three}&lt;/p>

&lt;button onclick={addProperty}>
	Добавить свойство 'three'
&lt;/button>

<strong>Изменение Свойства</strong><br>
&lt;script>
    // ...
	function changeProperty() {
        // Простой и надежный способ Svelte 5 для СУЩЕСТВУЮЩЕГО свойства
        numbers.one = 99; 
        
        // Более универсальный (работает и в старых версиях):
        // numbers = { ...numbers, 'two': 22 };
	}
&lt;/script>

&lt;button onclick={changeProperty}>
	Изменить 'one' на 99
&lt;/button>

<strong>Отображение Объекта</strong>
<br>
 <i>Обратите внимание, что вы не можете просто вывести {numbers} в теге! </i>
Svelte попытается преобразовать объект в строку, что даст [object Object].<strong> 
Используйте JSON.stringify(numbers) для удобного просмотра объекта.</strong>

&lt;script>
	// $state делает объект реактивным
	let numbers = $state({'one': 1, 'two': 2});

	function addProperty() {
		// Создаем НОВЫЙ объект с добавленным свойством.
		// ЭТО ГАРАНТИРУЕТ, что Svelte увидит изменение.
		numbers = { ...numbers, 'three': 3 };
	}
&lt;/script>

&lt;p>Объект: {JSON.stringify(numbers)}&lt;/p>

&lt;button onclick={addProperty}>
	Добавить свойство
&lt;/button>
</code>
</pre>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Руна $effect';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/effects">tutorial</a>
<p>Состояние реактивно только тогда, когда на него что-то реагирует , в противном случае это просто мерцающая переменная.</p>

<p>То, что реагирует, называется эффектом . Вы уже сталкивались с эффектами — теми, которые Svelte создаёт от вашего имени для обновления DOM в ответ на изменения состояния, — но вы также можете создавать свои собственные с помощью<strong>  $effect </strong>руны.</p>

<em style='color: white;'>В большинстве случаев этого делать не следует. <strong>$effect</strong> Лучше воспринимать как запасной выход, а не как нечто, к чему можно часто прибегать. Например, если можно поместить побочные эффекты в обработчик событий, то это почти всегда предпочтительнее.</em>

<p>Если функция эффекта не считывает никакого состояния при запуске, она запустится только один раз при монтировании компонента.</p>

<strong>Эффекты не работают во время рендеринга на стороне сервера.</strong>

<details>
  <summary>Пример кода</summary>
  <pre>
    <code>
      &lt;script>
        let elapsed = $state(0);
        let interval = $state(1000);
        $effect(()=>{
          const id = setInterval(()=>{
            elapsed++;
          }, interval);
          return ()=>{
            clearInterval(id);
          }
        });
      &lt;/script>

&lt;button onclick={() => interval /= 2}>speed up&lt;/button>
&lt;button onclick={() => interval *= 2}>slow down&lt;/button>

&lt;p>elapsed: {elapsed}&lt;/p>
<br>

    </code>
  </pre>
  <i>Функция очистки в этом примере - вызывается непосредственно перед повторным запуском функции эффекта при внесении изменений в interval , а также при уничтожении компонента. Без очистки (остановки) таймера - кнопка замедления не будет работать!</i>
</details>
</article>`);





taskCurrent++;
taskSubnumber = 1;
nameTask = 'Реактивность';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/universal-reactivity">tutorial</a>
<p>Использовать руны для добавления реактивности можно как внутри компонентов  так и вне компонентов, например, для общего доступа к глобальному состоянию.</p>
<br>
<p><strong> Pуны нельзя использовать в обычных .js файлах, только в файлах с расширением  .svelte.js </strong></p>

<i>Вы не сможете экспортировать $state объявление из модуля, если объявление переназначено (а не просто мутировано), поскольку импортеры не смогут узнать об этом.</i>
<h4>Рассмотрим пример.</h4>
<p>Есть три файла: App.svelte, Counter.svelte, <mark>shared.js</mark> <br> Мы сможем импортировать из <mark>shared.js</mark> переменную <i>export let str = 'string Test';</i> , но не сможем импортировать <br><i>export const counter = <strong>$state</strong>({ 	count: 0});</i> - потому что, для импорта руны (в этом случае  $state() ) - НЕОБХОДИМО расширение файла .svelte - т.е. ДОЛЖНО БЫТЬ <mark>shared.svelte.js</mark></p>
<p>Вот как должны выглядить файлы для правильной работы:</p>
<p>Алгоритм работы: shared.svelte.js --> Counter.svelte --> App.svelte</p>

<details>
  <summary>shared.svelte.js</summary>
  <pre>
    <code>
    export const counter = $state({
      count: 0
    });
    export let str = 'string Test';
    </code>
  </pre>
</details>
<details>
  <summary>Counter.svelte</summary>
  <pre>
    <code>
      &lt;script>
        import { counter } from './shared.svelte.js';
        
        import { str } from './shared.svelte.js';	

        let strin = str; // <-- присваиваем импорт в переменную
      &lt;/script>
      &lt;p>{strin}&lt;/p> // <-- используем (отображаем) данные переменной
      &lt;button onclick={() => counter.count += 1}>
        clicks: {counter.count} // <-- используем (отображаем) данные из объекта
      &lt;/button>
    </code>
  </pre>
</details>
<details>
  <summary>App.svelte</summary>
  <pre>
    <code>
      &lt;script>
        import Counter from './Counter.svelte';  //  <-- импортируем компонент
      &lt;/script> 

      &lt;Counter /> //  <-- используем (отображаем) компонент
      &lt;Counter /> //  <-- используем (копия) компонент
      &lt;Counter /> //  <-- используем (копия) компонент

    </code>
  </pre>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Руна $props';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/declaring-props">tutorial</a>
<h3>Объявление свойств.</h3>

<p>В любом реальном приложении необходимо передавать данные из одного компонента в его дочерние элементы. Для этого нужно объявить свойства ( props). В Svelte это делается с помощью руны <strong>$props()</strong>.</p>

<details>
  <summary>Пример. Передача свойств.</summary>
  <pre>
    <code>
      # Компонент Nested.svelte ========================

      &lt;script>
        let { answer } = $props();
      &lt;/script>

      &lt;p>The answer is {answer}&lt;/p>


      # Элемент App.svelte ========================

      &lt;script>
        import Nested from './Nested.svelte';
      &lt;/script>

      &lt;Nested answer={42} />

      # Результат ==========================

      The answer is 42

    </code>
  </pre>
</details>

<details>
  <summary>Пример. Значение свойства по умолчанию.</summary>
  <pre>
    <code>
      # Компонент  Nested.svelte ========================

      &lt;script>
        let { answer = 'message' } = $props(); // <-- установили значение по умолчанию
      &lt;/script>

      &lt;p>The answer is {answer}&lt;/p>

      # Элемент App.svelte ========================

      &lt;script>
        import Nested from './Nested.svelte';
      &lt;/script>

      &lt;Nested answer={42} /> // The answer is 42 <-- заменили значение по умолчанию!
      &lt;Nested /> // The answer is message <-- будет значение по умолчанию из Компонента

      # Результат ==========================

      The answer is 42

      The answer is message
    </code>
  </pre>
</details>
<details>
  <summary>Пример. Spread и Rest в пропсах</summary>
  <pre>
    <code>
        Когда передаваемые свойства соответствуют ожидаемым свойствам компонента, 
        мы можем вместо этого «деструктуризировать» их на компонент:

        # Компонент PackageInfo.svelte ========================

        &lt;script>
          let { name, version, description, website } = $props();
        &lt;/script>

        &lt;p>
          The <code>{name}</code> package is {description}. 
          Download version {version} from
          &lt;a href="https://www.npmjs.com/package/{name}">npm&lt;/a> 
          and &lt;a href={website}>learn more here&lt;/a>
        &lt;/p>


        # Элемент  App.svelte ========================

        &lt;script>
          import PackageInfo from './PackageInfo.svelte';

          const pkg = {
            name: 'svelte',
            version: 5,
            description: 'blazing fast',
            website: 'https://svelte.dev'
          };
        &lt;/script>

       <mark> ВМЕСТО присваивания значений:</mark>

        &lt;PackageInfo
          name={pkg.name}
          version={pkg.version}
          description={pkg.description}
          website={pkg.website}
        />

        <mark>ИСПОЛЬЗУЕМ деструктуризацию:</mark>

        &lt;PackageInfo {...pkg}/>

      # Результат ==========================

        <p>The svelte package is blazing fast. <br>Download version 5 from <br>npm <br>and learn more here</p>
    </code>
  </pre>
  <br>
  <p><em>PackageInfo.svelte - не содержит данных, а является шаблоном. Который знает куда именно нужно расположить данные.</em></p>
   <p><em>В файле App.svelte - есть данные которые будут иcпользованы (const pkg = {...}).</em></p>
   <p><em>Данные передаются в момент монтирования компонента &lt;PackageInfo {...pkg} /></em></p>
</details> 
<details>
  <summary>Пример. свойство REST...</summary>
  <pre>
    <code>
      И наоборот, в Компоненте (PackageInfo.svelte) можем получить объект, содержащий все реквизиты, 
      которые были переданы в компонент, используя свойство REST...

      let { name, ...stuff } = $props();

      ...или вообще пропустив деструктуризацию :

      let stuff = $props();

      ...в этом случае получаем доступ к свойствам по их путям к объектам:

      console.log(stuff.name, stuff.version, stuff.description, stuff.website);
    </code>
  </pre>
</details>
</article>`);


taskCurrent++;
taskSubnumber = 1;
nameTask = 'if else блок в html';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p> В HTML нет средств выражения логики , таких как условные операторы и циклы. В Svelte они есть.</p>

<p>Чтобы условно отобразить некоторую разметку, мы заключаем её в if блок. </p>

<pre>
    <code>
      {#if expression}...{:else if expression}...{/if} 
 </code>
</pre>

<p>Содержимое, которое отображается условно, можно поместить в блок if.
Дополнительные условия можно добавить с помощью {:else if expression}, при необходимости закончив {:else} предложением.</p>

<h3>При этом:<br> {<strong style='color:white;'>#</strong>...} - открывает блок. <br> {<strong style='color:white;'>:</strong>...} -  продолжает блок <br>{<strong style='color:white;'>/</strong>...} - закрывает блок. </h3>

<pre>
    <code>
    {#if expression1}
      ... выполнится код1, если expression1 === true
    {:else if expression2}
      ... выполнится код2, если expression2 === true
    {:else}
      ... выполнится код3, если expression1 === false и если expression2 === false
    {/if}
 </code>
</pre>

<details>
  <summary>Пример. Покажем сообшение, при выполнении условия</summary>
  <pre>
    <code>

      &lt;script>
        let count = $state(0);

        function increment() {
          count += 1;
        }
      &lt;/script>

      &lt;button onclick={increment}>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}  // используем тернарный оператор для 
        // выбора слов после цифры
      &lt;/button>

      {#if count>5}
      &lt;h3>{count} is greater than 5!&lt;/h3>
        {:else if count <=5}
          &lt;h4>Click more...&lt;/h4>
      {/if}

      # Результат =====================
      будет кнопка и под ней надпись "Click more..."
      но когда условие выполнится, то 
      будет кнопка и надпись "6 is greater than 5!"

    </code>
  </pre>
</details>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'each as цикл в html';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/each-blocks">tutorial</a>
  
<h3>Концепция: Рендеринг Списков.</h3>
<p>В Svelte вы используете синтаксис {#each} прямо в HTML, чтобы итерировать по реактивному массиву ($state). Svelte сам эффективно создает, обновляет и удаляет элементы DOM при изменении вашего массива.</p>

<p>Цикл <mark>each — as</mark> может работать с любым итерируемым или массивоподобным объектом — другими словами, всем, что работает с Array.from.</p>

<p>Например, нужно сделать 10 кнопок. Вместо того чтобы утомительно копировать, вставлять и редактировать, мы можем избавиться от всего, кроме первой кнопки, а затем использовать each блок из Примера 1.</p>
<details>
  <summary>Пример 1. РАБОТА С МАССИВАМИ. Кнопки</summary>
  <pre>
    <code>
      &lt;script>
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let selected = $state(colors[0]);
      &lt;/script>

      &lt;h1 style="color: {selected}">Pick a colour&lt;/h1>

      &lt;div>
        {#each colors as color, i}
        &lt;button
          style="--color: {color}" &lt;!-- пробрасываем переменную в стили-->
          aria-label={color}
          aria-current={selected === color}
          onclick={() => selected = color}
        >Color {i+1}</button> 
        {/each}
      &lt;/div>


      &lt;style>
        h1 {
          font-size: 2rem;
          font-weight: 700;
          transition: color 0.2s;
        }

        div {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 5px;
          max-width: 400px;
        }

        button {
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--color, #fff); /* получаем переменную из разметки! */
          transform: translate(-2px,-2px);
          filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
          transition: all 0.1s;
          color: black;
          font-weight: 700;
          font-size: 1rem;
        }

        button[aria-current="true"] {
          transform: none;
          filter: none;
          box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
        }
      &lt;/style>
    </code>
  </pre>
    <ul>Как это работает:
    <li>Есть массив цвета - <mark>colors</mark>.</li>
    <li>Есть реактивная переменная для цвета заголовка - <em style='color:blue'>selected</em>.</li>
    <li>Используем возможности {#each colors as color, i} для шаблона кнопки.</li>
    <li>поочерёдно применяем цвет color из массива colors к создаваемым кнопкам</li>
    <li>i - это не обязательный параметр. В нём хранится index текущего color в массиве colors</li>
    <li><mark>ВАЖНО! Пробрасываем цвет из разметки в стили!!!</mark></li>
    <li>style="--color: {color}" - в инлайн стилях кнопки устанавливаем значение для CSS переменной --color</li>
    <li>background: var(--color, #fff); - используем переменную в стилях</li>
    <li> #fff - это значение по умолчанию, если --color не определена.</li>
    <li>По нажатию на кнопку мы меняем значение для реактивной переменной onclick={() => <em style='color:blue'>selected</em> = color  </li>
    </ul>
</details>

<details>
  <summary>Пример 2. Список с выполнеными заданиями. </summary>
  <pre>
    <code>
        &lt;script>
          // БЕЗ ИМПОРТА: $state — это Руна, распознаваемая компилятором.
          let items = $state([
            { id: 1, text: 'Пункт меню 1', active: true },
            { id: 2, text: 'Пункт меню 2', active: false },
            { id: 3, text: 'Пункт меню 3', active: true }
          ]);

          // Функция для взаимодействия: Переключает статус элемента
          function toggleItem(id) {
            // ВАЖНО: Мы создаем НОВЫЙ массив, чтобы Svelte увидел изменение.
            // Это чистый способ обновления массивов в Svelte:
            items = items.map((item) => {
              if (item.id === id) {
                return { ...item, active: !item.active };
              }
              return item;
            });
          }
        &lt;/script>

        &lt;main>
          &lt;h1>Реактивные Списки&lt;/h1>

          &lt;ul>
            {#each items as item (item.id)}
              &lt;li onclick={() => toggleItem(item.id)} 
                      class:active={item.active}>
                {item.text}
                &lt;span class="status">
                  ({item.active ? 'Активен' : 'Неактивен'})
                &lt;/span>
              &lt;/li>
            {/each}
          &lt;/ul>
        &lt;/main>

        &lt;style>
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            padding: 10px;
            margin-bottom: 5px;
            border: 1px solid #ccc;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          li:hover {
            background-color: #f0f0f0;
          }
          /* class:active={item.active} автоматически добавляет класс 'active' */
          .active {
            border-left: 5px solid green;
            background-color: #e6ffe6;
          }
        &lt;/style>
    </code>
  </pre>
</details>

<h3>РАБОТА С ОБЪЕКТАМИ.</h3>
<p>В отличие от JavaScript, синтаксис Svelte <mark>{#each ...} предназначен для работы ТОЛЬКО с массивами.</mark> Чтобы итерировать по свойствам объекта (data), вам нужно сначала преобразовать этот объект в массив пар [ключ, значение] с помощью встроенного в JavaScript метода <strong>Object.entries().</strong></p>
<details>
  <summary>Пример кода. {#each ...} для Объекта.</summary>
  <pre>
    <code>
      &lt;script>
          // 1. Объект с данными
          const data = {
              'first':{
                  'color': 'green',
                  'text': 'one',
              },
              'second':{
                  'color': 'blue',
                  'text': 'two',
              }
          };
          
          // 2. Инициализация реактивного состояния: 
          // Выбираем цвет первого элемента (h1) в качестве начального
          let selectedColor = $state(data.first.color);

          // 3. Функция, которая обновляет выбранный цвет
          function selectColor(color) {
              selectedColor = color;
          }
      &lt;/script>

      &lt;h1 style="color: {selectedColor}">Pick a colour&lt;/h1>

      &lt;div>
          {#each Object.entries(data) as [key, item]}              
              &lt;button
                  class={item.color} // ИСПОЛЬЗУЕМ КЛАССЫ, ЧТОБ РАБОТАЛ :hover !!!
                  onclick={() => selectColor(item.color)}
                  title={key} 
              >
                  {item.text}
              &lt;/button>
          {/each}
      &lt;/div>

      &lt;style>
        h1 {
          font-size: 2rem;
          font-weight: 700;
          transition: color 0.2s;
        }

        div {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-gap: 8px;
          max-width: 400px;
        }

        button {
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--color, #fff);
          transform: translate(-2px,-2px);
          filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
          transition: all 0.1s;
          color: black;
          font-weight: 700;
          font-size: 2rem;
        }
      /* 1. Классы для базового цвета */
          .green {
              background: green;
          }
          .blue {
              background: blue;
          }
        button:hover{
          background: #000;
          color: #123456;
        }

        button[aria-current="true"] {
          transform: none;
          filter: none;
          box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
        }
      &lt;/style>
    </code>
  </pre>
</details>



<h3>Особенность! Важно учитывать! Что, по умолчанию, обновление значения блока each добавляет или удаляет узлы DOM в конце блока.</h3>
<a href="https://svelte.dev/tutorial/svelte/keyed-each-blocks">Объяснение</a>
<p><mark>По умолчанию, обновление</mark> значения блока each добавляет или удаляет узлы DOM <mark>в конце блока</mark> при изменении его размера, а также обновляет оставшийся DOM.</p>
<p>Если нужно удалить первый компонент, но не удалять последний и обновлять все остальные, тогда указываем уникальный ключ (thing.id) для каждой итерации блока each:
</p>
 
<pre>
  <code>
    {#each things as thing (thing.id)}

      &lt;Thing name={thing.name}/>

    {/each}
  </code>
</pre>

<p>Cинтаксис {#each ... (ключ)} — это особая конструкция. Она не является обычной функцией или параметром JavaScript, это специальный синтаксис шаблона Svelte, который называется "Блоки с Ключом" (Keyed Each Blocks).</p>
<h4>Ключи нужны, чтобы сказать Svelte: "Не перезаписывай! Если элемент с этим ID исчез, просто удали его. Если он изменил позицию, перемести его DOM-узел, но не пересоздавай компонент."</h4>

<em>Почему Нужны Ключи!</em>
<p>По умолчанию, когда вы используете простой цикл {#each items as item}, Svelte стремится к максимальной производительности, не создавая лишних операций.</p>

<h5> Как Svelte работает без ключей:</h5> 
<p>Если вы удаляете элемент из середины или начала списка, Svelte не пытается определить, какой именно элемент исчез. Вместо этого он сдвигает все оставшиеся элементы вверх по списку в DOM и перезаписывает их содержимое.</p>

<em>Пример:</em> 
<p>Был список [A, B, C]. Вы удалили A.</p>

<p>1. Svelte берет DOM-узел, в котором было A, и присваивает ему содержимое B.</p>

<p>2. DOM-узлу, где было B, присваивает содержимое C.</p>

<p>3. Удаляет последний DOM-узел (где было C).</p>

<p>4. Этот процесс сдвига и перезаписи (обновление) очень быстр, но имеет две проблемы:</p>

<p><mark>Потеря Состояния:</mark> Если элемент B был компонентом с внутренним состоянием (например, заполненное поле ввода или положение прокрутки), его состояние теряется, потому что Svelte просто перезаписал его новым контентом.</p>

<p><mark>Неэффективность с Компонентами:</mark> Если элементы списка — это сложные компоненты, Svelte будет вынужден перезапускать (пересоздавать) эти компоненты, что тратит ресурсы.
</p>

<h5><em>Что Такое (thing.id)?</em></h5>
<p>Конструкция (thing.id) в синтаксисе {#each things as thing (thing.id)} — это уникальный ключ (Key) для элемента.</p>

<p>К чему относится: Ключ относится к конкретному DOM-узлу и компоненту, который он представляет.</p>

<p>Что это: Это идентификатор, который Svelte использует для создания постоянной связи между элементом в вашем массиве (thing) и его физическим представлением в браузере (DOM-узлом).</p>

<p>Правило: Ключ должен быть уникальным и стабильным (не меняться) для каждого элемента. Обычно используется уникальный ID из базы данных (thing.id).</p>

 <h5>Как Svelte работает с Ключом:</h5>
<p>Когда вы удаляете элемент из массива с ключом, Svelte делает следующее:</p>

<p>1. Он смотрит на ключи (thing.id) всех элементов.</p>

<p>2. Он видит, что, например, элемент с ключом ID: 5 исчез.</p>

<p>3. Вместо сдвига и перезаписи, Svelte напрямую удаляет из DOM только тот узел, который был связан с ключом ID: 5.</p>

<p>4. Все остальные DOM-узлы (и их компоненты) остаются на своих местах и сохраняют свое внутреннее состояние.</p>




<details>
  <summary>Пример <strong>С использованием ключей.</strong></summary>
  <pre>
    <code>
# Компонент Thing.svelte ========================

&lt;script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// &#96;name&#96; обновляется при каждом изменении значения props...
	let { name } = $props();

	// ...но &#96;emoji&#96; фиксируется при инициализации
	const emoji = emojis[name];
&lt;/script>

&lt;p>{emoji} = {name}&lt;/p>


# Элемент App.svelte  ==========================

&lt;script>
	import Thing from './Thing.svelte';

	let things = $state([
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	]);
&lt;/script>

&lt;button onclick={() => things.shift()}>
	Remove first thing
&lt;/button>

{#each things as thing <mark>(thing.id)</mark>}
	&lt;Thing name={thing.name} />
{/each}


# Результат ========================
Без <mark>(thing.id)</mark> - эмоджи 
будет удалятся последний, а описание первое. 
Получится бред!
    </code>
  </pre>

<p>  Второй способ исправить это — создать emoji значение $derived. Но разумнее полностью удалить первый компонент, чем удалять последний и обновлять все остальные. </p>

<p>Для этого мы указываем уникальный ключ (как в рассмотренном примере) для каждой итерации блока each:</p>
<pre>
  <code>
    {#each things as thing <mark>(thing.id)</mark>}
      &lt;Thing name={thing.name}/>
    {/each}
  </code>
</pre>
<p>В качестве ключа можно использовать любой объект, поскольку Svelte использует его Map внутренне — другими словами, (thing) вместо (thing.id). Однако использование строки или числа, как правило, безопаснее, поскольку это означает, что идентичность сохраняется без ссылочного равенства, например, при обновлении данных с сервера API.</p>
</details>

</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'await в html';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p>Работа с асинхронными данными.<p></p> Svelte позволяет легко ожидать значения обещаний непосредственно в разметке:</p>
  <pre>
    <code>
      {#await promise}
        &lt;p>...rolling&lt;/p>
      {:then number}
        &lt;p>you rolled a {number}!&lt;/p>
      {:catch error}
        &lt;p style="color: red">{error.message}&lt;/p>
      {/await}
    </code>
  </pre>

<p><em>Учитываются только самые последние данные promise - это означает, что вам не придется беспокоиться об условиях цепочки.</em></p>

<p>Если вы знаете, что ваше обещание не может быть отклонено, вы можете пропустить catch блок. Вы также можете пропустить первый блок, если не хотите ничего показывать, пока обещание не будет выполнено:</p>

  <pre>
    <code>
      {#await promise then number}
        &lt;p>you rolled a {number}!&lt;/p>
      {/await}
    </code>
  </pre>

<details>
  <summary>Пример кода</summary>
  <pre>
    <code>
    # Функция имитирующая ожидание и ответ utils.js ==============

    export async function roll() {
      // Fetch a random number from 1 to 6
      // (with a delay, so that we can see it)
      return new Promise((fulfil, reject) => {
        setTimeout(() => {
          // simulate a flaky network
          if (Math.random() &lt;0.3) {
            reject(new Error('Request failed'));
            return;
          }

          fulfil(Math.floor(Math.random() * 6) + 1);
        }, 1000);
      });
    }

    # Элемент App.svelte ==============
      &lt;script>
        import { roll } from './utils.js';

        let promise = $state(roll());
      &lt;/script>

      &lt;button onclick={() => promise = roll()}>
        roll the dice
      &lt;/button>

      {#await promise}
        &lt;p>...rolling&lt;/p>
      {:then number}
        &lt;p>you rolled a {number}!&lt;/p>
      {:catch error}
        &lt;p style="color: red">{error.message}&lt;/p>
      {/await}

      # Результат =================
      В зависимости от ответа:
      или you rolled a номер! 
      или Request failed
    </code>
  </pre>
</details>

</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'onEvent в html';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/inline-handlers">tutorial</a>
  <p><mark><strong>onEvent</strong></mark> - аналогичен addEventListener. 
Необходим для привязки обработчиков событий (например, onclick).</p>
<p>Обрати внимание, что название слушателя события - пишется без <strong>" : "</strong> и слитно!</p>
<p>С помощью <strong>on&lt;name></strong> функции можно прослушивать любое событие DOM на элементе. Например:</p>
  <pre>
    <code>
    &lt;script>
      let m = $state({ x: 0, y: 0 });

      function <mark style='color:blue;'>onpointermove</mark>(event) {
        m.x = event.clientX;
        m.y = event.clientY; 
      }
    &lt;/script>
      &lt;div onpointermove={<mark style='color:blue;'>onpointermove</mark>}>
        The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
      &lt;/div>
    </code>
  </pre>
<p>где <strong> <mark style='color:blue;'>onpointermove</mark> - это не случайное имя переменной, 
а название события в JavaScript </strong></p>
<p>Как и в случае с любым другим свойством, где имя соответствует значению, мы можем использовать краткую форму:</p>
  <pre>
    <code>
      &lt;div {<mark style='color:blue;'>onpointermove</mark>}>
        The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
      &lt;/div>
    </code>
  </pre>
<p> если название функции (например onpoint) не совпадает с зарезервированным в JS именем события (<mark style='color:blue;'>onpointermove</mark>), то для вызова слушателя используем присвоение &lt;div <mark style='color:blue;'>onpointermove</mark>={onpoint}> 
</p>
<p> Обработчик события может быть встроенным в разметку:
<pre>
<code>
&lt;div
	<mark style='color:blue;'>onpointermove</mark>={(event) => {
		m.x = event.clientX;
		m.y = event.clientY;
	}}
>
</code>
</pre>

<details>
  <summary>Пример кода для вычисления координат курсора</summary>
  <pre>
    <code>
      &lt;script>
        let m = $state({ x: 0, y: 0 });

        function onpointermove(event) {
          m.x = event.clientX;
          m.y = event.clientY;
        }
      &lt;/script>

      &lt;div {onpointermove}>
        The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
      &lt;/div>

      &lt;style>
        div {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
      &lt;/style>
    </code>
  </pre>
</details>

</article>`);





taskCurrent++;
taskSubnumber = 1;
nameTask = 'срабатывание обработчика события';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/capturing">tutorial</a>
  <p>Обычно обработчики событий запускаются во время фазы всплытия . Обратите внимание, что происходит, если ввести что-либо в &lt;input> в этом примере: сначала запускается внутренний обработчик, по мере того как событие «всплывает» от целевого объекта к документу, а затем — внешний обработчик.</p>

<p>Иногда требуется, чтобы обработчики запускались во время фазы захвата (погружения). Для этого, добавьте <mark>capture </mark>в конец имени события:</p>

  <pre>
    <code>
&lt;div onkeydowncapture={(e) => alert(&#96;&lt;div > $ {e.key}&#96;)} &lt;="presentation">
	&lt;input onkeydowncapture={(e) => alert(&#96;&lt;input > $ {e.key}&#96;)} />
&lt;/div>
   </code>
  </pre>
<p>Теперь относительный порядок обратен. <strong>Если для данного события существуют как обработчики с захватом (погружением), так и обработчики без захвата, первыми будут запущены обработчики с захватом.</strong></p>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Передача обработчиков, как свойства';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/component-events">tutorial</a>

<p>Обработчики событий можно передавать компонентам, как и любые другие свойства.</p>

<p>Есть два файла:</p>

<p><em>Файл компонента Stepper.svelte</em></p>
  <pre>
    <code>
&lt;script>
	let { increment, decrement} = $props();
&lt;/script>

&lt;button onclick={decrement}>-1&lt;/button>
&lt;button onclick={increment}>+1&lt;/button>
    </code>
  </pre>


<p><em>Файл элемента App.svelte</em></p>
  <pre>
    <code>
&lt;script>
	import Stepper from './Stepper.svelte';

	let value = $state(0);
&lt;/script>

&lt;p>The current value is  {value}&lt;/p>

&lt;Stepper 
	increment={()=>value +=1 }
	decrement={()=>value -=1 }
	/>
    </code>
  </pre>
<p><em><mark>Второй вариант</mark> для Файла элемента App.svelte:</em></p> 
    <p>Мы можем использовать вместо стрелочной функции - именованную функцию объявленную в &lt;script> файла  App.svelte. </p>
    <p>Тогда, при вызове &lt;Stepper /> - присвоить эту функцию ожидаемым переменным из Stepper.svelte.</p> 

<h4><mark style='background-color:skyblue;'>Как это работает:</mark></h4>

<p>1. В файле Stepper.svelte объявляем переменные increment и decrement - это параметры, которые мы ожидаем - $props().</p>
<p>2. Привязываем эти переменные к кнопкам, как то, что выполнится при возникновении обработчиков onclick. <br>То есть, если произойдёт нажатие на кнопку, то будет вызвана соответствующая переменная.</p>
<p>3. В файле App.svelte - импортируем весь компонент.</p>
<p>4. Монтируем (вставляем) импортированный компонент в разметку - получаем две кнопки.</p>
<p>5. Во время монтажа, для переменных increment и decrement присваиваем значение в виде функционального выражения - стрелочной функции. </p>

<p><em>*. Если вместо App.svelte мы используем Компонент Stepper.svelte в другом файле, но привяжем к нему другие функции. При этом сам компонент не изменится, но в корне поменяется его функциональность! Например, вместо управления числом, мы сможем управлять текстом и цветом. Так реализуется концепция <mark>Многоразовость (Reusability)</mark></em></p>


<h5>Ключевой Вывод:</h5>

<p style='line-height: 2rem; letter-spacing: .25rem; font-weight:800;'>Этот механизм позволяет дочернему компоненту (Stepper) управлять состоянием родительского компонента (App.svelte) без прямого доступа к нему. Это называется "Подъем состояния" (Lifting State Up) или Обратный Вызов (Callback) и является стандартной практикой во всех компонентно-ориентированных фреймворках.</p>

<span> Это и есть самое главное преимущество компонентной архитектуры в Svelte (и других фреймворках).</span>

<h4 style='color:white;'> 🔁 Гибкость Дочерних Компонентов!</h4>

<h5> Концепция: Многоразовость (Reusability)</h5>

<p style='line-height: 2rem; letter-spacing: .25rem; font-weight:800;'>Компонент из Stepper.svelte (который просто предоставляет кнопки) — это "тупой" (dumb) компонент. Он не знает и не заботится о том, что произойдет, когда на него нажмут. Он лишь знает, что нужно вызвать функции increment и decrement, которые ему передал родитель.</p>

<p style='line-height: 2rem; letter-spacing: .25rem; font-weight:800;'>Это демонстрирует, что дочерний компонент (Stepper) полностью отвязан от конкретной логики и может быть использован для управления чем угодно. Вы просто "впрыскиваете" нужную логику через свойства при импорте.</p>

</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'spread в html';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/spreading-events">tutorial</a>
<p>Можем использовать <mark>Spread</mark> обработчики событий непосредственно на элементах разметки. </p> 
<details>
  <summary>Пример. Включение аудио mp3.</summary>
  <pre>
    <code>
      # Structura:
      /папка
          App.svelte - элемент
          BigRedButton.svelte - компонент
          horn.mp3 - звук

      # Компонент BigRedButton.svelte 
        &lt;script>
        // Собирает все свойства, переданные родителем:
          let props = $props(); 
        &lt;/script>
        // {...props} распространяет все свойства на &lt;button>
        &lt;button {...props}>
          Push
        &lt;/button>

        &lt;style>
          button {
            font-size: 1.4em;
            width: 6em;
            height: 6em;
            border-radius: 50%;
            background: radial-gradient(circle at 25% 25%, hsl(0, 100%, 50%) 0, hsl(0, 100%, 40%) 100%);
            box-shadow: 0 8px 0 hsl(0, 100%, 30%), 2px 12px 10px rgba(0,0,0,.35);
            color: hsl(0, 100%, 30%);
            text-shadow: -1px -1px 2px rgba(0,0,0,0.3), 1px 1px 2px rgba(255,255,255,0.4);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transform: translate(0, -8px);
            transition: all 0.2s;
          }

          button:active {
            transform: translate(0, -2px);
            box-shadow: 0 2px 0 hsl(0, 100%, 30%), 2px 6px 10px rgba(0,0,0,.35);
          }
        &lt;/style>

      # Элемент  App.svelte 

      &lt;script>
      // Импортируем дочерний компонент:
        import BigRedButton from './BigRedButton.svelte';
        // Импортируем сам файл (его путь):
        import horn from './horn.mp3';

        // создается стандартный JavaScript объект Audio:
        const audio = new Audio();
        // Устанавливаем путь к файлу как источник для HTML Audio API:
        audio.src = horn;

        function honk() {
        // Перезагружает аудиоэлемент (нужно для повторного воспроизведения):
          audio.load(); 
        // Запускает воспроизведение
          audio.play();
        }
      &lt;/script>

      &lt;BigRedButton onclick={honk} /> 
    </code>
  </pre>
</details>
<h5>Как это работает:</h5>
<p>1. В элемент App.svelte импортировали кнопку BigRedButton и звук horn.</p>
<p>2. Создали элемент &lt;audio> и функцию honk для обработки аудио (загрузка и воспроизведение).</p>
<p>3. Смонтировали кнопку в разметку.</p>
<p>4. Передаём функцию honk дочернему компоненту &lt;BigRedButton onclick={honk} />  под именем свойства onclick. Svelte видит, что это стандартный HTML-атрибут события, и относится к нему особо. </p>
<p><strong>Обрати внимание! функция без скобок ()! 
<br>Это критически важно и верно:</strong></p>
<p><mark>onclick={honk}:</mark> Вы передаете ссылку на функцию honk. Вы говорите: "Когда событие произойдет, вызови эту функцию".</p>
<p><mark>onclick={honk<strong>()</strong>} (НЕПРАВИЛЬНО!):</mark> Вы немедленно вызываете функцию honk во время рендеринга страницы. Svelte присвоит атрибуту onclick результат выполнения функции (который undefined), и при клике ничего не произойдет.</p>
<p>5. Кнопка в BigRedButton.svelte - ожидает параметры, в качестве которых получает функцию honk, потому что переменная props является объектом, содержащим { onclick: honk_function }.</p>
<p>Оператор ...props (Spread Attributes) берет все пары ключ: значение из объекта props и присваивает их как атрибуты элементу &lt;button>. То есть, Svelte на лету компилирует это в: <mark>&lt;button onclick="honk_function_reference"> Push &lt;/button></mark></p>

<p>6. При нажатии на кнопку - BigRedButton onclick={honk}:</p>
<p>Нажатие: Пользователь нажимает на кнопку &lt;button>.
<p>Событие: Браузер генерирует событие click.</p>
<p>Вызов: Svelte (через привязку onclick) вызывает функцию, которая была ему передана: honk().</p>
<p>Логика: Функция honk() выполняет свой код: audio.load() и audio.play().</p>
<p>Результат: Воспроизводится звук horn.mp3.</p>
<p>Визуальный эффект: Стили button:active в BigRedButton.svelte срабатывают, заставляя кнопку выглядеть нажатой.</p>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'директива bind:value';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/text-inputs">tutorial</a>



<h4>Формы и Двусторонняя Привязка (bind:value)</h4>

  <p>Большинство веб-проектов включают формы. В ванильном JS для синхронизации поля ввода (&lt;input>) и переменной вам приходилось вручную слушать событие oninput и обновлять переменную:</p> 

    <pre>
    <code>
      // Ванильный JS:
      input.addEventListener('input', (e) => {

      myVariable = e.target.value;
      // ... и затем вручную обновлять поле, 
      // <strong>если myVariable изменилась в другом месте.</strong>

      });
    </code>
  </pre>

   <p> В Svelte эта синхронизация происходит автоматически с помощью директивы bind:value.</p> 

  <h5> Концепция: </h5> 
  <p> Двусторонняя Привязка (Two-Way Binding)
bind:value={myVariable} создает двустороннюю связь:</p> 

  <p>💡 Если пользователь вводит текст в поле, переменная myVariable автоматически обновляется.</p> 

  <p>💡 Если переменная myVariable обновляется где-то в коде (например, в $state), текст в поле автоматически обновляется.</p> 

<details>
  <summary>Создание Формы Ввода и Очистки.</summary>
  <pre>
    <code>
      &lt;script>        
        // 1. Реактивное состояние для хранения текста из инпута
        let inputName = $state('');

        // 2. Вычисляемое значение: проверяет, заполнено ли поле
        let isInputEmpty = $derived(inputName.length === 0);

        // 3. Функция для очистки поля
        function clearInput() {
            // Мы просто меняем переменную. bind:value автоматически очистит инпут!
            inputName = '';
        }
        
      &lt;/script>

      &lt;main>
          &lt;h1> Двусторонняя Привязка&lt;/h1>

          &lt;div class="input-group">
              &lt;input 
                  type="text" 
                  placeholder="Введите ваше имя"
                  bind:value={inputName}
              >
              
              &lt;button 
                  onclick={clearInput}
                  disabled={isInputEmpty}
              >
                  Очистить
              &lt;/button>
          &lt;/div>

          {#if !isInputEmpty}
              &lt;p class="greeting">Привет, {inputName}!&lt;/p>
          {/if}
      &lt;/main>

      &lt;style>
          .input-group {
              display: flex;
              gap: 10px;
              margin-bottom: 20px;
          }
          input {
              padding: 10px;
              flex-grow: 1;
          }
          button {
              padding: 10px 15px;
              cursor: pointer;
          }
          button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }
          .greeting {
              font-size: 1.2em;
              color: #ff3e00;
          }
      &lt;/style>
    </code>
  </pre>
  </details>

<p>Как правило, поток данных в Svelte осуществляется сверху вниз — родительский компонент может устанавливать свойства дочернего компонента, а компонент может устанавливать атрибуты элемента, но не наоборот.</p>
<p>Иногда полезно нарушить это правило.</p> 
<p>Например в таких случаях:</p> 

<details>
  <summary>Cвязывание переменной и значение атрибута &lt;input/></summary>
  <p>Используя bind: - мы связываем переменную name и значение атрибута value! <mark>bind:value={name}</mark></p>
  <pre>
    <code>
    &lt;script>
      let name = $state('worldS');
    &lt;/script>

    &lt;input bind:value={name} />

    &lt;h1>Hello {name}!&lt;/h1>
    </code>
  </pre>
    <p>Теперь не только изменения значения переменной name обновят входное значение, но и изменения input обновят name. Иначе говоря, если изменится значение в инпуте, то это изменение увидит руна $state и изменится переменная name.</p>
</details>

<details>
  <summary>bind возвращает значение атрибута &lt;input/> в нужном типе для type="number" и type="range"</summary>
  <p>В DOM каждое входное значение — это строка. </p> 
  <p>Это бесполезно при работе с числовыми входными данными, type="number" и type="range" поскольку требует обязательного приведения типов input.value перед использованием.</p> 
  <p>С помощью bind:value - Svelte заботится об этом за вас:</p>
  <pre>
    <code>
      &lt;script>
        let a = $state(1);
        let b = $state(2);
      &lt;/script>

      &lt;label>
        &lt;input type="number" bind:value={a} min="0" max="10" />
        &lt;input type="range" bind:value={a} min="0" max="10" />
      &lt;/label>

      &lt;label>
        &lt;input type="number" bind:value={b} min="0" max="10" />
        &lt;input type="range" bind:value={b} min="0" max="10" />
      &lt;/label>

      &lt;p>{a} + {b} = {a + b}&lt;/p>
    </code>
  </pre>
  <p>Мы привязываем переменную ОДНОВРЕМЕННО к двум &lt;input/>. Изменения в одном из них - отражаются и в другом и в переменной.</p>
</details>

<details>
  <summary>Привязка к input.checked</summary>
  <p>Флажки используются для переключения между состояниями.<br> Вместо привязки к input.value, мы привязываемся к input.checked: <mark>&lt;input type="checkbox" bind:checked={yes}></mark></p>
  <pre>
    <code>
      &lt;script>
        let yes = $state(false);
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" checked={yes} />
        Yes! Send me regular email spam
      &lt;/label>

      {#if yes}
        &lt;p>
          Thank you. We will bombard your inbox and sell
          your personal details.
        &lt;/p>
      {:else}
        &lt;p>
          You must opt in to continue. If you're not
          paying, you're the product.
        &lt;/p>
      {/if}

      &lt;button disabled={!yes}>Subscribe&lt;/button>

    </code>
  </pre>
  <p>Mы слушаем состояние чекбокса и в зависимости от его состояния: </p>
  <p>1. используем условия if else - реагируя на действия пользователя;</p>
  <p>2. а если он нажат - активизируем кнопку отправки сообщения &lt;button disabled={!yes}>Subscribe&lt;/button>;</p>
</details>



<details> 
  <summary>Использование bind:group вместе с value атрибутом для несколько &lt;input/> type="radio" или type="checkbox" </summary>
  <p>Если у вас есть несколько входов type="radio" или type="checkbox" значений, относящихся к одному и тому же значению, вы можете использовать bind:group вместе с value атрибутом.</p> 
  <p><strong>Входы радиокнопок в одной группе являются взаимоисключающими; a входы флажков в одной группе образуют массив выбранных значений.</strong></p>

  <p  style='margin-top: 12px;'><mark>Добавить bind:group={scoops} к радиовходам...</mark></p>
  <pre>
    <code>
      &lt;input
        type="radio"
        name="scoops"
        value={number}
        bind:group={scoops}
      />
    </code>
  </pre>
  <p  style='margin-top: 12px;'><mark>...и bind:group={flavours} к полям ввода флажка:</mark></p>
  <pre>
    <code>
      &lt;input
        type="checkbox"
        name="flavours"
        value={flavour}
        bind:group={flavours}
      />
    </code>
  </pre>

    <details>
      <summary style='background-color:skyblue;'>Пример: обработка количества и наименования товара для заказа </summary>
      <pre>
        <code>
          &lt;script>
            let scoops = $state(1);
            let flavours = $state([]);

            const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
          &lt;/script>

          &lt;h2>Size&lt;/h2>

          {#each [1, 2, 3] as number}
            &lt;label>
              &lt;input
                type="radio"
                name="scoops"
                value={number}
                bind:group={scoops}
              />

              {number} {number === 1 ? 'scoop' : 'scoops'}
            &lt;/label>
          {/each}

          &lt;h2>Flavours</h2>

          {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
            &lt;label>
              &lt;input
                type="checkbox"
                name="flavours"
                value={flavour}
                bind:group={flavours}
              />

              {flavour}
            &lt;/label>
          {/each}

          {#if flavours.length === 0}
            &lt;p>Please select at least one flavour&lt;/p>
          {:else if flavours.length > scoops}
            &lt;p>Can't order more flavours than scoops!&lt;/p>
          {:else}
            &lt;p>
              You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
              of {formatter.format(flavours)}
            &lt;/p>
          {/if}
        </code>
      </pre>
    </details>
</details>

<details>
  <summary>Использование bind:value и &lt;select></summary>
  <p>Обратите внимание, что &lt;option> значения — это объекты, а не строки!!!</p>
  <p>В этом примере мы используем директиву bind:value дважды: </p>
  <p> 📝 первый раз для того чтоб узнать какой  вариант выбрал пользователь из &lt;select></p>
  <p>📝 и второй раз - как подтверждение что пользователь ввёл данные в &lt;input/> и можно активировать кнопку отправки формы</p>

  <pre>
    <code>
      &lt;script>
        let questions = [
          {
            id: 1,
            text: &#96;Where did you go to school?&#96;
          },
          {
            id: 2,
            text: &#96;What is your mother's name?&#96;
          },
          {
            id: 3,
            text: &#96;What is another personal fact that an attacker could easily find with Google?&#96;
          }
        ];

        let selected = $state();

        let answer = $state('');

        function handleSubmit(e) {
          e.preventDefault();

          alert(
            &#96;answered question $ {selected.id} ($ {selected.text}) with "$ {answer}"&#96;
          );
        }
      &lt;/script>

      &lt;h2>Insecurity questions&lt;/h2>

      &lt;form onsubmit={handleSubmit}>
        &lt;select
          <strong>bind:value</strong>={selected}
          onchange={() => (answer = '')}
        >
        {#each questions as question}
          &lt;option value={question}>
            {question.text}
          &lt;/option>
        {/each}
        &lt;/select>

        &lt;input <strong>bind:value</strong>={answer} />

        &lt;button disabled={!answer} type="submit">
          Submit
        &lt;/button>
      &lt;/form>

      &lt;p>
        selected question {selected
          ? selected.id
          : '[waiting...]'}
      &lt;/p>
    </code>
  </pre>
  <p>Поскольку мы не задали начальное значение selected, привязка автоматически установит его на значение по умолчанию (первое в списке). Однако <strong>будьте осторожны:</strong> до инициализации привязка selected остаётся неопределённой, поэтому мы не можем слепо ссылаться на неё. Например, на selected.id в шаблоне - потому что до момента инициализации значение переменной selected будет undefined (или null), а попытка получить свойство (.id) от undefined вызывает ошибку JavaScript во время выполнения.
</p><br>
<h5><mark>Как Избежать Ошибки (Безопасное Ссылание)</mark></h5><br>
<p>Чтобы безопасно ссылаться на свойства потенциально неопределённой переменной в Svelte, используют два основных способа:</p><br>

<h5>1. Начальная Инициализация (Рекомендованный способ)</h5>
<p>Убедитесь, что $state переменная всегда имеет значение. Например: Инициализация ПУСТЫМ объектом или объектом по умолчанию let selected = $state({});</p><br>
<h5>2. Условный Рендеринг ({#if} или Оператор Опциональной Цепочки)</h5>
<p>Используйте оператор Опциональной цепочки (Optional Chaining) в JavaScript (?.) или блок {#if}:</p>
<p><mark>&lt;p>ID: {selected?.id}&lt;/p> </mark>- Если selected равно undefined или null, выражение вернёт undefined (и ничего не будет отображено), но ошибка не возникнет.</p>
<p><mark>{#if selected}  &lt;p>ID: {selected.id}&lt;/p> {/if} </mark>- 
Это гарантирует, что код внутри блока будет выполнен, только если selected уже имеет какое-то значение.</p> 
</details>

<details>
  <summary>Элемент &lt;select> с атрибутом multiple</summary>
  <p>Элемент &lt;select> может иметь multiple атрибут, в этом случае он будет заполнять массив, а не выбирать одно значение. В этом случае, применим {#each при создании &lt;option></p>
  <pre>
    <code>
      &lt;h2>Flavours&lt;/h2>
      &lt;select multiple bind:value={flavours}>
        {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
          &lt;option>{flavour}&lt;/option>
        {/each}
      &lt;/select>
    </code>
  </pre>
  <p><strong>Обратите внимание</strong>, что мы опустиkb value атрибут в &lt;option>, поскольку его значение идентично содержимому элемента.</p>
  <details>
  <summary style='background-color:skyblue;'>Пример. Вместо &lt;input type="checkbox" применим &lt;select multiple ... </summary>
  <p> </p>
  <pre>
    <code> 
      &lt;script>
        let scoops = $state(1);
        let flavours = $state([]);

        const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
      &lt;/script>

      &lt;h2>Size&lt;/h2>

      {#each [1, 2, 3] as number}
        &lt;label>
          &lt;input
            type="radio"
            name="scoops"
            value={number}
            bind:group={scoops}
          />

          {number} {number === 1 ? 'scoop' : 'scoops'}
        &lt;/label>
      {/each}

      &lt;h2>Flavours&lt;/h2>

      <mark>&lt;select multiple bind:value={flavours}>
        {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
          &lt;option>{flavour}&lt;/option>
        {/each}
      &lt;/select> </mark>

      {#if flavours.length === 0}
        &lt;p>Please select at least one flavour&lt;/p>
      {:else if flavours.length > scoops}
        &lt;p>Can't order more flavours than scoops!&lt;/p>
      {:else}
        &lt;p>
          You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
          of {formatter.format(flavours)}
        &lt;/p>
      {/if}

    </code>
  </pre>
  <p> </p>
</details>
</details>
 
<details>
  <summary>Элемент &lt;textarea> и bind:value</summary>
  <p>Элемент &lt;textarea> ведет себя аналогично текстовому полю в Svelte. <br><br>
  Используйте bind:value:</p>
  <pre>
    <code>
        &lt;textarea bind:value={value}>&lt;/textarea>
    </code>
  </pre>
  <p>В подобных случаях, когда имена совпадают, мы также можем использовать сокращенную форму:</p>
  <pre>
    <code>
      &lt;textarea bind:value>&lt;/textarea>
    </code>
  </pre>
  <p>Это относится ко всем привязкам, а не только к &lt;textarea> привязкам.</p>
  <details>
  <summary style='background-color:skyblue;'>Пример кода c {@html ...}. Пишем в &lt;textarea> и видим результат в &lt;div></summary> 
  <pre>
    <code>
      &lt;script>
        import { marked } from 'marked';

        let value = $state(&#96;Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool&#96;);
      &lt;/script>

      &lt;div class="grid">
        input
        &lt;textarea bind:value>&lt;/textarea>

        output
        &lt;div>{@html marked(value)}&lt;/div>
      &lt;/div>

      &lt;style>
        .grid {
          display: grid;
          grid-template-columns: 5em 1fr;
          grid-template-rows: 1fr 1fr;
          grid-gap: 1em;
          height: 100%;
        }

        textarea {
          flex: 1;
          resize: none;
        }
      &lt;/style>

    </code>
  </pre> 
</details>
</details>

<details>
  <summary>Двусторонняя Привязка к Атрибутам Компонента (bind:prop)</summary>
  <p>Это наиболее мощное и часто используемое применение bind за пределами стандартного HTML. Оно позволяет дочернему компоненту изменять состояние, которое он получил от родителя, без явной передачи функции обратного вызова (callback).</p>
  <p>Представьте, что у вас есть компонент Slider.svelte.</p>

  <pre>
    <code>
      #  Slider.svelte (Дочерний): 

      &lt;script>
          // Объявляем, что prop 'value' является bindable (двусторонним)
          // В Svelte 5 для этого используется руна $bindable().
          let { value = $bindable() } = $props(); 
      &lt;/script>

      &lt;input type="range" bind:value={value} min="0" max="100">

      #  App.svelte (Родительский): 

      &lt;script>
          import Slider from './Slider.svelte';
          let opacity = $state(50);
      &lt;/script>

      &lt;Slider bind:value={opacity} /> 
      &lt;div style="opacity: {opacity / 100}">Прозрачный блок&lt;/div>
    </code>
  </pre>
  <p>Практический Смысл: Вы создаёте переиспользуемый компонент (Slider, модальное окно, таблица), который может изменять переменную родителя напрямую.</p>
</details>

<details>
  <summary>Реактивное отслеживание физического состояния HTML-элемента</summary>
  <p>Вы можете привязать переменные к определённым свойствам HTML-элемента, чтобы реактивно отслеживать его физическое состояние.</p>

  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      С помощью <mark>bind:clientWidth</mark> можем отследить	<mark>Ширину элемента</mark> (без padding, border).	Для создания реактивных медиа-запросов в JS. Если ширина элемента меньше X, меняем расположение его дочерних элементов.
    </code>
  </p><br>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      <mark>bind:offsetHeight</mark> отследит	<mark>Общую высоту элемента.</mark>	Применимо для расчета высоты для виртуализации списка или определения того, помещается ли контент в контейнер.
    </code>
  </p><br>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      <mark>bind:scrollTop</mark>	отслеживает <mark>Вертикальную позицию прокрутки.</mark> Применимо для создания эффекта "липкой" (sticky) навигации (показать/скрыть элемент при достижении определенной точки прокрутки).
    </code>
  </p><br>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      Используем <mark>bind:this</mark> для	<mark>Привязки к самому DOM-узлу.</mark>	Для получения прямого доступа к элементу и вызова методов (например, myElement.focus(), myElement.scrollIntoView()).
    </code>
  </p><br>
  <details>
  <summary style='background-color:skyblue;'>Пример: Отслеживания Ширины Элемента</summary> 
  <pre>
    <code>
      &lt;script>
          let containerWidth = $state(0);
      &lt;/script>

      &lt;div bind:clientWidth={containerWidth} style="border: 1px solid red; padding: 10px;">
        Ширина контейнера: {containerWidth}px
      &lt;/div>
    </code>
  </pre> 
</details>
</details>

<details>
  <summary>Управление состоянием воспроизведения, громкостью и временем медиафайлов.</summary>
  <p>Привязка к Медиа-Элементам (&lt;video>, &lt;audio>). bind: позволяет управлять состоянием воспроизведения, громкостью и временем медиафайлов.</p>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      <mark>bind:currentTime</mark>	отслеживает <mark>Текущее время воспроизведения.</mark> - Создание пользовательского ползунка для перемотки видео.
    </code>
  </p><br>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      <mark>bind:paused</mark>	отслеживает <mark>Булево значение: воспроизводится или пауза.</mark>  - Создание пользовательской кнопки "Play/Pause" (нажатие кнопки меняет значение paused).
    </code>
  </p><br>
  <p style='border: 2px solid skyblue; padding: 12px; line-height: 2.25rem;'>
    <code style=' color: darkblue;'>
      <mark>bind:volume</mark>	отслеживает <mark>Уровень громкости (0.0 до 1.0).</mark>  - Создание пользовательского слайдера громкости.
    </code>
  </p><br>
  <details>
  <summary style='background-color:skyblue;'>Пример: Пользовательская Кнопка Паузы/Воспроизведения</summary> 
  <pre>
    <code>
      &lt;script>
          let isPaused = $state(true); // Состояние: воспроизводится ли видео
      &lt;/script>

      &lt;video src="video.mp4" bind:paused={isPaused} controls />

      &lt;button onclick={() => isPaused = !isPaused}>
          {isPaused ? 'Воспроизвести' : 'Пауза'}
      &lt;/button>
    </code>
  </pre> 
</details>
</details>
 
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'class';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/classes">tutorial</a>

  <h5>Управление Классами в Svelte class:active={item.active}.</h5>

<p>Конструкция <mark>class:active={item.active}</mark> — это специальный синтаксис Svelte для реактивного управления CSS-классами. Это гораздо чище, чем вручную добавлять и удалять классы в ванильном JavaScript.</p>

<p>Вы просто объявляете, что класс должен быть, если условие истинно. Svelte берет на себя всю логику добавления/удаления класса при изменении переменной item.active.</p>
<h5>Как это работает:</h5>
<p>Синтаксис: class:<имя-класса>={булево_выражение}</p>
<p>Действие:</p>
<ul>
<li>Svelte проверяет значение булевого выражения (в нашем случае, item.active).</li>
<li>Если item.active равно true, Svelte добавляет класс active к элементу &lt;li>.</li>
<li>Если item.active равно false, Svelte удаляет класс active с элемента &lt;li>.</li>
</ul>

<h5>Сравнение:</h5>
<p>Svelte 5 (Декларативно)	</p>
  <pre>
    <code>      
        &lt;li class:active={item.active}>
    </code>
  </pre>
  <p>Ванильный JavaScript (Императивно)</p>
  <pre>
    <code>
        if (item.active) { 
            li.classList.add('active'); 
        } else { 
            li.classList.remove('active'); 
        }
    </code>
  </pre>

<p>Как и любой другой атрибут, вы можете указать классы с помощью атрибута JavaScript. В данном случае мы можем добавить flipped класс к карточке:</p>
  <pre>
    <code>
      &lt;button
        class="card {flipped ? 'flipped' : ''}"
        onclick={() => flipped = !flipped}
      >
    </code>
  </pre>
<p>Это работает так, как и ожидалось: если вы нажмете на карту, она перевернется.</p>

<p>Но мы можем сделать это лучше. Добавление или удаление класса в зависимости от определённого условия — настолько распространённый шаблон в разработке пользовательского интерфейса, что Svelte позволяет передавать объект или массив, преобразуемый в строку с помощью clsx.</p>

<details>
  <summary>Что такое clsx.</summary>
<div style='color: darkgreen; background: rgba(255, 255, 255, .3)'>
  <p style='margin-top: 16px;' >
clsx — это небольшая и очень популярная JavaScript-утилита (библиотека), которая помогает вам условно и гибко собирать строки CSS-классов.
  </p>
 <p style='margin-top: 16px;'>
Она используется для упрощения создания атрибута class="..." в элементах, когда классы зависят от логических условий или состояния.
  </p>
 <p style='margin-top: 16px;'>
clsx (читается как "class X" или "class mix") — это функция, которая принимает любое количество аргументов (строки, массивы, объекты) и объединяет их в одну, чистую строку классов. 
  </p>
 <p style='margin-top: 16px;'>
  Зачем это нужно?
В чистом JavaScript или Svelte без утилиты, создание условных классов выглядело бы громоздко:
</p>
  <pre>
    <code>
// Без clsx
const isActive = true;
const isError = false;

const classes = 'btn' + (isActive ? ' btn--active' : '') + (isError ? ' btn--error' : '');
// classes будет: "btn btn--active"

    </code>
  </pre>
   <p style='margin-top: 16px;'>
С clsx вся логика умещается в один чистый вызов, обычно с использованием объекта:
</p>
  <pre>
    <code>

// С clsx
import clsx from 'clsx';
const isActive = true;
const isError = false;

const classes = clsx('btn', {
    'btn--active': isActive, // Добавить 'btn--active', если isActive === true
    'btn--error': isError,     // Добавить 'btn--error', если isError === true
    'btn--disabled': !isActive // Добавить 'btn--disabled', если isActive === false
});
// classes будет: "btn btn--active btn--disabled"

    </code>
  </pre>
   <p style='margin-top: 16px;'>
🔑 Ключевые особенности clsx:
</p>
 <p style='margin-top: 16px;'>
Простота: Принимает смешанные типы данных (строки, объекты, массивы).
</p>
 <p style='margin-top: 16px;'>
Условность (Объект): Позволяет использовать объекты, где ключ — это имя класса, а значение — булево условие (true/false).
</p>
 <p style='margin-top: 16px;'>
Очистка: Автоматически игнорирует null, undefined, пустые строки и false, предотвращая появление лишних пробелов в итоговой строке.
</p>
 <p style='margin-top: 16px;'>
Вывод: clsx используется для декларативного управления сложными наборами классов, делая код более читаемым и легким для поддержки.
</p>
</div>
</details>
<p>Реализуем значение класс таким образом, чтобы «всегда добавлялся <mark>card</mark> класс, и добавлялся <mark>flipped </mark>класс всякий раз, когда  flipped это правда».</p>
  <pre>
    <code>
      &lt;button
        class={["card", { flipped }]}
        onclick={() => flipped = !flipped}
      >
    </code>
  </pre>
<details>
  <summary>Пример кода с переворотом карты</summary> 
  <pre>
    <code>
        &lt;script>
          let flipped = $state(false);
        &lt;/script>

        &lt;div class="container">
          Flip the card
          &lt;button
            class={["card", {flipped}]}
            onclick={() => flipped = !flipped}
          >
            &lt;div class="front">
              &lt;span class="symbol">♠&lt;/span>
            &lt;/div>
            &lt;div class="back">
              &lt;div class="pattern">&lt;/div>
            &lt;/div>
          &lt;/button>
        &lt;/div>

        &lt;style>
          .container {
            display: flex;
            flex-direction: column;
            gap: 1em;
            height: 100%;
            align-items: center;
            justify-content: center;
            perspective: 100vh;
          }

          .card {
            position: relative;
            aspect-ratio: 2.5 / 3.5;
            font-size: min(1vh, 0.25rem);
            height: 80em;
            background: var(--bg-1);
            border-radius: 2em;
            transform: rotateY(180deg);
            transition: transform 0.4s;
            transform-style: preserve-3d;
            padding: 0;
            user-select: none;
            cursor: pointer;
          }

          .card.flipped {
            transform: rotateY(0);
          }

          .front, .back {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            backface-visibility: hidden;
            border-radius: 2em;
            border: 1px solid var(--fg-2);
            box-sizing: border-box;
            padding: 2em;
          }

          .front {
            background: url(./svelte-logo.svg) no-repeat 5em 5em, url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
            background-size: 8em 8em, 8em 8em;
          }

          .back {
            transform: rotateY(180deg);
          }

          .symbol {
            font-size: 30em;
            color: var(--fg-1);
          }

          .pattern {
            width: 100%;
            height: 100%;
            background-color: var(--bg-2);
            /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
            background-image:
            radial-gradient(var(--bg-3) 0.9em, transparent 1em),
            repeating-radial-gradient(var(--bg-3) 0, var(--bg-3) 0.4em, transparent 0.5em, transparent 2em, var(--bg-3) 2.1em, var(--bg-3) 2.5em, transparent 2.6em, transparent 5em);
            background-size: 3em 3em, 9em 9em;
            background-position: 0 0;
            border-radius: 1em;
          }
        &lt;/style>
    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'style как атрибут. style:директивa';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/styles">tutorial</a>
<p>Как и в случае с class, вы можете буквально записывать свои встроенные style атрибуты, поскольку Svelte — это по сути просто HTML с причудливыми элементами:</p> 
  <pre>
    <code>
      &lt;button
        class="card"

        style="transform: {flipped ? 'rotateY(0)' : ''}; 
        --bg-1: palegoldenrod; 
        --bg-2: black; 
        --bg-3: goldenrod"

        onclick={() => flipped = !flipped}
      >
    </code>
  </pre>

<p>Когда стилей много, это может выглядеть немного странно. Мы можем навести порядок с помощью <mark>style: директивы:</mark></p>
  <pre>
    <code>
      &lt;button
        class="card"

        style:transform={flipped ? 'rotateY(0)' : ''}
        style:--bg-1="palegoldenrod"
        style:--bg-2="black"
        style:--bg-3="goldenrod"

        onclick={() => flipped = !flipped}
      >
    </code>
  </pre>
  
  <p>Разберём строку style:--bg-1="palegoldenrod" подробнее:</p>
  <p>style: - это директива style:</p>
  <p>--bg-1= - это css переменная</p>
  <p>"palegoldenrod" - значение присвоенное переменной --bg-1</p>
  <p>так как это инлайн стили, то они имеют преимущество над стилями &lt;style></p>

<h5 style='padding: 24px;'>Директива style:--bg-1="palegoldenrod" компилируется Svelte в стандартный HTML-атрибут style (например, &lt;button style="--bg-1: palegoldenrod;">), она имеет самый высокий приоритет (специфичность 1000) среди всех обычных CSS-правил в блоке &lt;style>.</h5>

<div style='border: 8px groove white; background-color: rgba(255,255,255, .3)'>
<h5 style='line-height: 4rem; font-size:2rem;'>>Это дает вам лучшее из двух миров:</h5><br>

<p style='line-height: 3rem; font-size:2rem;'><mark>Реактивность:</mark> Вы можете менять значение переменной (palegoldenrod) с помощью JavaScript-логики (например, style:--bg-1={someStateVariable}).</p><br>

<p style='line-height: 3rem; font-size:2rem;'><mark>Гибкость CSS:</mark> Вы можете использовать эту переменную (var(--bg-1)) многократно и с модификаторами (var(--bg-1) solid 2px) в вашем внешнем &lt;style> блоке, сохраняя чистую структуру CSS. </p>
</div>
<details>
  <summary>Пример кода</summary> 
  <pre>
    <code>
      <a href="https://svelte.dev/tutorial/svelte/styles">tutorial</a>
    </code>
  </pre> 
</details>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Дополнительно о стилях для Svelte5 от Gemini ';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
  <h3>Задание и Использование Переменных Цвета (SCSS). </h3>
<p>Для сохранения привычного вам способа работы с файлами переменных (variables.scss) в Svelte 5, вам нужно сначала установить SCSS и настроить его импорт.</p>
<h5>Шаг 1: Установка SCSS (Sass)</h5> 
<p>Если вы еще не сделали этого, установите препроцессор Sass:</p>
  <pre>
    <code>
      npm install -D sass svelte-preprocess
    </code>
  </pre>
<em>💡 Примечание: В современных проектах SvelteKit, svelte-preprocess часто уже настроен по умолчанию для работы с препроцессорами, но установка sass обязательна.</em>
<h5>Шаг 2: Создание Файла Переменных</h5>
  <p>Создайте ваш файл с переменными в папке src (например, src/styles/_variables.scss).</p>
  <pre>
    <code>
      // src/styles/_variables.scss

      $color-primary: #FF3E00;
      $color-secondary: #2196F3;
      $font-family-base: Arial, sans-serif;
    </code>
  </pre>
<h5>Шаг 3: Импорт Переменных в Компоненте</h5>
  <p>В любом Svelte-компоненте (.svelte) вы можете импортировать этот файл в теге &lt;style> и использовать переменные.</p>
  <pre>
    <code>
      &lt;script>
          // ... ваш код Svelte 5 ...
      &lt;/script>

      &lt;h1>Заголовок&lt;/h1>

      &lt;style lang="scss">
          // 1. Указываем Svelte, что это SCSS
          @import 'src/styles/_variables.scss'; // 2. Импортируем переменные
          
          h1 {
              // 3. Используем переменную
              color: $color-primary; 
              font-family: $font-family-base;
              font-size: 2em;
          }
      &lt;/style>
    </code>
  </pre>

  <h3>Подключение Шрифтов</h3>
  <p>Подключение шрифтов можно выполнить двумя основными способами: через глобальный CSS-файл (рекомендуется) или через HTML-разметку.</p>

<h5 style='color:'white;'>Способ A: Подключение Через Глобальный SCSS Файл <strong>(Рекомендуется)</strong></h5>

  <p>Этот метод идеально подходит, если вы хотите, чтобы шрифт был доступен во всем приложении.</p>
<h5>Шаг 1: Создание Глобального Файла Стилизации</h5>
  <p>Создайте файл для глобальных стилей (например, src/app.scss или src/styles/global.scss).</p>
<h5>Шаг 2: Импорт Шрифтов</h5>
  <p>В этом глобальном файле вы импортируете шрифты (либо через @import Google Fonts, либо через @font-face для локальных файлов).</p>
<details>
  <summary>Пример импорта и подключения Google Fonts.</summary>
  <pre>
    <code>
      // src/styles/global.scss

      // Пример 1: Google Fonts (импорт)
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      // Пример 2: Локальные шрифты (подключение)
      @font-face {
        font-family: 'CustomFont';
        src: url('/fonts/CustomFont-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }

      // Применение шрифта ко всему приложению
      body {
          font-family: 'Roboto', sans-serif;
      }
    </code>
  </pre>
</details>
<h5>Шаг 3: Импорт Глобального Файла в SvelteKit</h5>
  <p>В SvelteKit вы импортируете глобальные стили в корневой макет приложения, который обычно находится в src/routes/+layout.svelte.</p>
  <pre>
    <code>
      &lt;script>
          // Импортируем SCSS-файл. Это делает стили глобальными.
          import '../styles/global.scss'; 
      &lt;/script>
      &lt;slot />
    </code>
  </pre>
<h5 style='color:'white;'>Способ B: Подключение Через &lt;link> в HTML (Для Google Fonts)</h5>
 <p>Если вы используете SvelteKit, вы можете добавить &lt;link> для шрифтов прямо в &lt;head> документа, используя файл src/app.html.</p>

<h5>Шаг 1: Добавление ссылки в app.html</h5>
 <p>Откройте файл src/app.html и добавьте ссылку на шрифт внутри тега &lt;head>: </p>
<details>
<summary> Пример подключения шрифта в тег &lt;head></summary>  
  <pre>
    <code>
      &lt;!doctype html>
      &lt;html lang="en">
        &lt;head>
              &lt;link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
              
              &lt;/head>
        &lt;body data-sveltekit-preload-data>
          &lt;div style="display: contents">%sveltekit.body%&lt;/div>
        &lt;/body>
      &lt;/html>
    </code>
  </pre>
</details>
  <p>Это гарантирует, что браузер начнет загрузку шрифтов максимально рано.</p>
<br>
<hr style=' border: 1px groove white;'>
<hr style='width:100%; border: 1px groove white;'>
<hr style=' border: 1px groove white;'>
<br>
  <p>в Svelte 5, как и в любом современном фронтенд-фреймворке, можно и часто необходимо использовать стили, управляемые JavaScript, для динамических изменений.</p>

  <p>Вы можете управлять стилями, используя объект со свойствами, но в Svelte для этого есть более реактивные и чистые способы, которые лучше интегрированы в систему: Инлайн-стили с привязкой (style:) и Условная привязка классов (class:).</p>

<h4>1. Реактивные Инлайн-Стили (Svelte 5 style:)</h4>
  <p>В Svelte предпочтительнее не создавать и не изменять весь объект стилей в JavaScript, а <strong>реактивно привязывать отдельные свойства стилей</strong> к переменным $state.</p>
  <h5>Алгоритм: Управление Отдельными Свойствами.</h5>
  <p>1. Объявите $state переменные для нужных вам стилей.</p>
  <p>2. Используйте директиву style: для привязки переменной к CSS-свойству.</p>
<details>
  <summary>📝 Пример: Изменение Цвета и Размера:</summary>
  <pre>
    <code>
      &lt;script>
          let primaryColor = $state('blue');
          let currentSize = $state(16);

          function enlarge() {
              currentSize += 2;
              primaryColor = currentSize > 20 ? 'red' : 'green';
          }
      &lt;/script>

      &lt;button onclick={enlarge}>Увеличить текст&lt;/button>

      &lt;p 
          style:color={primaryColor} 
          style:font-size={&#96;$ { currentSize }px&#96;} 
          style:transition="all 0.3s"
      >
          Этот текст меняет цвет и размер.
      &lt;/p>
    </code>
  </pre>
</details>
<p>В этом примере:</p>

<p>🎭 style:color={primaryColor}: Цвет текста реактивно берется из переменной primaryColor.</p>

<p>🎭 style:font-size: Здесь мы используем шаблонную строку ($ {...}px) для динамического создания значения стиля.</p>

<h4>2. Условное Добавление Классов (Svelte class:)</h4>

  <p>Чаще всего для управления стилями используют классы, а не инлайн-стили, поскольку это чище и лучше для производительности. Svelte предлагает для этого синтаксис class:.</p>

  <p>Алгоритм: Управление Классами</p>
  <p>Опишите стили для разных состояний в &lt;style>.</p>

  <p>Используйте директиву class: для условного добавления класса на основе булевой переменной $state.</p>

<details>
  <summary>📝 Пример: Активное Состояние </summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
          let isActive = $state(false);
      &lt;/script>

      &lt;button onclick={() => isActive = !isActive}>
          Переключить
      &lt;/button>

      &lt;div class:active={isActive} class="box">
          Состояние: {isActive ? 'Активно' : 'Неактивно'}
      &lt;/div>

      &lt;style>
          .box {
              padding: 10px;
              border: 2px solid gray;
              transition: background-color 0.3s;
          }

          /* Стиль, который добавляется только при isActive === true */
          .active {
              background-color: yellow;
              border-color: gold;
              font-weight: bold;
          }
      &lt;/style>
    </code>
  </pre>
  <p>class:active={isActive}: Класс .active будет автоматически добавлен к элементу &lt;div>, когда isActive равно true, и удален, когда isActive равно false.</p>
</details>
  <p><strong>Вывод: В Svelte вы избегаете прямого манипулирования DOM и стилями через JavaScript-объекты. Вместо этого вы используете декларативный подход: реактивные переменные ($state) управляют атрибутами (style:) и классами (class:).</strong></p>
</article>`);


taskCurrent++;
taskSubnumber = 1;
nameTask = 'стили внутри дочернего компонента';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/component-styles">tutorial</a>
<p>Часто возникает необходимость изменить стили внутри дочернего компонента. Например, необходимо внутри контейнера сделать блоки красными, зелёными или синими.</p>
  <p>Не рекомендуется использовать <mark>:global модификатор</mark> CSS, который позволяет вам без разбора выбирать элементы внутри других компонентов.</p>
  <p>Компоненты должны иметь возможность самостоятельно решать, какими стилями можно управлять «извне», так же, как они решают, какие переменные выставлять как свойства. :global cледует использовать как запасной выход — на крайний случай.</p>
  <p>Рекомендуется применять пользовательские свойства CSS. Например:</p>
  <pre>
    <code>
      &lt;style>
        .box {
          width: 5em;
          height: 5em;
          border-radius: 0.5em;
          margin: 0 0 1em 0;
          background-color: var(--color, #ddd);
        }
      &lt;/style>
    </code>
  </pre>
<p>Любой родительский элемент (например &lt;div class="boxes">, ) может задать значение --color, но мы также можем задать его для отдельных компонентов:</p>
  <pre>
    <code>
      &lt;div class="boxes">
        &lt;Box --color="red" />
        &lt;Box --color="green" />
        &lt;Box --color="blue" />
      &lt;/div>
    </code>
  </pre>
<strong>Значения могут быть динамическими, как и любой другой атрибут.</strong>
<h5>Эта функция работает, заключая каждый компонент в элемент с <mark style='background-color:pink;'>display: contents</mark>, где это необходимо, и применяя к нему пользовательские свойства. Если вы проверите элементы, вы увидите следующую разметку:</h5>

  <pre>
    <code>
      &lt;svelte-css-wrapper style="<mark style='background-color:pink;'>display: contents</mark>; --color: red;">
        &lt;!-- contents -->
      &lt;/svelte-css-wrapper>
    </code>
  </pre>
<p>Поскольку <mark style='background-color:pink;'>display: contents</mark> - это не повлияет на ваш макет, но дополнительный элемент может повлиять на селекторы, такие как .parent > .child.</p>

<details>
  <summary style='background-color:pink;'>Пояснение для <mark style='background-color:pink;'>display: contents</mark> </summary>

  <div style='border: 4px solid pink; line-height:2rem; color: darkmagenta;'>
      <p>Svelte (или другие инструменты) иногда "заворачивает" ваши компоненты в дополнительную обертку для управления стилями или реактивностью. Это часто происходит в процессе компиляции.</p>

      <mark style='background-color:pink;'>display: contents</mark> — это значение CSS-свойства display, которое имеет очень специфическое и полезное назначение в веб-разработке.

        <h5>1. Как это работает?</h5>
        <p>Когда вы применяете <mark style='background-color:pink;'>display: contents</mark> к элементу (например, к вашему &lt;svelte-css-wrapper>):</p>

        <p>Элемент-обёртка исчезает из макета. Сам элемент-контейнер (&lt;svelte-css-wrapper>) исчезает из стандартного потока макета (Layout) и рендеринга.</p>

        <p>Его потомки становятся прямыми детьми. Дочерние элементы контейнера ведут себя так, как будто они были прямыми потомками родителя контейнера.</p>

      <pre>
        <code>
        <h5>Вместо ожидаемого:</h5>
          &lt;div class="parent">	
              &lt;div class="child">...&lt;/div>	// Child - это прямой потомок parent.
          &lt;/div>
        <h5>Фактически имеем:</h5>
          &lt;div class="parent">	
            &lt;wrapper style="<mark style='background-color:pink;'>display: contents</mark>;"> //	Wrapper исчезает из макета, не занимая места.
              &lt;div class="child">...&lt;/div>	// Child ведет себя как прямой потомок parent.
          &lt;/div>
        </code>
      </pre>
      <p><mark>Вывод:</mark> Благодаря <mark style='background-color:pink;'>display: contents</mark>, этот дополнительный элемент не нарушает визуальное оформление (например, Flexbox или Grid), поскольку он сам не занимает места и не добавляет отступов.</p>

      <h5>2. Влияние на Селекторы: .parent > .child</h5>
      <strong>Проблема возникает не в макете, а в том, как CSS-селекторы видят структуру DOM.</strong>

      <p> Почему Селектор Ломается?</p>
    <p>Если вы используете CSS-правило:

      <pre>
        <code>
    .parent > .child {
        /* ...стили... */
    }
        </code>
      </pre>
    <p>В Ожидаемой структуре: Правило сработает, потому что .child является прямым потомком .parent.</p>

    <p>В Фактической структуре: Правило НЕ сработает. Прямым потомком .parent теперь является &lt;svelte-css-wrapper>. Элемент .child стал внуком, а не прямым потомком.</p>

    <p>Резюме: <mark style='background-color:pink;'>display: contents</mark> решает проблему макета, позволяя компоненту встроиться без визуального мусора. Но это не может скрыть сам DOM-элемент от CSS-селекторов, что может нарушить стили, основанные на строгих отношениях родитель-потомок.</p>

  </div>
</details>

<details>
  <summary>Пример раскрашивания дочерних элементов</summary>
  <pre>
    <code>
      # Компонент Box.svelte ===========

      &lt;div class="box">&lt;/div>

      &lt;style>
        .box {
          width: 5em;
          height: 5em;
          border-radius: 0.5em;
          margin: 0 0 1em 0;
          background-color: var(--color, #ddd); // --color - раскрасит квадрат
        }
      &lt;/style>


      # Элемент App.svelte ===============

      &lt;script>
        import Box from './Box.svelte'; // импортировали квадрат
      &lt;/script>

      &lt;div class="boxes">
        &lt;Box --color="red"/>  // во время монтажа - указываем его цвет
        &lt;Box --color="darkviolet"/>  // во время монтажа - указываем его цвет
        &lt;Box --color="skyblue"/>  // во время монтажа - указываем его цвет
      &lt;/div>
    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'action (действия)';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/actions">tutorial</a>

  <h5>Действия — это, по сути, функции жизненного цикла на уровне элементов. Они полезны для таких задач, как:</h5>

<p> взаимодействие со сторонними библиотеками</p>
<p> лениво загруженные изображения</p>
<p> подсказки</p>
<p> добавление пользовательских обработчиков событий</p>  

<p></p>
<details>
  <summary>Пример кода. Рисовалка на  Canvas.</summary>
  <pre>
    <code>
# App.svelte

    &lt;script>
      import Canvas from './Canvas.svelte';
      import {trapFocus} from './actions.svelte.js';
        const colors = ['red', 'orange', 'yellow', 'green', '#123456', 'blue', 'skyblue', 'indigo', 'violet', 'white', 'black'];

        let selected = $state(colors[0]);
        let size = $state(10);
        let showMenu = $state(true);
      &lt;/script>

      &lt;div class="container">
        &lt;Canvas color={selected} size={size} />

        {#if showMenu}
          &lt;div
            <strong>&lt;</strong>="presentation" // **пояснение**
            class="modal-background"
            onclick={(event) => {
              if (event.target === event.currentTarget) {
                showMenu = false;
              }
            }}
            onkeydown={(e) => {
              if (e.key === 'Escape') {
                showMenu = false;
              }
            }}
          >

          // **пояснение**  -  атрибут <strong>&lt;</strong> является стандартным атрибутом HTML5. 
          // Он является частью спецификации ARIA (Accessible Rich Internet 
          // Applications), которая расширяет возможности HTML для повышения 
          // доступности (Accessibility, A11Y).

            &lt;div class="menu" use:trapFocus>
              &lt;div class="colors">
                {#each colors as color}
                  &lt;button
                    class="color"
                    aria-label={color}
                    aria-current={selected === color}
                    style="--color: {color}"
                    onclick={() => {
                      selected = color;
                    }}
                  >&lt;/button>
                {/each}
              &lt;/div>

              &lt;label>
                small
                &lt;input type="range" bind:value={size} min="1" max="50" />
                large
              &lt;/label>
            &lt;/div>
          &lt;/div>
        {/if}

        &lt;div class="controls">
          &lt;button class="show-menu" onclick={() => showMenu = !showMenu}>
            {showMenu ? 'close' : 'menu'}
          &lt;/button>
        &lt;/div>
      &lt;/div>

      &lt;style>
        .container {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .controls {
          position: absolute;
          left: 0;
          top: 0;
          padding: 1em;
        }

        .show-menu {
          width: 5em;
        }

        .modal-background {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(20px);
        }

        .menu {
          position: relative;
          background: var(--bg-2);
          width: calc(100% - 2em);
          max-width: 28em;
          padding: 1em 1em 0.5em 1em;
          border-radius: 1em;
          box-sizing: border-box;
          user-select: none;
        }

        .colors {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(9, 1fr);
          grid-gap: 0.5em;
        }

        .color {
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--color, #fff);
          transform: none;
          filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
          transition: all 0.1s;
        }

        .color[aria-current="true"] {
          transform: translate(1px, 1px);
          filter: none;
          box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
        }

        .menu label {
          display: flex;
          width: 100%;
          margin: 1em 0 0 0;
        }

        .menu input {
          flex: 1;
        }
      &lt;/style>

# Canvas.svelte

      &lt;script>
        let { color, size } = $props();

        let canvas = $state();
        let context = $state();
        let coords = $state();

        $effect(() => {
          context = canvas.getContext('2d');
          resize();
        });

        function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      &lt;/script>

      &lt;svelte:window onresize={resize} />

      &lt;canvas
        bind:this={canvas}
        onpointerdown={(e) => {
          coords = { x: e.offsetX, y: e.offsetY };

          context.fillStyle = color;
          context.beginPath();
          context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
          context.fill();
        }}
        onpointerleave={() => {
          coords = null;
        }}
        onpointermove={(e) => {
          const previous = coords;

          coords = { x: e.offsetX, y: e.offsetY };

          if (e.buttons === 1) {
            e.preventDefault();

            context.strokeStyle = color;
            context.lineWidth = size;
            context.lineCap = 'round';
            context.beginPath();
            context.moveTo(previous.x, previous.y);
            context.lineTo(coords.x, coords.y);
            context.stroke();
          }
        }}
      >&lt;/canvas>

      {#if coords}
        &lt;div
          class="preview"
          style="--color: {color}; --size: {size}px; --x: {coords.x}px; --y: {coords.y}px"
        >&lt;/div>
      {/if}

      &lt;style>
        canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .preview {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          transform: translate(-50%, -50%);
          background: var(--color);
          border-radius: 50%;
          opacity: 0.5;
          pointer-events: none;
        }
      &lt;/style>

# action.svelte.js

      export function trapFocus(node) {
        const previous = document.activeElement;

        function focusable() {
          return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        }

        function handleKeydown(event) {
          if (event.key !== 'Tab') return;

          const current = document.activeElement;

          const elements = focusable();
          const first = elements.at(0);
          const last = elements.at(-1)

          if (event.shiftKey && current === first) {
            last.focus();
            event.preventDefault();
          }

          if (!event.shiftKey && current === last) {
            first.focus();
            event.preventDefault();
          } 
        }

        $effect(() => {
          focusable()[0]?.focus();
          node.addEventListener('keydown', handleKeydown);
          
          return ()=> {
          node.removeEventListener('keydown', handleKeydown);
          previous?.focus(); 
          }
        });
      }

    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Директива use и сторонние библиотеки';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/adding-parameters-to-actions">tutorial</a>
<p>Подобно переходам и анимации, действие может принимать аргумент, с которым функция действия будет вызываться вместе с элементом, к которому она принадлежит.</p> 
<div style='border: 10px groove silver; background: rgba(255, 255, 255, .3)'>
<p>*** ПОЯСНЕНИЕ *** - можно и НУЖНО использовать любую необходимую готовую библиотеку.</p><br>
 
<p>Для этого её нужно установить через командную строку ( используя npm). </p><br>
 <p>Потом импортировать в файл компонента или элемента необходимую функцию из библиотеки. </p><br>
 <p>Использовать в своём коде. </p><br>
   <p>При сборке проекта для production - в проект войдёт минимальное количество кода. Только тот код, который применялся в этом проекте, а не вся использованная библиотека.</p>
 </div>
<details>
  <summary>Пример кода. Kak добавить подсказку к кнопке, &lt;button> используя Tippy.js библиотеку.</summary>
  <p>В этом упражнении мы хотим добавить подсказку к кнопке, &lt;button> используя Tippy.js библиотеку. Действие подключено к кнопке use:tooltip, и если навести курсор на кнопку (или сделать на ней фокус с помощью клавиатуры), то появится подсказка.</p>
  <pre>
    <code>
        &lt;script>
          import tippy from 'tippy.js';

          let content = $state('Hello!');

          function tooltip(node, fn) {
            $effect(() => {
              const tooltip = tippy(node, fn());

              return tooltip.destroy;
            });
          }
        &lt;/script>

        &lt;input bind:value={content} />

        &lt;button use:tooltip={()=>({content})}>
          Hover me
        &lt;/button>

        &lt;style>
          :global {
            [data-tippy-root] {
              --bg: #123456;
              background-color: var(--bg);
              color: white;
              border-radius: 0.2rem;
              padding: 0.2rem 0.6rem;
              filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));

              * {
                transition: none;
              }
            }

            [data-tippy-root]::before {
              --size: 0.4rem;
              content: '';
              position: absolute;
              left: calc(50% - var(--size));
              top: calc(-2 * var(--size) + 1px);
              border: var(--size) solid transparent;
              border-bottom-color: var(--bg);
            }
          }
        &lt;/style>

        # Результат =================
        То что введено в &lt;input /> - будет записано в переменную let content  и отобразится во всплывающеё подсказке при наведении на кнопку.
    </code>
  </pre>
  <h5>Ключевые моменты упражнения:</h5>
  <p>Во-первых, действие должно принять функцию, которая возвращает некоторые параметры для передачи Типпи:</p>
  <pre>
    <code>
      function tooltip(node, fn) {
        $effect(() => {
          const tooltip = tippy(node, fn());

          return tooltip.destroy;
        });
      }
        // Мы передаем функцию, а не сами параметры, 
        // поскольку функция tooltipне запускается повторно 
        // при изменении параметров.
    </code>
  </pre>
<p>Второе! Затем нам нужно передать параметры в действие:</p>
  <pre>
    <code>
      &lt;button use:tooltip={() => ({ content })}>
        Hover me
      &lt;/button>
    </code>
  </pre>
</details>
</article>`);





taskCurrent++;
taskSubnumber = 1;
nameTask = 'Директива transition:fade';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/transition">tutorial</a>
<p>Мы можем создавать более привлекательные пользовательские интерфейсы, плавно перемещая элементы в DOM и из него. Svelte упрощает эту задачу благодаря transition директиве.</p>

<p>Сначала импортируем fade функцию из <mark>svelte/transition</mark>...</p>
  <pre>
    <code>
      &lt;script>
        import { fade } from 'svelte/transition';

        let visible = $state(true);
      &lt;/script>
    </code>
  </pre>
<p>...затем добавьте его к &lt;p> элементу:</p>
  <pre>
    <code>
      &lt;p transition:fade>
        Fades in and out
      &lt;/p>
    </code>
  </pre>
<details>
  <summary>Пример кода</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
        import {fade} from 'svelte/transition'
        let visible = $state(true);
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={visible} />
        visible
      &lt;/label>

      {#if visible}
         &lt;p transition:fade>
          Fades in and out
        &lt;/p>
      {/if}

    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Директива transition:fly';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p>Функции перехода могут принимать параметры.</p>
  <pre>
    <code>
      &lt;script>
        import { fly } from 'svelte/transition';

        let visible = $state(true);
      &lt;/script>
    </code>
  </pre>
<p> Например, директива transition:fly содержит настройки длительности и расстояния.</p>
  <pre>
    <code>
      &lt;p transition:fly=<strong>{{</strong>x:200, y:200, duration:2000<strong>}}</strong>>
        Flies in and out
      &lt;/p>
    </code>
  </pre>
  <strong>Двойные фигурные скобки {{curlies}} - не является специальным синтаксисом; это литерал объекта внутри тега выражения.</strong>
<details>
  <summary>Пример кода</summary>
  <p>Обратите внимание, что <strong>переход обратим</strong> — если вы переключите флажок во время перехода, переход будет выполнен с текущей точки, а не с начала или конца.</p>
  <pre>
    <code>
      &lt;script>
        import { fly } from 'svelte/transition';
        let visible = $state(true);
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={visible} />
        visible
      &lt;/label>

      {#if visible}
        &lt;p transition:fly={{x:200, y:200, duration:2000}}>
          Fades in and out
        &lt;/p>
      {/if}
    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Директивы in и out';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/in-and-out">tutorial</a>
<p>Вместо transition директивы элемент может иметь in или out директивы, или обе сразу.</p> 
<p>Например, Можно Импортировать fade вместе с fly...</p>
  <pre>
    <code>
      import { fade, fly } from 'svelte/transition';
    </code>
  </pre>
    <p>...затем замените transition директиву на отдельные директивы in: и out:</p>
  <pre>
    <code>
      &lt;p in:fly={{ y: 200, duration: 2000 }} out:fade>
        Flies in, fades out
      &lt;/p>
    </code>
  </pre>
  <strong> В этом случае переходы не обратные. </strong>
<details>
  <summary>Пример кода. Плавное появление справа и исчезание текста.</summary> 
  <pre>
    <code>
      &lt;script>
        import { fade, fly } from 'svelte/transition';

        let visible = $state(true);
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={visible} />
        visible
      &lt;/label>

      {#if visible}
        &lt;p in:fly={{ x: 200, duration: 2000 }} out:fade>
          Flies in, fades out
        &lt;/p>
      {/if}

    </code>
  </pre>
  <p></p>
</details>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Модуль svelte/transition';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/custom-css-transitions">tutorial</a>
<p>Модуль svelte/transition имеет несколько встроенных переходов, но можно легко создать свой собственный. Вот пример исходного кода fade перехода:</p>

  <pre>
    <code>
      function fade(node, { delay = 0, duration = 400 }) {
        const o = +getComputedStyle(node).opacity;

        return {
          delay,
          duration,
          css: (t) => &#96;opacity: $ {t * o}&#96;
        };
      }
    </code>
  </pre>
  <p>Функция принимает два аргумента — узел, к которому применяется переход, и любые переданные параметры — и возвращает объект перехода, который может иметь следующие свойства:</p>
  <ul>
  <li><mark>delay</mark> — миллисекунды до начала перехода</li>
  <li><mark>duration</mark> — длина перехода в миллисекундах</li>
  <li><mark>easing</mark> — p => t функция смягчения (см. главу о создании промежуточных кадров )</li>
  <li><mark>css</mark> — (t, u) => css функция, где u === 1 - t</li>
  <li><mark>tick</mark> — (t, u) => {...} функция, которая оказывает некоторое влияние на узел</li>
</ul>
<p>Значение t находится 0 в начале вступления или в конце аутро, а также 1 в конце вступления или в начале аутро.
</p>
<p>
В большинстве случаев следует возвращать css свойство, а не свойство tick, поскольку CSS-анимации выполняются вне основного потока, чтобы предотвратить подтормаживания, где это возможно. Svelte «симулирует» переход и создаёт CSS-анимацию, а затем запускает её.
</p>
<p>
fade переход генерирует CSS-анимацию примерно так:
</p>
  <pre>
    <code>
0% { opacity: 0 }
10% { opacity: 0.1 }
20% { opacity: 0.2 }
/* ... */
100% { opacity: 1 }
    </code>
  </pre>
  <strong> Но мы можем быть гораздо более креативными. Давайте сделаем что-нибудь действительно грандиозное. Например, function spin: </strong>

<details>
  <summary>Пример кода Spiner</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
        import { fade } from 'svelte/transition';
        import { elasticOut } from 'svelte/easing';

        let visible = $state(true);

        function spin(node, { duration }) {
          return {
            duration,
            css: (t, u) => {
              const eased = elasticOut(t);

              return &#96;
                transform: scale($ {eased}) rotate($ {eased * 1080}deg);
                color: hsl(
                  $ {Math.trunc(t * 360)},
                  $ {Math.min(100, 1000 * u)}%,
                  $ {Math.min(50, 500 * u)}%
                );&#96;
            }
          };
        }
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={visible} />
        visible
      &lt;/label>

      {#if visible}
        &lt;div
          class="centered"
          in:spin={{ duration: 8000 }}
          out:fade
        >
          &lt;span>transitions!&lt;/span>
        &lt;/div>
      {/if}

      &lt;style>
        .centered {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        span {
          position: absolute;
          transform: translate(-50%, -50%);
          font-size: 4em;
        }
      &lt;/style>

    </code>
  </pre>
</details>
<h5>Пользовательские функции перехода (<a href="https://svelte.dev/docs/svelte/transition#Custom-transition-functions" >дополнительно</a>)</h5>
  <p>Переходы могут использовать пользовательские функции. Если возвращаемый объект содержит функцию css, Svelte сгенерирует ключевые кадры для веб-анимации.</p>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'эффект пишущей машинки';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/custom-js-transitions">tutorial</a>
<p>Хотя для переходов обычно следует как можно чаще использовать CSS, есть некоторые эффекты, которых невозможно добиться без JavaScript, например, эффект пишущей машинки:</p>

<p></p>
<details>
  <summary>Пример кода для появления текста c эффектом пишущей машинки</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
        let visible = $state(false);

        function typewriter(node, { speed = 1 }) {
        const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
          throw new Error(&#96;This transition only works on elements with a single text node child&#96;);
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
          duration,
          tick: (t) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
          }
        };
      }
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={visible} />
        visible
      &lt;/label>

      {#if visible}
        &lt;p transition:typewriter>
          The quick brown fox jumps over the lazy dog
        &lt;/p>
      {/if}

    </code>
  </pre>

</details>
  <p>
<strong> Когда переходы начинаются и заканчиваются - Svelte отправляет события, которые можно прослушивать, как и любые другие события DOM: </strong></p>

  <pre>
    <code>
      &lt;p
        transition:fly={{ y: 200, duration: 2000 }}
        onintrostart={() => status = 'intro started'}
        onoutrostart={() => status = 'outro started'}
        onintroend={() => status = 'intro ended'}
        onoutroend={() => status = 'outro ended'}
      >
        Flies in and out
      &lt;/p>
    </code>
  </pre>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Глобальные переходы';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/global-transitions">tutorial</a> 
<p>
Обычно переходы воспроизводятся только на элементах при добавлении или удалении их непосредственного содержащего блока.В приведённом здесь примере переключение видимости всего списка не приводит к применению переходов к отдельным элементам списка.</p>
<p>
Вместо этого мы бы хотели, чтобы переходы воспроизводились не только при добавлении и удалении отдельных элементов с помощью ползунка, но и при переключении флажка.</p>
<p>
Мы можем добиться этого с помощью глобального перехода, который воспроизводится при добавлении или удалении любого блока, содержащего переходы:
</p>

  <pre>
    <code>
  &lt;div transition: slide | global >
    { item }
&lt;/div >
    </code>
  </pre> 
<details>
  <summary>Пример кода. Плавное управление видимостью элементов списка + кнопка скрытия всего списка.</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
        import { slide } from 'svelte/transition';

        let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

        let showItems = $state(true);
        let i = $state(5);
      &lt;/script>

      &lt;label>
        &lt;input type="checkbox" bind:checked={showItems} />
        show list
      &lt;/label>

      &lt;label>
        &lt;input type="range" bind:value={i} max="10" />
      &lt;/label>

      {#if showItems}
        {#each items.slice(0, i) as item}
          &lt;div transition:slide|global>
            {item}
          &lt;/div>
        {/each}
      {/if}

      &lt;style>
        div {
          padding: 0.5em 0;
          border-top: 1px solid #eee;
        }
      &lt;/style>

    </code>
  </pre>
  <p></p>
</details>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Ключевые блоки';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/key-blocks">tutorial</a>
<p>Ключевые блоки уничтожают и воссоздают своё содержимое при изменении значения выражения. Это полезно, если вы хотите, чтобы элемент воспроизводил переход при каждом изменении значения, а не только при входе или выходе элемента из DOM.</p>
<p>
Например, мы хотим воспроизводить typewriter переход transition.js при каждом изменении сообщения о загрузке i. Оберните &lt;p> элемент в ключевой блок:</p>
  <pre>
    <code>
      {#key i}
        &lt;p in:typewriter={{ speed: 10 }}>
          {messages[i] || ''}
        &lt;/p>
      {/key}
    </code>
  </pre>
<details>
  <summary>Пример кода</summary>
  <p>Попробуй с {#key i}  {/key} и без них, только с &lt;p></p>
  <pre>
    <code>
 # App.svelte

    &lt;script>
      import { typewriter } from './transition.js';
      import { messages } from './loading-messages.js';

      let i = $state(-1);

      $effect(() => {
        const interval = setInterval(() => {
          i += 1;
          i %= messages.length;
        }, 2500);

        return () => {
          clearInterval(interval);
        };
      });
    &lt;/script>

    &lt;h1>loading...&lt;/h1>

    {#key i}
      &lt;p in:typewriter={{ speed: 10 }}>
        {messages[i] || ''}
      &lt;/p>
    {/key}


 # loading-messages.js

      // thanks to https://gist.github.com/meain/6440b706a97d2dd71574769517e7ed32
      export const messages = [
        "reticulating splines...",
        "generating witty dialog...",
        "swapping time and space...",
        "640K ought to be enough for anybody",
        "checking the gravitational constant in your locale...",
        "keep calm and npm install",
        "counting backwards from Infinity",
        "I'm sorry Dave, I can't do that.",
        "adjusting flux capacitor...",
        "constructing additional pylons...",
        "rm -rf /",
      ];
 
 # transition.js

    export function typewriter(node, { speed = 1 }) {
      const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

      if (!valid) {
        throw new Error(&#96;This transition only works on elements with a single text node child&#96;);
      }

      const text = node.textContent;
      const duration = text.length / (speed * 0.01);

      return {
        duration,
        tick: (t) => {
          const i = Math.trunc(text.length * t);
          node.textContent = text.slice(0, i);
        }
      };
    }
    </code>
  </pre>
  <p></p>
</details>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Ещё о Пользовательских функциях переходов';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/docs/svelte/transition">tutorial</a>
<p>Переход инициируется , когда элемент входит в DOM или покидает его в результате изменения состояния.</p> 
<p>Когда блок (например, {#if ...} блок) переходит наружу, все элементы внутри него, включая те, которые не имеют собственных переходов, сохраняются в DOM до тех пор, пока не будут завершены все переходы в блоке.
  </p><p>
Директива transition: - указывает на двунаправленный переход, то есть ее можно плавно отменить в процессе перехода.</p>

<h5>Локальный против глобального</h5>
 <p>Переходы по умолчанию локальные. Локальные переходы воспроизводятся только при создании или уничтожении блока, к которому они принадлежат, а не при создании или уничтожении родительских блоков. </p>
  <pre>
    <code>
      {#if <span style='color:blue; font-weight:800;'>x</span>}
        {#if <span style='color:orange; font-weight:800;'>y</span>}
          &lt;p transition:<strong style='color:pink;'>fade</strong>>fades in and out only when <span style='color:orange; font-weight:800;'>y</span> changes&lt;/p>

          &lt;p transition:<strong>fade|global</strong>>fades in and out when <span style='color:blue; font-weight:800;'>x</span> or <span style='color:orange; font-weight:800;'>y</span> change&lt;/p>
        {/if}
      {/if}
    </code>
  </pre>

  <h5>Встроенные переходы</h5>
<p>Из модуля можно импортировать ряд встроенных переходов svelte/transition.</p>
<a href="https://svelte.dev/docs/svelte/svelte-transition"><strong style='padding: 4px 12px; border-radius: 8px; background:#123456; color: yellow; font-size: 1.5rem; width: fit-content; display:inline;'>ссылка на "Подробное описание для каждого перехода"</strong></a>

  <pre>
    <code>
    import {
      blur,
      crossfade,
      draw,
      fade,
      fly,
      scale,
      slide
    } from 'svelte/transition';
    </code>
  </pre>


  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  blur  </mark> 
   --> Анимирует blur фильтр вместе с непрозрачностью элемента.</p>
  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  crossfade  </mark>  
   -->  создаёт пару переходов с именами send и receive. При «отправке» элемента она ищет соответствующий «принимаемый» элемент и генерирует переход, который перемещает элемент в позицию его аналога и затемняет его. При «получении» элемента происходит обратный процесс. Если аналога нет, fallback используется переход. </p>
   <p>Переход crossfade — один из самых мощных и сложных переходов в Svelte. Он предназначен не для простого появления/исчезновения элемента, а для плавного перемещения элемента с одного места на странице в другое.</p>

   <h5>crossfade используется для анимации элемента, который перемещается между двумя списками или контейнерами.</h5>

<p>1. Как это работает?</p>
<p>Когда элемент удаляется из первого контейнера, вызывается функция send. Она "замораживает" элемент на месте и готовит его к перемещению.</p>

<p>Когда этот же элемент добавляется во второй контейнер, вызывается функция receive. Она анимирует элемент, перемещая его с "замороженной" позиции в первом контейнере на его новое место.</p>

<p>Весь процесс включает плавное исчезновение/появление и изменение размера элемента, чтобы переход выглядел бесшовным.</p>

<p>2. Ключевое Требование
<p><strong>Для работы crossfade оба элемента (удаляемый и добавляемый) должны иметь одинаковый уникальный ключ (ID).</strong></p>

<details>
  <summary>Пример кода. To-Do лист с перемещением записей между столбцами.</summary>
  <h5>При клике на задачу, она перелетает в другой столбец.</h5>
  <p>🔍 Объяснение Свойств и Возможностей crossfade</p>
<p>📝1. Объект crossfade (Фабрика)</p>
<p>duration: d => Math.sqrt(d * 200): Длительность перехода. Svelte передает сюда d (расстояние между старой и новой позициями в пикселях). Мы используем функцию для создания динамической длительности: чем больше расстояние, тем дольше длится анимация.</p>

<p>easing: Функция сглаживания, примененная к перемещению.</p>

<p>📝2. Функции send и receive (Директивы)</p>
<p>Эти функции применяются к элементам с помощью директив transition: (для удаления) и in: (для добавления):</p>

<p>transition:send={{ key: item.id }} (Удаление): Когда элемент удаляется из списка (например, из Pending), send вызывается. Он "отправляет" данные о текущей позиции элемента.</p>

<p>Обязательное свойство key: Это критически важно. Ключ должен быть одинаковым для отправляемого и принимаемого элемента, чтобы crossfade знал, какой элемент куда перемещается.</p>

<p>in:receive={{ key: item.id }} (Добавление): Когда элемент добавляется в новый список (например, в Completed), receive вызывается. Он принимает данные, отправленные send, и анимирует элемент с той старой позиции на новую.</p>

<p>📝3. Свойство fallback</p>
<p>Это специальное свойство для crossfade. Оно определяет, как элемент должен себя вести, если он удаляется (send), но никогда не появляется (receive) в другом месте (например, если бы мы полностью удалили задачу). В этом случае он просто плавно исчезнет (opacity: 0).</p>
  <pre>
    <code>

      &lt;script>
        import { crossfade } from 'svelte/transition';
        import { quintOut } from 'svelte/easing';

        let items = $state([
            { id: 1, text: 'Купить молоко', done: false },
            { id: 2, text: 'Написать код Svelte', done: false },
            { id: 3, text: 'Проверить crossfade', done: true }
        ]);
        
        const [send, receive] = crossfade({
            // Общие параметры для send и receive
            duration: d => Math.sqrt(d * 200), // Динамическая длительность
            easing: quintOut,
            
            // 2. Уникальный параметр 'fallback'
            // Что делать, если элемент исчезает, но не появляется где-то еще (не перемещается)
            fallback: d => ({
                duration: 300,
                opacity: 0,
                delay: d * 50
            })
        });

        const pending = $derived(items.filter(item => !item.done));
        const completed = $derived(items.filter(item => item.done));

        function toggleItem(id) {
            items = items.map(item => 
                item.id === id ? { ...item, done: !item.done } : item
            );
        }
      &lt;/script>

      &lt;main>
          &lt;h2>Анимация "crossfade" (Перемещение элементов)&lt;/h2>
          
          &lt;div class="container">
              &lt;div class="list pending">
                  &lt;h3>&#9203; В процессе ({pending.length})&lt;/h3>
                  {#each pending as item (item.id)}
                      &lt;button
                        class="item"
                        type="button"
                        out:send={{ key: item.id }}
                        in:receive={{ key: item.id }}
                        onclick={() => toggleItem(item.id)}
                        >
                          {item.text}
                        &lt;/button>
                  {/each}
              &lt;/div>

              &lt;div class="list completed">
                  &lt;h3>&#10003; Завершено ({completed.length})&lt;/h3>
                  {#each completed as item (item.id)}
                      &lt;button
                        class="item"
                        type="button"
                        out:send={{ key: item.id }}
                        in:receive={{ key: item.id }}
                        onclick={() => toggleItem(item.id)}
                        >
                          {item.text}
                        &lt;/button>
                  {/each}
              &lt;/div>
          &lt;/div>
      &lt;/main>

      &lt;style>
          .container {
              display: flex;
              gap: 40px;
              margin-top: 20px;
          }
          .list {
              width: 100%;
              max-width: 300px;
              padding: 15px;
              border-radius: 8px;
              background-color: #f4f4f4;
              min-height: 200px;
          }
          .pending {
              background-color: #fff7e6;
          }
          .completed {
              background-color: #e6fff7;
          }
          .item {
              color: black;
              margin: 10px 0;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              cursor: pointer;
              border-left: 5px solid #ff3e00;
              transition: border-color 0.3s;
          }
          .done {
              border-left: 5px solid #4caf50;
              text-decoration: line-through;
              opacity: 0.7;
          }
      &lt;/style>

    </code>
  </pre>
  <p></p>
</details>


  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  draw  </mark>   
   -->  Анимирует обводку элемента SVG, подобно змее в трубе. in Переходы начинаются с невидимого пути и со временем отрисовывают путь на экране. out Переходы начинаются в видимом состоянии и постепенно стирают путь. draw Работает только с элементами, имеющими getTotalLength метод, например &lt;path> и &lt;polyline>.
  </p>

<details>
  <summary>Пример кода. Анимируется элемент **&lt;path&gt;** внутри SVG.</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
          // Руна $state не требует импорта в Svelte 5
          let visible = $state(true); 
          
          // 1. Импорт функции перехода (transition function)
        import { draw } from 'svelte/transition';

          // 2. Объект параметров для настройки перехода
          const drawParams = { 
              duration: 1500, // Длительность анимации (1.5 секунды)
              delay: 50,      // Небольшая задержка перед началом
              
              // 3. Уникальное свойство 'speed': Скорость рисования относительно длины пути
              // (1.0 - полная скорость, 0.5 - половина скорости и т.д.)
              speed: 0.5 
          };

          function toggleVisibility() {
              visible = !visible;
          }
      &lt;/script>

      &lt;main>
          &lt;h2>Переход "draw" (SVG Рисование)&lt;/h2>
          
          &lt;button onclick={toggleVisibility}>
              {visible ? 'Стереть (draw out)' : 'Нарисовать (draw in)'}
          &lt;/button>

          {#if visible}
              &lt;svg viewBox="0 0 100 100" class="svg-container">
                  &lt;path 
                      d="M 20 20 C 40 10, 60 90, 80 80" 
                      fill="transparent"
                      stroke="#ff3e00"
                      stroke-width="5"
                      transition:draw={drawParams}
                  />
              &lt;/svg>
              &lt;p>
                  Анимируется элемент **&lt;path&gt;** внутри SVG.
              &lt;/p>
          {/if}
      &lt;/main>

      &lt;style>
          .svg-container {
              width: 100%;
              max-width: 300px;
              height: auto;
              border: 1px solid #eee;
              margin: 20px 0;
          }
          
          button {
              padding: 10px 15px;
              font-size: 1em;
              cursor: pointer;
          }
          
          /* Важно! Для smooth-анимации Svelte временно манипулирует 
            свойствами stroke-dasharray и stroke-dashoffset */
          path {
              transition: stroke-dashoffset 0.2s; 
          }
      &lt;/style>
    </code>
  </pre>
  <p></p>
</details>
  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  fade  </mark>   
   -->  Анимирует непрозрачность элемента от 0 до текущей непрозрачности для in переходов и от текущей непрозрачности до 0 для out переходов.
  </p>
  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  fly  </mark>   
   -->  Анимирует положения x и y, а также непрозрачность элемента. in Переходы анимируют из предоставленных значений, переданных в качестве параметров, в значения элемента по умолчанию. out Переходы анимируют из значений элемента по умолчанию в предоставленные значения.
  </p>



  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  scale  </mark>   
   -->  Анимирует непрозрачность и масштаб элемента. in Переходы анимируют от предоставленных значений, переданных в качестве параметров, к текущим (по умолчанию) значениям элемента. out Переходы анимируют от значений элемента по умолчанию к предоставленным значениям.
  </p>
  <details>
  <summary>Пример кода для  scale </summary>
  <p>Масштабирование элемента. <strong>&lt;p>Some next text.&lt;/p> - поднимается и становится вместо исчезающего блока</strong></p>
  <pre>
    <code>
        &lt;script>
            // Руна $state не требует импорта в Svelte 5
            let visible = $state(true); 
            
            // 1. Импорт функции перехода (transition function)
          import { scale } from 'svelte/transition';

            // 2. Объект параметров для настройки перехода
            const scaleParams = { 
                duration: 400, // Время перехода в миллисекундах
                delay: 50,     // Задержка перед началом
                easing: 'cubic-out', // Функция сглаживания (плавное замедление)
                
                // 3. Уникальное свойство 'scale': Начальный коэффициент масштабирования
                // 0.5 означает, что элемент начинается/заканчивается на половине размера
                start: 0.5 
            };

            function toggleVisibility() {
                visible = !visible;
            }
        &lt;/script>

        &lt;main>
            &lt;h2>Переход "scale" (Масштабирование)&lt;/h2>
            
            &lt;button onclick={toggleVisibility}>
                {visible ? 'Скрыть (scale out)' : 'Показать (scale in)'}
            &lt;/button>

            {#if visible}
                &lt;div 
                    transition:scale={{scaleParams}}
                    class="scale-box"
                >
                    &lt;h3>Я масштабируюсь!&lt;/h3>
                    &lt;p>Длительность: **{scaleParams.duration}мс**&lt;/p>
                    &lt;p>Начальный размер (start): **{scaleParams.start}**&lt;/p>
                &lt;/div>
            {/if}
          &lt;p>Some next text.&lt;/p>
        &lt;/main>

        &lt;style>
            .scale-box {
                margin-top: 20px;
                padding: 30px;
                background-color: #2196f3; /* Синий цвет для контраста */
                color: white;
                border-radius: 8px;
                text-align: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                max-width: 300px;
            }
            
            button {
                padding: 10px 15px;
                font-size: 1em;
                cursor: pointer;
                background-color: #123456;
                border: 1px solid #ccc;
                border-radius: 4px;
                transition: background-color 0.35s;
            }
            button:hover {
                background-color: #e0e0e0;
                color: #123456;
            }
        &lt;/style>
    </code>
  </pre>
  <p></p>
</details>


  
  <p><mark style='padding: 4px 12px; border-radius: 8px; background:#123456; color: orange; font-size: 1.5rem; width: fit-content; display:inline;'>
  slide  </mark>   
  -  Вдвигает и выдвигает элемент. Точнее сворачивает и разворачивает элемент, как аналог &lt;details>
  </p> 
  <details>
  <summary>Пример кода для slide - аналог &lt;details></summary>
  <p>Плавное разворачивание и сворачивание блока по клику на кнопку.</p>
  <pre> 
    <code>
      &lt;script>
          import { slide } from 'svelte/transition';

            // 2. Реактивное состояние для управления видимостью блока
          let visible = $state(true);
            
            // 3. Свойства перехода
            // Эти значения будут использоваться для настройки с помощью t:params
            const params = { 
                duration: 500, // Длительность перехода в миллисекундах (0.5 секунды)
                delay: 0,     // Задержка перед началом перехода
                easing: 'ease-out' // Функция сглаживания (кривая движения)
            };
        &lt;/script>

        &lt;main>
            &lt;h2>Переход "slide"&lt;/h2>
            
            &lt;button onclick={() => visible = !visible}>
                {visible ? 'Скрыть блок (slide out)' : 'Показать блок (slide in)'}
            &lt;/button>

            {#if visible}
                &lt;div 
                    transition:slide={{params}}
                    class="slide-box"
                >
                    &lt;h3>Я скольжу!&lt;/h3>
                    &lt;p>Длительность: **{params.duration}мс**&lt;/p>
                    &lt;p>Задержка: **{params.delay}мс**&lt;/p>
                &lt;/div>
            {/if}
        &lt;/main>

        &lt;style>
            .slide-box {
                margin-top: 20px;
                padding: 20px;
                background-color: #ff3e00;
                color: white;
                border-radius: 8px;
                overflow: hidden; /* Важно для slide: предотвращает отображение контента за границами */
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h3 {
                margin-top: 0;
            }
            button {
                padding: 10px 15px;
                font-size: 1em;
                cursor: pointer;
            }
        &lt;/style>
    </code>
  </pre>
  <p></p>
</details>
</article>`);


/* ===========================================================*/


taskCurrent++;
taskSubnumber = 1;
nameTask = 'Tweened';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/tweens">tutorial</a>
<p>Класс Tweened (или функция tweened) из модуля svelte/motion — это инструмент для создания <strong>плавных переходов</strong> между значениями.

Вместо того чтобы число мгновенно «прыгало» с 0 до 100, tweened заставляет его плавно «дотекать» до нужного состояния за определенное время.  </p>

<p>tweened — это простейший способ добавить «лоска» и профессионального вида интерфейсу без написания сложных CSS-анимаций. Он берет на себя всю математику вычисления промежуточных значений.</p>
 
<h5><mark>1. Как это работает?</mark></h5>
<p>Когда вы обновляете значение обычного $state, оно меняется мгновенно. Когда вы обновляете tweened-стор, он запускает анимационный цикл, который постепенно меняет значение в течение указанной длительности.</p>

<details>
  <summary> <mark>2. Пример: Базовый синтаксис</mark> </summary>
  <p>В Svelte 5 мы всё еще можем использовать tweened, но помним, что это Store. Поэтому для доступа к значению в разметке мы используем префикс $.</p>
  <pre>
    <code>
      &#60;script>
        import { tweened } from 'svelte/motion';
        import { cubicOut } from 'svelte/easing';

        // Создаем анимируемое значение
        const progress = tweened(0, {
          duration: 400,      // Длительность анимации в мс
          easing: cubicOut    // Функция плавности (как именно движется значение)
        });

        function start() {
          progress.set(100); // Плавно изменит значение от текущего до 100
        }
      &#60;/script>

      &#60;progress value={$progress} max="100">&#60;/progress>

      &#60;button onclick={start}>Запустить прогресс&#60;/button>
    </code>
  </pre>
</details>
  <h5><mark>3. Настройки (Options)</mark></h5>
  <ul>
    <p>При создании или вызове .set() / .update() можно передать объект настроек:</p>

    <li>duration: время анимации (число или функция (from, to) => number).</li>

    <li>delay: задержка перед началом.</li>

    <li>easing: функция, определяющая характер движения (ускорение, замедление, отскок). Импортируются из svelte/easing.</li>

    <li>interpolate: специальная функция для анимации сложных вещей (например, перетекание одного цвета в другой или одного массива в другой).</li>
  </ul>

  <h5><mark>4. Важный нюанс в Svelte 5</mark></h5>
<p>Хотя tweened — это стор, он отлично дружит с рунами. Если тебе нужно, чтобы анимация зависела от $state, ты можешь использовать $derived.by или просто вызывать .set() внутри эффекта.</p>

<details>
  <summary>Пример «живого» счетчика очков:</summary>
  <p></p>
  <pre>
    <code>
      &#60;script>
        import { tweened } from 'svelte/motion';
        
        let score = $state(0); // Твой основной стейт игры
        const displayedScore = tweened(0); // То, что видит пользователь

        // Следим за изменением реального счета и запускаем анимацию "визуального"
        $effect(() => {
          displayedScore.set(score);
        });
      &#60;/script>

      &#60;div class="score">
        Очки: {Math.round($displayedScore)}
      &#60;/div>

      &#60;button onclick={() => score += 500}>Добавить очки&#60;/button>
    </code>
  </pre>
  <p></p>
</details>
</article>`);





/* ===========================================================*/


taskCurrent++;
taskSubnumber = 1;
nameTask = 'Tween';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/tweens">tutorial</a>

<p>В Svelte 5 произошло разделение: tweened — это старая функция для работы со сторами (Svelte 4), а Tween — это новый класс, созданный специально для Svelte 5 и его системы рун.</p>


<h5>🚀 Класс Tween в Svelte 5</h5>
<p><strong> Класс Tween — это реактивный объект.  </strong>В отличие от сторов, он не требует подписки. Он хранит состояние анимации внутри себя и обновляет его автоматически.</p>

<ul>
<p><mark>Основные свойства:</mark></p>
<li>.current: (Только для чтения) Текущее значение в данный момент времени. Именно его мы привязываем к HTML-элементам.</li>

<li>.target: (Чтение и Запись) Конечное значение, к которому стремится анимация. Как только вы записываете сюда новое число, анимация запускается автоматически.</li>
</ul>
 
<ul>
<p><mark>Дополнительные свойства и особенности:</mark></p>
<li>Метод .set():  позволяет изменить цель и настройки анимации «на лету». Метод .set() возвращает Promise, который разрешится, когда анимация закончится.</li>
<li>Метод .reset(value): Это антипод метода .set().  Мгновенно устанавливает текущее значение (.current) и цель (.target) в указанное число, без анимации.  Например, когда вам нужно «телепортировать» элемент в начало или сбросить прогресс-бар после завершения раунда так, чтобы пользователь не видел обратной анимации «откатывания».</li>
<li>Свойство .is_animating (Только для чтения) - Это реактивное булево свойство.
  Возвращает true, пока анимация находится в движении, и false, когда она остановилась.
  Вы можете блокировать кнопку «Далее», пока цифры счета еще «бегут», или показывать какой-то эффект (свечение, искры), пока длится переход.</li>
<li>Настройка interpolate - Это самая глубокая настройка. По умолчанию Tween умеет работать с числами, массивами чисел и объектами с числами. Но можно анимировать и цвета в формате HEX (#ff0000 -> #0000ff) или строки. Вы можете передать свою функцию интерполяции.</li>
<li>Динамические настройки (Функции в опциях) - можно передавать duration и delay не просто как числа, а как функции. (Наприимер, duration: (from, to) => Math.abs(to - from) * 2, // Скорость зависит от расстояния) - Это сделает анимацию более естественной: маленькое изменение происходит быстро, а большое — дольше.</li>
<li><ul>
<p>Особенности:</p>
<li>
<p>⚠️ Обещания (Promises)</p>
<p>Метод .set() возвращает Promise. Но есть нюанс: если вы запустили анимацию до 100, а через середину пути прервали её и запустили до 0, то первый Promise никогда не разрешится (resolve). Он будет отменен.</p></li>
<li>
<p>⚠️ Глубокая реактивность</p>
<p>В отличие от $state, Tween не является глубоко реактивным в плане изменения внутренних свойств.</p>

<p>Если вы анимируете объект const pos = new Tween({x: 0, y: 0}), вы не можете написать pos.target.x = 10.</p>

<p>Вы обязаны перезаписать объект целиком: pos.target = {x: 10, y: 0}.</p>
</li>
<li>
<p>⚠️ Синхронизация с кадрами</p>
<p>Tween работает на базе requestAnimationFrame. Это означает, что он идеально синхронизирован с частотой обновления вашего монитора (60fps, 120fps и т.д.) и не нагружает процессор так сильно, как это делали бы интервалы setInterval.</p>
</li>
</ul></li>
</ul>

<h5>Резюме: Полный список API Tween</h5>
<table border="1" >
  <thead>
    <tr>
      <th>Имя</th>
      <th>Тип</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="color:#000;"><code>.current</code></td>
      <td style="color:#000;">Свойство (get)</td>
      <td style="color:#000;">Текущее положение «в моменте».</td>
    </tr>
    <tr>
      <td style="color:#000;"><code>.target</code></td>
      <td style="color:#000;">Свойство (get/set)</td>
      <td style="color:#000;">Конечная точка. Запись запускает анимацию.</td>
    </tr>
    <tr>
      <td style="color:#000;"><code>.is_animating</code></td>
      <td style="color:#000;">Свойство (get)</td>
      <td style="color:#000;">Реактивный статус движения.</td>
    </tr>
    <tr>
      <td style="color:#000;"><code>.set(val, opts)</code></td>
      <td style="color:#000;">Метод</td>
      <td style="color:#000;">Запуск анимации с возможностью переопределить настройки.</td>
    </tr>
    <tr>
      <td style="color:#000;"><code>.reset(val)</code></td>
      <td style="color:#000;">Метод</td>
      <td style="color:#000;">Мгновенная установка значения без перехода.</td>
    </tr>
  </tbody>
</table>

<h5>💎 Продвинутые возможности класса Tween</h5>
<details>
  <summary> 1. Анимация объектов и массивов</summary>
<p>Tween умеет анимировать не только числа, но и целые структуры данных (объекты с числами, массивы). Он будет плавно менять каждое число внутри структуры.</p>
  <pre>
    <code>
      JavaScript

      const color = new Tween({ r: 255, g: 0, b: 0 });
      // Позже...
      color.target = { r: 0, g: 0, b: 255 }; 
    </code>
  </pre> 
</details>

<details>
  <summary> 2. Управление в процессе (.set)</summary>
<p>Хотя запись в .target удобна, иногда нужно больше контроля. Метод .set() позволяет изменить цель и настройки анимации «на лету»:</p>
  <pre>
    <code>
      JavaScript

      // Перейти к 200, но медленнее, чем обычно
      x.set(200, { duration: 2000 });
    </code>
  </pre> 
</details>

<details>
  <summary> 3. Обработка завершения</summary>
<p>Метод .set() возвращает Promise, который разрешится, когда анимация закончится. Это полезно для цепочек действий:</p>

  <pre>
    <code>
      JavaScript

      async function jump() {
        await x.set(100);
        await x.set(0);
        console.log('Прыжок завершен!');
      }
    </code>
  </pre> 
</details> 
</article>`);


taskCurrent++;
taskSubnumber = 1;
nameTask = 'Svelte 5 и localStorage';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>

<p>Основная задача — синхронизировать реактивную переменную ($state) с localStorage так, чтобы при загрузке страницы брались данные из хранилища, а при каждом изменении $state данные немедленно туда записывались.</p>

<p><strong> 
Паттерн: Реактивное Хранилище (The "Store-in-localStorage" Pattern) 
</strong></p>
 
<p>Используйте руну $effect для наблюдения за изменениями $state и руну $state для загрузки начальных данных.</p>

  <p><em><mark>Загрузка</mark></em> - используем <mark>$state</mark> - Инициализировать переменную, читая данные из localStorage.</p>

  <p><em><mark>Синхронизация</mark></em> - используем <mark>$effect</mark> - Наблюдать за $state и записывать новое значение в localStorage при каждом его изменении.</p>

  <p><strong> 📝 Лайфхак: </strong></p> 

<details>
  <summary>Инкапсуляция в Хук (Reusable Hook).</summary>
  <p>Создайте переиспользуемую функцию (хук) для любой $state переменной.</p>
  <pre>
    <code>
      // store.js
      // Хелпер, который берет переменную и имя в localStorage
      export function useLocalStorage(key, initialValue) {
          // 1. Загрузка: Читаем значение при инициализации
          const storedValue = localStorage.getItem(key);
          let value = $state(storedValue ? JSON.parse(storedValue) : initialValue);

          // 2. Синхронизация: Запускаем эффект, который следит за 'value'
          $effect(() => {
              // Записываем новое значение в localStorage при каждом изменении 'value'
              localStorage.setItem(key, JSON.stringify(value));
          });

          return value;
      }
    </code>
  </pre>
  <p></p>
</details>

<details>
  <summary>Использование в Компоненте:</summary>
  <p></p>
  <pre>
    <code>
      &lt;script>
        import { useLocalStorage } from './store.js';

        // Используем хук: state('user', 'Гость')
        let userName = useLocalStorage('userName', 'Гость');
    &lt;/script>

    &lt;h1>Привет, {$state(userName)}!&lt;/h1>
    &lt;input bind:value={userName} placeholder="Введите ваше имя" />
    </code>
  </pre>
  <p></p>
</details>
  <p>Рекомендация:</p>
  <p>Если вам нужно только хранить небольшие флаги или настройки, часто проще использовать localStorage для хранения данных, которые затем быстро загружаются при инициализации.</p>

</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Svelte 5 и IndexedDB.';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p>IndexedDB (IDB) требует асинхронных операций (open, get, put). Прямая привязка к $state невозможна, так как $state синхронна. Лучший паттерн — это<strong> использование асинхронных эффектов и внешнего API-слоя.</strong></p>
<p>Например, idb — это лишь небольшая, удобная обёртка, которая упрощает работу с нативным (встроенным в браузер) API IndexedDB, переводя его колбэки в более современные и простые Промисы (Promises).</p>

<p><strong> Паттерн: API-Слой с Асинхронными Эффектами. </strong></p>
 
<p>Создайте отдельный модуль для работы с IDB и используйте $effect для асинхронной загрузки данных и асинхронной записи.</p>

<em><mark>Шаг 0: Библиотеку idb нужно установить отдельно.</mark></em>

<p>Установка: Используйте npm или yarn для добавления пакета в ваш проект:</p>
  <pre>
    <code>
      npm install idb
    </code>
  </pre>
<p>Использование: После установки вы можете импортировать и использовать её функции (например, openDB, get, put) в вашем Svelte-коде, как показано в паттернах для работы с IndexedDB.</p>

<em><mark>Шаг 1: API-Слой (IDB Wrapper).</mark></em>
<p>Используйте библиотеку-обертку, например idb (рекомендуется), для работы с IndexedDB, так как она возвращает промисы.</p>
<details>
  <summary>Файл db.js (Использует библиотеку idb).</summary> 
  <pre>
    <code>
      // db.js (Использует библиотеку idb)
      import { openDB } from 'idb'; 

      const dbPromise = openDB('QuizDB', 1, {
          upgrade(db) {
              db.createObjectStore('settings');
              db.createObjectStore('results', { keyPath: 'id' });
          },
      });

      export async function getQuizSetting(key) {
          const db = await dbPromise;
          return db.get('settings', key);
      }

      export async function putQuizSetting(key, val) {
          const db = await dbPromise;
          return db.put('settings', val, key);
      }
    </code>
  </pre>
</details>

<em><mark>Шаг 2: Хук для Асинхронной Загрузки/Записи.</mark></em>
<p>Создайте хук, который инициализирует данные асинхронно и использует $effect для асинхронной записи.</p>
<details>
  <summary>Файл useIDBState.js</summary> 
  <pre>
    <code>
      // useIDBState.js
      import { putQuizSetting, getQuizSetting } from './db.js';

      export function useIDBState(key, initialValue) {
          // 1. Инициализация: Переменная, которую будет читать Svelte
          let value = $state(initialValue);
          
          // 2. Асинхронная Загрузка: Запуск функции загрузки при монтировании
          $effect(() => {
              getQuizSetting(key).then(stored => {
                  if (stored !== undefined) {
                      // Синхронно обновляем $state после асинхронного Promise
                      value = stored;
                  }
              });
              // Эффект должен быть запущен только один раз
              return () => {}; 
          });

          // 3. Асинхронная Запись: Наблюдаем за 'value' и асинхронно сохраняем
          // Используем $effect.sync для гарантии немедленного отслеживания
          $effect.sync(() => {
              putQuizSetting(key, value);
          });

          return value;
      }
    </code>
  </pre>
  
</details>

<em><mark>Шаг 3: Использование в Компоненте</mark></em> 
<details>
  <summary>Пример кода</summary>
  
  <pre>
    <code>
      &lt;script>
          import { useIDBState } from './useIDBState.js';

          // Асинхронная переменная, которая ведет себя как обычный $state
          let quizMode = useIDBState('quizMode', 'standard'); 
      &lt;/script>

      &lt;select bind:value={quizMode}>
          &lt;option value="standard">Стандарт&lt;/option>
          &lt;option value="hard">Сложный&lt;/option>
      &lt;/select>
    </code>
  </pre>
</details>

  <p>Рекомендация:</p>
<p>IndexedDB использовать только для хранения больших массивов данных (результатов викторины, истории).</p>
</article>`);




taskCurrent++;
taskSubnumber = 1;
nameTask = 'Макет для Адаптивного меню.';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
 <p>Решение состоит из двух компонентов:</p>
<ul>
<li>App.svelte (Макет и логика модального окна).</li> 
<li>NavBar.svelte (Адаптивное меню).</li>
</ul>

<em><mark> 🍔 Адаптивное Меню Навигации (NavBar.svelte)</mark></em> 
  <p>Этот компонент будет показывать полную навигацию на больших экранах и переключаться на кнопку-гамбургер с выпадающим списком на маленьких.</p>
<details>
  <summary>NavBar.svelte</summary>
  <pre>
    <code>
      &lt;script>
          // Руны Svelte 5
          let isMenuOpen = $state(false);
          let navWidth = $state(0); // Переменная для отслеживания ширины элемента
      &lt;/script>

      &lt;nav bind:clientWidth={navWidth}>
          &lt;a href="/" class="logo">SvelteKit&lt;/a>
          
          {#if navWidth &lt;600}
              &lt;button class="burger" onclick={() => isMenuOpen = !isMenuOpen} aria-expanded={isMenuOpen}>
                  &#9776; &lt;/button>
          {/if}

          &lt;ul class:mobile-open={isMenuOpen} class:desktop-only={navWidth >= 600}>
              &lt;li>&lt;a href="#home">Главная&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#services">Услуги&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#about">О нас&lt;/a>&lt;/li>
              &lt;li>&lt;a href="#contact">Контакты&lt;/a>&lt;/li>
          &lt;/ul>
      &lt;/nav>

      &lt;style>
          nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 20px;
              background-color: #333;
              color: white;
          }
          .logo {
              font-size: 1.5em;
              font-weight: bold;
              color: white;
              text-decoration: none;
          }

          /* Стили для всех списков (мобильный и десктопный) */
          ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              gap: 20px;
          }
          ul a {
              color: white;
              text-decoration: none;
              padding: 5px 10px;
              transition: background-color 0.2s;
              border-radius: 4px;
          }
          ul a:hover {
              background-color: #555;
          }
          
          /* Десктопные стили (применимы только при navWidth >= 600) */
          .desktop-only {
              /* Принудительно отображаем на десктопе */
              display: flex !important;
          }

          /* Мобильные стили */
          .burger {
              background: none;
              border: none;
              color: white;
              font-size: 1.5em;
              cursor: pointer;
              display: none; /* Скрываем по умолчанию, показываем через медиазапрос или условие */
          }
          @media (max-width: 600px) {
              /* В мобильном режиме: */
              nav {
                  flex-wrap: wrap;
              }
              .burger {
                  display: block; /* Показываем кнопку гамбургера */
              }
              ul {
                  display: none; /* Скрываем список по умолчанию */
                  width: 100%;
                  flex-direction: column;
                  gap: 0;
                  margin-top: 10px;
              }
              .mobile-open {
                  display: flex; /* Показываем, если isMenuOpen === true */
              }
              ul li {
                  border-top: 1px solid #444;
              }
          }
      &lt;/style>
    </code>
  </pre>
</details>

<em><mark>🖥️ Главное Приложение (App.svelte) </mark></em> 
  <p>Объединяем меню и логику модального окна.</p>
<details>
  <summary>App.svelte</summary>
  <pre>
    <code>
      &lt;script>
          import NavBar from './NavBar.svelte';
          import Modal from './Modal.svelte';
          
          // Svelte 5: Состояние для модального окна
          let isModalOpen = $state(false);

          function openModal() {
              isModalOpen = true;
          }

          function closeModal() {
              isModalOpen = false;
          }
      &lt;/script>

      &lt;NavBar />

      &lt;main>
          &lt;h1>Добро пожаловать в Svelte 5!&lt;/h1>
          
          &lt;button onclick={openModal} type="button" class="btn-primary">
              Открыть Модальное Окно
          &lt;/button>
          
          {#if isModalOpen}
              &lt;Modal onClose={closeModal}>
                  &lt;h2>Содержимое Модального Окна&lt;/h2>
                  &lt;p>Это окно вызвано с помощью кнопки и управляется состоянием isModalOpen.&lt;/p>
                  &lt;p>Закрыть можно кнопкой, по клику на фон или нажатием клавиши ESC.&lt;/p>
              &lt;/Modal>
          {/if}
      &lt;/main>

      &lt;style>
          main {
              padding: 20px;
              text-align: center;
          }
          .btn-primary {
              padding: 12px 20px;
              background-color: #ff3e00;
              color: white;
              border: none;
              border-radius: 6px;
              font-size: 1.1em;
              cursor: pointer;
              transition: background-color 0.2s;
          }
          .btn-primary:hover {
              background-color: #e03400;
          }
      &lt;/style>
    </code>
  </pre>
  <p></p>
</details>
</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Модальное окно';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<h5>Паттерн: "Контролируемый Компонент" (Controlled Component)</h5>
<p>Ваш текущий подход называется "контролируемый компонент".</p>

<p>Контролируемый: Родитель (App) владеет переменной isModalOpen.</p>

<p>Родитель передает дочернему компоненту (Modal) всё, что ему нужно для управления собой:</p>

<p>Данные: children (что показать).</p>

<p>Обратный вызов: onClose (как себя закрыть).</p>

<p>Преимущество этого паттерна (Почему он "правильный"):</p>

<p>Гибкость: Модальное окно может быть закрыто по 5 разным причинам (кнопка в модалке, кнопка в родителе, таймер, успешная отправка формы). Все эти причины контролируются в одном месте (closeModal()).</p>

<p>Четкое состояние: Всегда ясно, где находится источник истины (isModalOpen).</p>

<p>Переиспользуемость: Вы можете использовать Modal.svelte в 10 разных местах приложения, и каждое из них будет решать, когда и почему оно хочет его показать. Modal.svelte сам по себе не содержит никакой бизнес-логики.</p>


<p>Создаём файл Modal.svelte</p>
<p>В нём собираем структуру разметки, стили и функции, которые будут общими для всех модалок. Например, закрытие по клавише "Esc", клик вне модалки и т.п.</p>
<p>{@render children()} - будет заменён тегами с содержимым, которые прийдут в $props из вызывающего файла.</p>
<details>
  <summary>Modal.svelte</summary> 
  <pre>
    <code>
      &lt;script>
        import { slide } from 'svelte/transition';

        // [SVELTE 5] Принимаем пропсы (включая children - содержимое слота)
        let { onClose = () => console.warn('onClose не определен'), children } = $props();

        let visualTitle = 'Надпись - "Модальное Окно" - из переменной visualTitle в Modal.svelte';

        // 1. Глобальный слушатель Esc с помощью $effect
        // Слушатель добавляется к окну при монтировании и удаляется при демонтировании.
        $effect(() => {
          function handleGlobalKeydown(event) {
            if (event.key === 'Escape') {
              onClose();
            }
          }
          window.addEventListener('keydown', handleGlobalKeydown);

          // Функция очистки (возвращается из $effect)
          return () => {
            window.removeEventListener('keydown', handleGlobalKeydown);
          };
        });

        // 2. Обработка клика по фону (onmousedown)
        function handleDismiss(event) {
          // Проверяем, что событие пришло именно от backdrop, а не от содержимого модалки.
          if (event.target === event.currentTarget) {
            onClose();
          }
        }
      &lt;/script>

      &lt;div class="modal-backdrop" onmousedown={handleDismiss} role="presentation">
        &lt;div
          class="modal-content"
          onclick={(e) => e.stopPropagation()}
          transition:slide
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabindex="-1"
        >
          &lt;h2 id="modal-title" style="margin-top: 0;">{visualTitle}&lt;/h2>

          {@render children()}

          &lt;button class="close-btn" onclick={onClose} type="button" aria-label="Закрыть модальное окно">
            &#x2715;
          &lt;/button>
        &lt;/div>
        &lt;!-- Это не ошибка, а рекомендация. Не обращай внимание. 
        Это не критично для приложения и пользователя. 
        Это приколы с доступностью A11y -->
      &lt;/div>

      &lt;style>
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 25px;
          border-radius: 8px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5em;
          cursor: pointer;
          line-height: 1;
          color: #555;
          font-weight: bold;
          padding: 5px;
          transition: color 0.2s;
        }
        .close-btn:hover {
          color: #000;
        }
      &lt;/style>

    </code>
  </pre> 
</details>

<p>Импортируем компонент  Modal.svelte в Элемент App.svelte.</p>
<p>Определяем кнопку, которая будет вызывать модальное окно. Или функцию, которая будет запускать модальное окно.</p>
<p>Определяем переменную - флаг отвечающую за видимость модального окна.</p>
<p>Определяем функции, которые меняют состояние флага (открыть/закрыть окно).</p>
<p>Монтируем компонент.</p>
<p>ИСПОЛЬЗУЕМ $STATE для управления видимостью модального окна</p> 
<p>Добавляем специфику в модалку. Например ссылку для перехода или кнопку запуска какой-либо функции.</p> 

<details>
  <summary>App.svelte</summary> 
  <pre>
    <code>
      &lt;script>
        import Modal from '$lib/Components/NavBar/Modal/Modal.svelte';

        import logo from '$lib/images/svelte-logo.svg';

        // 1. ИСПОЛЬЗУЕМ $STATE для управления видимостью модального окна
        let modalShow = $state(false);

        // Функции для чистого управления состоянием
        function openModal() {
          modalShow = true;
        }

        // 2. ФУНКЦИЯ ЗАКРЫТИЯ: должна устанавливать состояние в false
        function closeModal() {
          modalShow = false;
        }

        // текст для кнопки и функция, которая запустится по клику на кнопку
        let result = $state('запуск функции');
        function funcTestButtonModal() {
          result = 'функция сработала - окно закроется через секунду ';
          setTimeout(() => {
            closeModal();
          }, 1000);
        }
      &lt;/script>

      &lt;div>
        &lt;p>View Modal:</p>
        &lt;button onclick={openModal}> Click show Modal&lt;/button>
        {#if modalShow}
          &lt;Modal onClose={closeModal}>
            &lt;!-- Сначала будет текст из Modal.svelte -->
            &lt;!-- Отправим текст и картинку в модальное окно через $props-->
            &lt;h2>Title&lt;/h2>
            &lt;p>all text other paragraph</p>
            &lt;img src={logo} alt="logo" />
            &lt;!-- Добавим в модалку ссылку-переход на другую страницу -->
            &lt;a href="/">перейти в Home&lt;/a>
            &lt;!-- Добавим в модалку кнопку для запуска функции -->
            &lt;button onclick={funcTestButtonModal}>{result}&lt;/button>
          &lt;/Modal>
        {/if}
      &lt;/div>

      &lt;div class="text-column">
        &lt;h1>progect_2 this app&lt;/h1>

        &lt;p>test components&lt;/p>
      &lt;/div>

    </code>
  </pre> 
</details>

</article>`);



taskCurrent++;
taskSubnumber = 1;
nameTask = 'Анимированный Слайдер';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<strong> Задача: </strong>
<p>Как добавить в этот App.svelte горизонтальный слайдер с боковыми стрелками, крошками в виде миниатюр страниц, которые сейчас не видны. Слайды представляют собой блок с надписью вверху, картинкой (или видео), краткое описание об этой картинке. При смене слайдов, картинка сменяется горизонтально, надпись вверху сменяется вертикально на новую (старая растворяется, а новая появляется), а описание сменяется через opacity (старая плавно растворяется, а новая проявляется).</p>
 
<strong>Решение:</strong>
  <p>Cоздадим компонент ImageSlider.svelte, используя три разных перехода Svelte:</p>
<ol>
<li>Слайд (Horizontal Slide): Для контейнера изображения.</li>
<li>Флип (Flip): Для текста заголовка (эффект вертикальной смены).</li>
<li>Фейд (Fade): Для описания.</li>
</ol>
<details>
  <summary>📝 ImageSlider.svelte</summary>
  <p></p>
  <pre>
    <code>
        &lt;script>
            import { fly, fade } from 'svelte/transition';
            import { quintOut } from 'svelte/easing';
            import { flip } from 'svelte/animate'; // Импортируем flip для вертикальной смены

            // Svelte 5: данные слайдов
            const slides = $state([
                { id: 1, title: "Гора Фудзи, Япония", image: "https://placehold.co/800x450/3498db/ffffff?text=Fuji", desc: "Типичный стратовулкан, самая высокая гора в Японии. Популярный объект туризма.", video: false },
                { id: 2, title: "Гранд-Каньон, США", image: "https://placehold.co/800x450/27ae60/ffffff?text=Grand+Canyon", desc: "Глубокое ущелье на плато Колорадо, созданное рекой Колорадо. Одно из чудес природы.", video: false },
                { id: 3, title: "Северное сияние", image: "https://placehold.co/800x450/9b59b6/ffffff?text=Aurora+Borealis", desc: "Естественное свечение в небесах, наблюдаемое преимущественно в высоких широтах.", video: false },
                { id: 4, title: "Водопад Игуасу, Бразилия", image: "https://placehold.co/800x450/e67e22/ffffff?text=Iguazu+Falls", desc: "Комплекс из 275 водопадов на границе Аргентины и Бразилии.", video: false },
            ]);

            let currentIndex = $state(0);
            let direction = $state(1); // 1 = вперед, -1 = назад

            // $derived: Текущий слайд
            const currentSlide = $derived(slides[currentIndex]);
            
            // $derived: Список миниатюр для крошек (мини-представление)
            const thumbnails = $derived(slides.map((s, i) => ({
                id: s.id,
                index: i,
                isActive: i === currentIndex,
                image: s.image,
            })));

            function nextSlide() {
                direction = 1;
                currentIndex = (currentIndex + 1) % slides.length;
            }

            function prevSlide() {
                direction = -1;
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            }

            function goToSlide(index) {
                if (index === currentIndex) return;
                direction = index > currentIndex ? 1 : -1;
                currentIndex = index;
            }

            // Параметры для перехода fly (горизонтальный слайд)
            const flyParams = {
                duration: 500,
                easing: quintOut,
                x: 800 * direction, // Двигаем на 800px влево или вправо
            };
        &lt;/script>

        &lt;div class="slider-container">
            
            &lt;!-- Заголовок с вертикальной сменой (FLIP + KEY) -->
            &lt;div class="header-area">
                &lt;!-- #key гарантирует, что элемент будет уничтожен и создан заново, 
                    запуская переходы, когда currentIndex меняется. -->
                {#key currentSlide.id} 
                    &lt;h2 
                        animate:flip={{ duration: 300 }}
                        in:fly={{ y: direction * 30, duration: 300, easing: quintOut }}
                        out:fly={{ y: direction * -30, duration: 300, easing: quintOut }}
                    >
                        {currentSlide.title}
                    &lt;/h2>
                {/key}
            &lt;/div>

            &lt;div class="slider-main">
                &lt;!-- Стрелка Назад -->
                &lt;button onclick={prevSlide} class="arrow left" type="button">
                    &#10094;
                &lt;/button>

                &lt;!-- Контейнер Слайда с Горизонтальным Слайдом (FLY) -->
                &lt;div class="slide-content">
                    {#key currentSlide.id}
                        &lt;div 
                            class="media-block"
                            in:fly={{ x: 800 * direction, duration: 500, easing: quintOut }}
                            out:fly={{ x: 800 * direction * -1, duration: 500, easing: quintOut }}
                        >
                            &lt;img src={currentSlide.image} alt={currentSlide.title} />
                        &lt;/div>
                    {/key}
                &lt;/div>

                <!-- Стрелка Вперед -->
                &lt;button onclick={nextSlide} class="arrow right" type="button">
                    &#10095;
                &lt;/button>
            &lt;/div>

            &lt;!-- Описание с переходом FADE (Opacity) -->
            &lt;div class="description-area">
                {#key currentSlide.id}
                    &lt;p transition:fade={{ duration: 400 }}>
                        {currentSlide.desc}
                    &lt;/p>
                {/key}
            &lt;/div>

            <!-- Крошки (Thumbnails) -->
            &lt;div class="thumbnails">
                {#each thumbnails as thumb (thumb.id)}
                    &lt;div 
                        class="thumb-item" 
                        class:active={thumb.isActive} 
                        onclick={() => goToSlide(thumb.index)}
                    >
                        &lt;!-- Можно использовать img или просто цветной блок -->
                        &lt;img src={thumb.image} alt={&#96;Thumbnail $ {thumb.id}&#96;} />
                    &lt;/div>
                {/each}
            &lt;/div>

        &lt;/div>

        &lt;style>
            .slider-container {
                max-width: 800px;
                margin: 40px auto;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                font-family: Arial, sans-serif;
            }

            .header-area {
                height: 60px; /* Фиксированная высота для предотвращения прыжков */
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                background-color: #f4f4f4;
                padding: 0 10px;
            }
            h2 {
                position: absolute; /* Необходимо для работы FLIP/Fly смены */
                margin: 0;
                text-align: center;
                font-size: 1.5em;
                font-weight: 600;
                color: #333;
            }

            .slider-main {
                display: flex;
                align-items: center;
                position: relative;
            }

            .slide-content {
                flex-grow: 1;
                overflow: hidden; /* Важно: обрезает слайд при выходе/входе */
                height: 450px; /* Фиксированная высота изображения */
                position: relative;
            }
            .media-block {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            .media-block img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
            }

            /* Стрелки */
            .arrow {
                position: relative; /* Стрелки должны быть частью flex-контейнера */
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 15px;
                cursor: pointer;
                font-size: 1.5em;
                line-height: 1;
                z-index: 10;
                height: 100%;
            }
            .arrow:hover {
                background: rgba(0, 0, 0, 0.7);
            }
            .left { border-radius: 0 4px 4px 0; }
            .right { border-radius: 4px 0 0 4px; }


            .description-area {
                padding: 15px 20px;
                background-color: #f9f9f9;
                min-height: 50px; /* Фиксируем высоту, чтобы избежать прыжков */
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                overflow: hidden;
            }
            .description-area p {
                position: absolute; /* Необходимо для FADE */
                margin: 0;
                padding: 0 10px;
                text-align: center;
                color: #555;
            }

            /* Крошки (Thumbnails) */
            .thumbnails {
                display: flex;
                justify-content: center;
                padding: 10px;
                background-color: #eee;
                gap: 8px;
            }
            .thumb-item {
                width: 60px;
                height: 40px;
                cursor: pointer;
                border: 2px solid transparent;
                border-radius: 4px;
                overflow: hidden;
                transition: border-color 0.2s;
            }
            .thumb-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            .thumb-item:hover {
                border-color: #aaa;
            }
            .thumb-item.active {
                border-color: #ff3e00;
                box-shadow: 0 0 5px rgba(255, 62, 0, 0.5);
            }
        &lt;/style>
    </code>
  </pre>
</details>
<strong>Интеграция в App.svelte:</strong>
  <p>Обновите App.svelte, чтобы импортировать и использовать новый слайдер.</p>
  <details>
  <summary>Обновите App.svelte</summary>
  <p></p>
  <pre>
    <code>
        &lt;script>
            import ImageSlider from './ImageSlider.svelte'; // НОВЫЙ ИМПОРТ для слайдера

        ...остальной код
        &lt;/script>

        &lt;NavBar /> - если нужен, то тоже сначала импортируем

        &lt;main>
            ...остальной код

            <!-- Вставляем наш новый слайдер -->
            &lt;ImageSlider />

            ...остальной код
        &lt;/main>
          

        &lt;style>

        &lt;/style>
    </code>
  </pre>
  <p></p>
</details>
</article>`);
/* ===========================================================
 
<p><strong></strong></p>
<em><mark></mark></em>
  
  <p></p>




taskCurrent++;
taskSubnumber = 1;
nameTask = 'test';
 
console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p></p>
<strong>  </strong>
 
<p></p>
<details>
  <summary>Пример кода</summary>
  <p></p>
  <pre>
    <code>
 
    </code>
  </pre>
  <p></p>
</details>
</article>`);
 
console.log(' ');
taskPractice = `practics${taskCurrent}_${taskSubnumber++}`;
section.insertAdjacentHTML('beforeend', `<hr><h5> ${taskPractice}. </h5>
    <article class="practics ${taskPractice}">
    <p>
    </p>
    </article>`);
console.log(`${taskPractice}`);
console.log(`   `);
(function () {
  let block = document.querySelector(`article.${taskPractice}`);
 
})();
*/
parent.insertAdjacentHTML('beforeend', `<h2 id="down" class="epilog" style="color:white; font-weight:800;">Go from new tasks!    Chicago... Chicago...   Chicago...is waiting us</h2>`);




