let taskNumberStart = 1;
let taskNumberEnd = 1;
let sectionName = 'Advanced Svelte';
let colorAccent = '207, 0, 207,';

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
nameTask = '$state.raw';

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










/* ===========================================================
 
 
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
parent.insertAdjacentHTML('beforeend', `<h2 class="epilog" style="color:rgba(0, 11, 164, 1)">Go from new tasks!    Chicago... Chicago...   Chicago...is waiting us</h2>`);




