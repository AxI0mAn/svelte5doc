let taskNumberStart = 1;
let taskNumberEnd = 1;
let sectionName = 'Advanced Svelte';
let colorAccent = '176, 199, 244,';

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



/* ===========================================================*/


taskCurrent++;
taskSubnumber = 1;
nameTask = 'Proxy';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a> 



 
<p><strong> Proxy</strong> — это специальный объект в JavaScript, который выступает «посредником» (прокси) для другого объекта. Он позволяет перехватывать и переопределять основные операции: чтение свойств, запись, удаление и другие.</p>

<strong> В Svelte 5 именно Proxy-объекты стоят за работой руны $state(), обеспечивая ту самую глубокую реактивность.  </strong>

<mark>🏗️ Анатомия Proxy</mark>
<p>Для создания Proxy используются два аргумента:</p>
<ul>
<li>Target (Цель): Оригинальный объект, который вы хотите обернуть.</li>

<li>Handler (Обработчик): Объект, содержащий «ловушки» (traps) — функции, которые определяют поведение при обращении к прокси.</li>
</ul>
<mark>🪝 Основные «ловушки» (Traps)</mark>
<p>Самые часто используемые методы в handler:</p>
<ul>
<li>get(target, property): Срабатывает при попытке прочитать свойство. 
<br>Применение: Логирование доступа, вычисление значений на лету.</li><br>
<li>set(target, property, value): Срабатывает при попытке записать значение. 
<br>Применение: Валидация данных, автоматическое обновление UI (как в Svelte).</li><br>
<li>deleteProperty(target, property): Срабатывает при попытке удалить свойство.</li><br>
<li>has(target, property): Перехватывает оператор in.</li><br>
</ul>

<details>
  <summary> 🛠️ Краткий пример кода </summary>
  <p>JavaScript</p>
  <pre>
    <code>
const user = { name: "Ivan", age: 25 };

const proxyUser = new Proxy(user, {
  // Ловушка на чтение
  get(target, prop) {
    console.log( Чтение свойства: $ { prop });
    return target[prop];
  },
  // Ловушка на запись
  set(target, prop, value) {
    if (prop === 'age' && value < 0) {
      console.error("Возраст не может быть отрицательным!");
      return false;
    }
    console.log(Изменение $ { prop } на $ { value });
    target[prop] = value;
    return true; // Подтверждение успешной записи
  }
});

proxyUser.age = 30; // В консоли: "Изменение age на 30"
console.log(proxyUser.name); // В консоли: "Чтение свойства: name", затем "Ivan"

    </code>
  </pre> 
</details>

<mark>🚀 Почему это важно для Svelte 5?</mark>
<p>До появления Proxy (в Svelte 3 и 4) фреймворк не мог узнать, что вы изменили что-то внутри объекта (например, user.name = 'Oleg'), если вы не перезаписывали весь объект целиком (user = user).</p>

<p>С Proxy в Svelte 5:</p>
<ul>
<li>Вы создаете $state({ name: 'Ivan' }).</li>

<li>Svelte превращает этот объект в Proxy.</li>

<li>Когда вы пишете user.name = 'Oleg', срабатывает ловушка set.</li>

<li>Внутри этой ловушки Svelte мгновенно запускает обновление только тех элементов экрана, которые зависят от user.name.</li>
</ul> 

</article>`);




/* ===========================================================*/

taskCurrent++;
taskSubnumber = 1;
nameTask = '$state';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p><strong> Руна $state() </strong>  - применяется для создания реактивных переменных.  Это означает, что при изменении этой переменной - произойдут изменения во всех частях кода, где эта переменная используется. </p>

<p> <strong>Реактивность не ограничена только файлом компонента (.svelte). </strong>
Переменную, созданную через $state(), можно передавать в обычные JavaScript-функции или классы (в файлы .svelte.js или .svelte.ts), и она сохранит свою реактивность там.</p>

<p><strong>Точечные обновления (Fine-grained reactivity):</strong> В отличие от других фреймворков, Svelte 5 не перерисовывает весь компонент. Если изменили только user.age, обновятся только те текстовые узлы в HTML, которые отображают именно возраст, а не всё имя пользователя целиком.</p>

<p> <strong>Классы:</strong> $state() можно использовать внутри полей классов. Это позволяет создавать сложные модели данных (логику игры, например), которые будут реактивными сами по себе.   <a href="https://svelte.dev/tutorial/svelte/reactive-classes">tutorial Reactive classes</a></p>

<hr>

<p> Руна $state() - предоставляет <strong>глубокую реактивность.</strong> Это означает, что она может хранить не только простые значения, но и объекты, массивы и массивы объектов. При изменении одного свойства в одном из объектов массива - изменения произойдут во всех точках кода, где задействовано именно это значение объекта из массива.</p>

<p> Когда объект или массив оборачивается в $state(), Svelte превращает его в прокси-объект.</p>

<p> <strong>Мутации разрешены:</strong> можно просто написать array[0].name = 'New Name', и Svelte "увидит" это точечное изменение.</p>

<p> <strong>Это работает рекурсивно:</strong> Если внутри объекта есть другой объект, он тоже станет реактивным автоматически.</p>

</article>`);




/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = '$state.raw';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/raw-state">tutorial</a>
<p>Руна <strong>$state.raw():  </strong> Иногда глубокая реактивность — это слишком дорого для производительности(например, если у тебя огромный массив данных, который ты не собираешься менять по частям, а только целиком).Для таких случаев есть $state.raw(), которая <strong>делает реактивной только саму переменную, но не содержимое объекта.</strong></p>

</article>`);




/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = '$state.snapshot';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/docs/svelte/$state#$state.snapshot">tutorial</a>
<p><strong> $state.snapshot </strong> </p>

<p>Для создания статического снимка высокореактивного $stateпрокси-сервера используется $state.snapshot.</p>

<p>Это удобно, когда вам нужно передать какое-либо состояние внешней библиотеке или API, которые не ожидают прокси.</p>

<details>
  <summary>Пример кода</summary>
  <p></p>
  <pre>
    <code>
      &#706;script>
        let counter = $state({ count: 0 });

        function onclick() {
          // Will log &lsquo; { count: ... }&lsquo; rather than &lsquo; Proxy { ... }&lsquo;
          console.log($state.snapshot(counter));
        }
      &#706;/script>
    </code>
  </pre>
  <p></p>
</details>
</article>`);







/* ===========================================================*/


taskCurrent++;
taskSubnumber = 1;
nameTask = '$state.eager';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/docs/svelte/$state#$state.eager">tutorial</a>
<p><strong> $state.eager </strong></p>
 
<p>В Svelte 5 руна $state.eager(value) — это специальный инструмент для мгновенного обновления пользовательского интерфейса в тех случаях, когда стандартная реактивность может казаться «медленной» из-за специфики работы фреймворка или задержек в сети (особенно в SvelteKit).</p>

<p>В случаях, <strong>когда обновление пользовательского интерфейса требуется сразу</strong> после изменения состояния, применяется <strong>$state.eager(value)</strong></p>

<p>Используйте эту функцию экономно и только для предоставления обратной связи в ответ на действия пользователя — в целом, предоставление Svelte возможности координировать обновления обеспечит лучший пользовательский опыт.</p>

<details>
  <summary>Пример кода</summary>
  <p>Например, может потребоваться обновление панели навигации при нажатии пользователем на ссылку, чтобы он получал визуальную обратную связь во время ожидания загрузки новой страницы.</p>
  
  <pre>
    <code>
      &#706;nav>
        &#706;a href="/" aria-current={$state.eager(pathname) === '/' ? 'page' : null}>home&#706;/a>
        &#706;a href="/about" aria-current={$state.eager(pathname) === '/about' ? 'page' : null}>about&#706;/a>
      &#706;/nav>
    </code>  
  </pre>

<ul style="margin: 12px">
   <span><mark> Как это работает:</mark></span>
  
   <li>pathname здесь — это реактивное состояние (например, из $app/state).</li>

  <li>Когда начинается переход, pathname меняется.</li>

  <li> $state.eager(pathname) гарантирует, что это выражение вернет новое значение сразу, как только оно было установлено, игнорируя любые задержки или внутренние очереди обновлений.</li>

  <li>Результат: класс aria-current перескакивает на новую ссылку в ту же миллисекунду, когда был совершен клик.</li>
<ul>
<br>
  <pre>
  <mark>Зачем это нужно (Проблема «ленивой» навигации)</mark>

    Представьте ситуацию:

    Вы находитесь на главной странице (/).

    Вы кликаете на ссылку «About» (/about).

    У страницы /about есть тяжелая функция load, которая грузится 2 секунды.
  </pre>
  <p>
Без $state.eager: Вы нажали на ссылку, но в навигационной панели (Navbar) все еще подсвечена ссылка «Home». <br>
Вы ждете 2 секунды, глядя на «Home», и только когда данные загрузятся, Navbar переключится на «About», и страница откроется. <br>
Это создает ощущение «тормознутого» интерфейса.
</p>
<p>
Сo $state.eager(pathname): Как только вы кликнули по ссылке, значение pathname во внутреннем состоянии SvelteKit уже начало меняться (оно знает, куда вы идете). <br>
$state.eager ловит это изменение мгновенно. <br>
Navbar сразу подсвечивает «About», давая пользователю визуальный сигнал: «Да, я понял, мы идем туда, подожди секунду».
</p>
</details>
</article>`);




/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = 'reactive-builtins';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/tutorial/svelte/reactive-builtins">tutorial</a>

<p>Svelte поставляется с несколькими реактивными классами, которые можно использовать вместо встроенных объектов JavaScript — а именно Map, Set, Date, URL и URLSearchParams.</p>

<p><strong>Cтандартные объекты JavaScript «молчат», когда меняются их внутренности, а реактивные классы Svelte — «говорят» об этом. </strong></p>

<p><mark>Зачем нужны Svelte-версии?</mark></p>

<p>Реактивные классы (например, SvelteMap, SvelteSet, SvelteDate) — это те же самые объекты, но «прокачанные». В каждый их метод (добавление, удаление, изменение)<strong> Svelte встроил «звоночек» (сигнал).</strong>
</p>

<ul>
<p>Разбор по конкретным классам:</p>
<li><mark>SvelteDate:</mark> делает так, что любое изменение (часы, минуты, год) сразу триггерит обновление интерфейса.
<p>Пример с Date: <a href="https://svelte.dev/tutorial/svelte/reactive-builtins">tutorial</a></p>
</li>
<li><mark>SvelteURL и URLSearchParams</mark> - просто меняешь параметр, и все компоненты, которые зависят от этой ссылки, обновляются сами.
</li>
<li><mark>Map и Set</mark> - изменения в этих структурах тоже реактивны. 
<p>Пример с Map:</p>
<p>Обычный Map: Ты добавил элемент -> UI не знает об этом -> На экране старые данные.</p>
<p>SvelteMap: Ты вызвал .set() -> Метод внутри себя говорит Svelte: «Эй, я изменился!» -> Svelte мгновенно обновляет экран.</p>
</li> 
</ul>

<details>
  <summary>Пример кода</summary>
  <p></p>
  <pre>
    <code>
      &#706;script>
        // Svelte 5 сам поймет, что нужно использовать реактивную версию Map
        let scores = $state(new Map()); 
        
        function addScore() {
          scores.set('Player1', 100); // Экран обновится САМ!
        }
      &#706;/script>
    </code>
  </pre>
  <p></p>
</details>
</article>`);



/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = 'store';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="https://svelte.dev/docs/svelte/stores"> tutorial</a>
  <a href="https://svelte.dev/tutorial/svelte/stores">example</a>

<p><strong> Забудьте про writable и $-префикс, если вам просто нужно передавать данные между файлами!!!  </strong> НО writable и $-префикс из ранних версий Svelte всё ещё работают!</p>
 
<p>Svelte имеет встроенную систему реактивности, которая позволяет компонентам подписываться на изменения в таких хранилищах.</p>

<p>В Svelte5 применение хранилищ не является обязательным, но позволяет структурировать код.</p>

<div>
    <ul>
      <h5>Чеклист "Профи" при создании нового стора:</h5><br>
      <li>Название файла: Всегда .svelte.js, иначе руны $state не заработают.</li>
      <li>Защита: Все основные переменные — через #. Наружу только get.</li>
      <li>Логика: Вся математика (таймеры, расчет бонусов, валидация) — внутри класса.</li>
      <li>LocalStorage: Вынесен в utils, вызывается внутри методов или через эффект в конструкторе.</li>
    </ul>
  </div>


<details>
  <summary>Подробнее о создании Store в Svelte5 с применением Рун.</summary>
  <div>
  <p>В svelte5 хранилище Store - это файл с расширением *.svelte.js в котором хранятся переиспользуемые данные, доступ к которым есть из любой части приложения. Например, отслеживание счёта игры или корзины покупок.</p>
  </div>
  <div style="line-height: 2.5rem">
  <h5>Данные оформляются в виде Class. Например, Class DataApp {}.</h5>
  <p>Когда Class DataApp {} полностью сформирован, то для экспорта, создаётся единственный экземпляр 
export const DataAppStore = new DataApp();  с которым работаем в компонентах или функциях кода, предварительно импортировав его в компонент или модуль.</p>
  <p>Переменные с # перед именем - это приватные поля класса, которые доступны только внутри этого класса.
Например, #intervalId = null; - доступ к #intervalId будет только внутри объекта DataApp {} и ей нельзя переприсвоить значение из вне. </p>
<div>
  <p>Переменнные, которым присвоены руны $state() или $derived() - это данные, при изменении которых, изменения затронут все места кода в которых эти переменные используются. 
Например, в Class DataApp есть переменная startNow = $state(12); </p>
  <p>При изменении этой переменной в другом компоненте, DataAppStore.startNow = 44; - значение этой переменной внутри DataAppStore изменится и вместо 12, будет 44. Это изменение отразится на всех участках кода, где используется DataAppStore.startNow и это приведёт к пересчёту связанных значений, а если это значение задействовано в пользовательском интерфейсе, то перерисуется только связанная с этим изменением часть DOM.</p>
  <br>
  <ol>
  <h5>Внутри Class DataApp {} размещаются функции для обработки хранящихся данных.</h5>
  <li>
  <p><mark>Функция для изменения или обработки значения переменной:</mark></p><br>

<pre>
  <code>
    addNow(num){
      this.startNow += num;
    }
  </code>
  </pre>
  <p>Эту функцию можем импортировать и вызвать в другом компоненте и передать ей значение, <br>как <mark style="background-color:white;">DataAppStore.addNow(10) </mark>- значение startNow увеличится на 10 единиц.</p>
  </li>
  <li>  
  <p><mark>Геттер - это чтение с логикой.</mark><br>
Используем get чтоб показать данные или выполнить расчёт с данными класса.</p>
  <p>Например, есть приватная переменная #visit = 31; <br>
можем безопасно её передать в другой модуль или компонент вызвав в нём <mark style="background-color:white;">{DataAppStore.visit}</mark>,  для этого внутри Class DataApp {} используем геттер:<br>
</p>
<pre>
  <code>
    get visit() {
      return this.#visit;
    }
  </code>
  </pre>
<p>
Если геттер использует внутри себя $state, он автоматически становится реактивным. Но если расчеты тяжелые (например, фильтрация большого массива), внутри геттера стоит использовать руну $derived.by.</p>
  </li>
  <li>
  <p><mark>Сеттер - проверить данные перед сохранением. </mark></p>
<p>Использовать set, необходимо, чтоб изменить данные и сразу что-то сделать (проверить, сохранить, отправить лог).
В JavaScript сеттер работает не как обычная функция, а через знак равно.</p>

<p>Например, </p>
<pre>
<code>
set addCheckNow(num){
    if(num>0){
    this.startNow += num;
  }else{
    console.warn('Error num<0')
  }
}
  </code>
 </pre>
<p>Мы можем вызвать этот сеттер в другом компоненте и передать ему значение, как <mark style="background-color:white;">
DataAppStore.addCheckNow = 20 </mark>- выполнится проверка, что 20 > 0 и значение startNow увеличится на 20 единиц.</p>
  </li>
  <li>
  <h5>Важно понимать:</h5>
  <ul>
    <li><mark>Контекст <strong>this.</strong> </mark>
      <p><mark>При работе с классами ВСЕГДА вызывай функцию стора через стрелочную функцию или обертку:</mark><mark style="background-color:white;"> onclick={() => DataAppStore.addNow(10)}.</mark></p>
    </li>
    <li><mark><strong>Никогда </strong>не меняй $state напрямую из компонента (store.value = 10), если у тебя есть метод для этого. Это сохранит твой код предсказуемым.</mark></li>
    <li><mark>Store может общаться с другим Store, если это необходимо. Взаимодействие между сторами - делается очень просто: ты импортируешь один экземпляр стора в файл другого.</mark></li>
    <li><mark>"Ленивая" инициализация и SSR</mark>
    <p>Если ты используешь SvelteKit (или серверный рендеринг), <mark>помни:</mark> код внутри класса (особенно в конструкторе) может выполниться на сервере, где нет window или localStorage.</p>
    <p><strong>Совет: Всегда делай проверку if (typeof window !== 'undefined') перед использованием браузерных функций в методах класса.</strong></p></li>
    <li><mark>Глубокая реактивность (Deep State)</mark>
<p>Важно помнить, что $state в Svelte 5 — глубокий. </p>
<p>Если у тебя в сторе есть объект: <mark style="background-color:white;">#user = $state({ name: 'Ivan', score: 0 })</mark>, то изменение <mark style="background-color:white;">this.#user.score += 10 </mark>заставит интерфейс обновиться. </p>
<p>Тебе <strong>не нужно пересоздавать весь объект</strong> (как это было в Svelte 4 с оператором ...).</p> </li> 
    </ul>
  </li>
  </ol>
  </div>
  </div>
</details>

<div style="line-height:1.75rem">
  <h5>Store в Svelte5  — это простой объект с тремя методами: subscribe, set, и update.</h5>
   
  <ol style="margin:1.5rem">
    <p>🔑 Ключевые преимущества этого подхода</p>
    <li>Единый источник истины (Single Source of Truth): Всегда ясно, где хранится состояние.</li>
    <li>Четкое разделение: Взаимодействие со Store происходит только через функции описанные внутри store.js (например, updateScore, useHint) - это предотвращает беспорядочное изменение данных.</li>
    <li>Автоматическая реактивность: Svelte сам заботится о перерисовке элементов, когда вы вызываете update на Store.</li>
  </ol>
</div>
<details>
  <summary>Как это работает с точки зрения Svelte.</summary>
  <ol>
  <li>Хранение объекта: Вы создаете файл, например, gameStore.js, и объявляете в нем объект состояния (ваш "объект, в котором хранится информация").</li>

  <li>Реактивность (Подписка): Компоненты Svelte, которым нужно отображать данные (например, счет или количество подсказок), подписываются на этот Store.</li>

  <li>Обновление: Когда происходит событие (например, "раунд пройден" или "подсказка использована"), вы вызываете метод update на Store.</li>

  <li>Оповещение: Svelte Store автоматически оповещает все подписанные компоненты, и они перерисовывают только те части DOM, где произошло изменение.</li>
  </ol>
</details>


<div style="line-height:1.75rem">
  <h5>Почему используем именно class в файле *.svelte.js !!!</h5><br>

  <p><mark>Использование классов для хранилищ в Svelte 5 — это не просто стилистический выбор, а способ максимально эффективно использовать новые руны ($state, $derived).</mark></p><br>

  <p><mark>Классы превращают ваш стор из простого «хранилища переменной» в умный сервис, который сам знает, как себя загружать, сохранять и вычислять свои состояния. В Svelte 5 это работает нативно и очень быстро.</mark></p><br>
  
  <ol> 
  <p>Oсновные причины, почему архитектура на классах сейчас считается эталонной для Svelte 5:</p>
    <li><div>
    <p><mark>Группировка данных и логики (Инкапсуляция)</mark></p>
    <p>В старом подходе (writable) у вас отдельно лежал стор и отдельно — функции, которые его меняют. В классе состояние и методы для его изменения находятся в одном контейнере.</p>
    <p>Раньше: Вы импортировали стор и функцию updateStore отдельно.</p>
    <p>Сейчас: Вы вызываете gameStore.addScore(). Весь контекст внутри одного объекта.</p>
    </div></li>
    <li><div>
      <p><mark>Приватность данных</mark></p>
      <p>С помощью символа # перед именем переменной вы можете сделать состояние «приватным». Это значит, что компоненты смогут читать данные, но не смогут случайно изменить их в обход ваших правил.</p>
      <pre>
        <code>
          JavaScript

          class Counter {
              #count = $state(0); // Приватное свойство

              get count() { return this.#count; } // Читать можно

              increment() { 
                  // Логика изменения только здесь
                  this.#count += 1; 
              }
          }
        </code>
      </pre>
    </div></li>
    <li><div>
      <p><mark>Удобство работы с localStorage (Конструктор)</mark></p>
      <p>Класс дает вам метод constructor(), который выполняется один раз при создании стора. Это идеальное место, чтобы загрузить данные из localStorage. Вам не нужно создавать отдельные функции инициализации и вызывать их в App.svelte.</p>
    </div></li>
    <li><div>
      <p><mark>Вычисляемые значения через геттеры</mark></p>
      <p>В классах очень удобно использовать руну $derived через обычные JS-геттеры. Это заменяет старые derived сторы и делает код чище.</p>
    </div></li>
  </ol> 
</div>
<h2><a href="https://svelte.dev/tutorial/svelte/stores">Пример Store из документации</a></h2>
<h2><a href="./assets/CODING/c Store writable or state.md">Примеры кода</a></h2>
<h2><a href="./assets/CODING/c Store Group.md">Правила группировки данных в Store</a></h2>


</article>`);



/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = 'snippet';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p><strong>  </strong></p>
 
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







/* =========================================================== */


taskCurrent++;
taskSubnumber = 1;
nameTask = 'render';

console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p><strong>  </strong></p>
 
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


















/* ===========================================================
 
 
taskCurrent++;
taskSubnumber = 1;
nameTask = 'test';
 
console.log(`task ${taskCurrent} --------------------------`);
section.insertAdjacentHTML('beforebegin', `<a href="#link${taskCurrent}">${taskCurrent}.  ${nameTask}</a><br>`);
section.insertAdjacentHTML('beforeend', `<hr><hr><h3 id="link${taskCurrent}" class="title"> <span id="${nameTask}"></span>   task  ${taskCurrent}. ${nameTask} </h3><hr><hr><article id="${nameTask}" class="article">
  <a href="">tutorial</a>
<p><strong>  </strong></p>
 
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
parent.insertAdjacentHTML('beforeend', `<h2 id="down" class="epilog" style="color:rgba(0, 11, 164, 1)">Go from new tasks!    Chicago... Chicago...   Chicago...is waiting us</h2>`);




