project/
├── .github/workflows/deploy.yml - настройки для работы сборщика страниц на gitHub
├── src/ 
├── static/ - файлы для работы поисковых роботов
...
├── .gitignore - что НЕ отправлять на gitHub
├── package.json - настройка сборщика пакетов
├── svelte.config.js - настройка фреймворка
├── tsconfig.json - настройка среды
├── vite.config.js - настройка сборщика




src/
├── ambient.d.ts - настройка для всех статических ассетов, которые мы импортируем.
├── lib/ - ресурсы и логика
├── routes/ - страницы приложения
├── style/ - переиспользуемые стили.  
├── ambient.d.ts - Объявляем модули для всех статических ассетов, которые мы импортируем.
├── app.html - точка входа
├── app.scss - Глобальные стили. Этот файл должен быть импортирован ТОЛЬКО в корневом +layout.svelte (например так, <script> import '../app.scss'; </script>)


src/style/ - переиспользуемые стили. Подробнее в  <ПОДГОТОВКА ПРОЕКТА/a1_step-by-step.docx>
       ├── _fonts.scss - подключение шрифтов (@font-face ); 
       ├── _mixins.scss - повторяющиеся в разных scss-файлах части (функции) для scss;
       ├── _reset.scss - сброс стилей;
       └── _variables.scss  - все переменные (цвета, тени, границы);


 
src/routes/
├── +layout.svelte // Глобальный Макет. Где  просто имеется <main>	{@render children()}</main> .  Убедитесь, что src/routes/+layout.svelte не содержит хедера!!! 
│
├── (homePage) // все страницы внутри (homePage) будут иметь <header class="home"> и <footer class="home"> из (homePage)/+layout.svelte 
│   ├── +layout.svelte   // Макет с <header class="home"> и <footer class="home">. Применяется ко всему внутри (homePage) и gameSet и внутри home
│   ├──  +page.svelte    // Создает роут: / - просто косая черта
│   ├──  +page.js // <-- ТОЛЬКО ТУТ cо строкой export const prerender = true;   для сборки файла index.html 
│   ├── home/
│   │        ├── settings/
│   │        │      └──  +page.svelte    // Создает роут:  /home/settings
│   │        ├── account/
│   │        │      └──  +page.svelte    // Создает роут:  /home/account
│   │        └── about/
│   │                └── +page.svelte    // Создает роут:   /home/about
│   └── gameSet/
│             └── +page.svelte    // Создает роут: /gameSet  Наследует (home)/+layout.  будет применён  <header class="home">
│
└── (gamePage) 
    ├── +layout.svelte // Макет для всех страниц внутри (gamePage).  все страницы внутри gamePage будут иметь  <header class="game"> и <footer class="game">
    ├── level/
    │      └── +page.svelte    // Создает роут: /level  
    ├── result/
    │      └── +page.svelte    // Создает роут: /result  
    ├── game1/ 
    │      └── +page.svelte    // Создает роут: /game1  
    └── game2/
               └── +page.svelte    // Создает роут: /game2 
 

src/lib/
├──  assets/
│   ├── fonts/ - хранение скаченных шрифтов
│   ├── icons/ - иконки
│   ├── image/ - картинки интерфейса
│   │   └── bg/ - фоны интерфейса
│   └── favicon.svg
├── components/
│   ├── SHARED/
│   │   ├── BUTTON/
│   │   │   ├── BtnAnswer
│   │   │   │   └── BtnAnswer.svelte - кнопка интерфейса с надписью
│   │   │   └── BtnIcon
│   │   │       └── BtnIcon.svelte  - кнопка интерфейса с svg
│   │   ├── ILLUSTRATION/
│   │   │   └── Illustration.svelte - собирает и возвращает элемент <picture> 
│   │   ├── INDICATORS/
│   │   │   └── Indicators.svelte - специфический переиспользуемый элемент интерфейса с несколькими состояниями
│   │   ├── INPUT/
│   │   │   ├── RangeInput
│   │   │   │   └── RangeInput.svelte - собирает, возвращает и управляет состоянием элемента <input type="Range">
│   │   │   └── TextInput
│   │   │       └── TextInput.svelte - собирает и возвращает элемент <input type="Text">
│   │   ├── LOGO/
│   │   │   └── LogoShow.svelte - управляет отображением svg логотипа
│   │   ├── PROGRESS/
│   │   │   └── Progress.svelte - собирает, возвращает и управляет состоянием элемента <div id="Progress">
│   │   ├── TEXTBLOCK/
│   │   │   └── TextBlock.svelte - собирает и возвращает элемент <div id="ТextBlock">
│   │   ├── TEXTNUM/
│   │   │   └── TextNum.svelte - собирает и возвращает элемент <div id="ТextNum">
│   │   └── TIMER/
│   │       └── Timer.svelte - собирает, возвращает и управляет состоянием элемента <div id="Тimer">
│   │                 
│   ├── WIDGETS/
│   │   ├── GAME_BTN/
│   │   │    └── GameBtn.svelte - собирает, возвращает и управляет состоянием элемента из нескольких кнопок (полученных от BtnAnswer.svelte)
│   │   ├── GAME_FIELD/
│   │   │    ├──  CLASSICQUIZ/
│   │   │    │    └── ClassicField.svelte  - собирает, возвращает и управляет состоянием элемента <div id="ClassicField">
│   │   │    ├──  INTUIT/
│   │   │    │    └── IntuitField.svelte - собирает, возвращает и управляет состоянием элемента <div id="IntuitField">
│   │   │    └──  PHOTOQUIZ/
│   │   │         └── PhotoField.svelte - собирает, возвращает и управляет состоянием элемента <div id="PhotoField">
│   │   ├── LEVEL_RANGE/
│   │   │    └── LevelRange - собирает, возвращает и управляет состоянием элемента <div id="LevelRange"> состоящим из RangeInput.svelte, TextBlock.svelte и TextNum.svelte
│   │   ├── FORM/
│   │   │    ├── SIGN/
│   │   │    │    ├──  SIGNIN/
│   │   │    │    │    └── SignIn.svelte - собирает, возвращает и управляет состоянием элемента формы входа
│   │   │    │    ├──  SIGNUP/
│   │   │    │    │    └── SignUp.svelte - собирает, возвращает и управляет состоянием элемента формы регистрации
│   │   │    └──  FEEDBACK/
│                 └── Feedback.svelte
├── helpers/ - Простые, чистые, одноцелевые функции.
│   ├── checkFileExists.js - определяет расширение медиафайлов фото/видео
│   ├── getRandomArrayElement.js - возвращает случайный элемент массива
│   ├── getRandomIntInRange.js - возвращает случайное число из массива
│   ├── shuffleArray.js - перемешивает массив 
│
├── utils/
│   ├── api/ - Внешняя коммуникация (сервер, сторонние сервисы). 
│   │   ├── loadJson.js - Загружает JSON-файл по указанному пути.
│   │   ├── checkLangUser.js - определяет и контролирует смену языка интерфейса 
│   │   ├── sendResult.js - поделиться результатом
│   │
│   ├──feature/ - Сложные бизнес-правила и сценарии. Обработка счёта, алгоритм игры (шаги, проверка ответов), логика регистрации/входа, валидация сложных форм.
│   │   ├── mechanicsQuiz - алгоритм игры для Quiz, 
│   │   ├── score.js - расчёт и показ результатов, 
│   │   ├── getSceneDataIntuit.js - производит расчёты для режима игры Intuit
│   │   ├── getTimingForSceneQuiz.js  - производит расчёты для режима игры Quiz
│   │
│   ├── modul/
│   │   ├── createMediaContainer.js - собирает иллюстрацию из Illustration.svelte и вспомогательных элементов 
│   │   ├── filterObjectsInArr.js - на основании входящих данных, определяет режим в котором можно использовать карточку
│   │   ├── getDataForLanguage.js - фильтрует объект оставляя только данные нужного языка
│   │   ├── getSecondWord.js - добавляет правильное окончание к слову "вопрос" на всех языках
│   │   ├── pageControl.js - Удаляет все дочерние элементы из указанного контейнера. и Плавно скрывает элемент и вызывает колбэк после завершения анимации.
│   │
│   ├── getData/
│   │   ├── getInterfaceData.js - фильтрует объект в соответствии с ключом
│   │   ├── getObjFromData.js - получить объект из JSON с учётом условий и параметров
│   │   ├── getRandomHint.js - выбрать случайные свойства из объекта
│   │   ├── getScensData.js - возвращает массив объектов allScens на нужном языке и url рисунка для игрового поля
│   │   ├── getShortHint.js - выбрать самую короткую строку из свойств объекта
│   │   ├── getThemeData.js - возвращает массив объектов currentTheme на нужном языке и url рисунка для игрового поля
│   ├── sounds/
│   │   ├── audioOptionsBody.js - управляет состоянием элемента <audio>
│   │   ├── createAudioPlayer.js - - собирает и возвращает  элемент  <audio> 










