Познакомь меня с localStorage в Svelte5.

Задача 1. При входе на сайт, нужно проверить есть ли запись userSettings в localStorage. Если её нет, то нужно создать.

Задача 2. Во время игры обновляется значение переменной score. Его нужно обновить в УЖЕ СУЩЕСТВУЮЩЕЙ записи userProgress в localStorage.

Задача 3. Значения для выбранной темы и языка интерфейса, хранятся в localStorage в записи interface {
        «lang»: «es», // Язык
        «theme»: «default», // Тема 
}. Пользователь выбрал другую тему в меню, например «light». Необходимо внести изменения в localStorage.

=====================================================================
1. Создаем файл утилит storage.js

В папке src/lib/utils/ (или там, где вам удобно) создайте файл, который будет отвечать за «грязную» работу с браузером.

JavaScript

// src/lib/utils/storage.js

/**
 * Сохраняет объект в localStorage
 * @param {string} key 
 * @param {any} data 
 */
export function saveToLocal(key, data) {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Загружает данные из localStorage
 * @param {string} key 
 * @param {any} defaultValue 
 */
export function loadFromLocal(key, defaultValue) {
    if (typeof localStorage === 'undefined') return defaultValue;
    
    const saved = localStorage.getItem(key);
    try {
        return saved ? JSON.parse(saved) : defaultValue;
    } catch (e) {
        console.error(`Ошибка при чтении ${key}:`, e);
        return defaultValue;
    }
}

Импортируем утилиты там где они нужны.

====================================================================

Маленький совет (Pro Tip)
Если вы хотите пойти еще дальше, вы можете сделать сохранение автоматическим прямо в классе, используя $effect.root в конструкторе. Тогда вам даже не придется вызывать this.save() в каждом методе:

JavaScript

import { untrack } from 'svelte'; // импорт из svelte

constructor() {
    // Загрузка
    const data = loadFromLocal('game_timer', { current: 12 });
    this.current = data.current;

    // Авто-сохранение при ЛЮБОМ изменении реактивных свойств класса
    $effect.root(() => {
        $effect(() => {
            // Мы просто обращаемся к свойству, и Svelte начинает за ним следить
            const dataToSave = { current: this.current };
            saveToLocal('game_timer', dataToSave);
        });
    });
}

=====================================================================

💾 LocalStorage в Svelte 5 с Руной $effect

В Svelte 5 руна $effect — это ваш основной инструмент для взаимодействия с внешним миром (браузерным API, сетевыми запросами, LocalStorage) на основе изменений в реактивном состоянии ($state, $props).
    • Как это работает:
        1. Вы используете $state для хранения данных в вашем приложении (например, gameState).
        2. Вы оборачиваете логику работы с LocalStorage (чтение или запись) в $effect(() => { ... }).
        3. Svelte автоматически отслеживает, какие $state-переменные используются внутри $effect, и запускает его заново только тогда, когда эти переменные изменяются.

1. Задача: Инициализация userSettings
Нам нужно прочитать данные из LocalStorage при загрузке и, если их нет, установить значения по умолчанию. Это лучше всего сделать внутри функции инициализации вашего хранилища.
src/lib/shared/stores/userSettings.js
JavaScript
// src/lib/shared/stores/userSettings.js

// Руны $state и $effect не требуют импорта в Svelte 5
// import { $state, $effect } from 'svelte/compiler';

// 1. Ключ для LocalStorage
const KEY = 'userSettings';

// 2. Функция для загрузки или инициализации
function loadSettings() {
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    }
    // Значения по умолчанию, если записи нет
    return {
        isSoundOn: true,
        isMusicOn: true,
        // ... другие настройки
    };
}

// 3. Создаем реактивное состояние
export const userSettings = $state(loadSettings());

// 4. Эффект: Сохранять изменения в LocalStorage
// $effect запустится один раз при инициализации и при любом изменении userSettings
$effect(() => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(userSettings));
        console.log(`[LocalStorage] ${KEY} обновлен.`);
    }
});


/**
 * @name toggleSound
 * @description Пример функции-мутатора
 */
export function toggleSound() {
    userSettings.isSoundOn = !userSettings.isSoundOn;
}
🔑 Результат:
    • При входе: loadSettings() прочитает или инициализирует userSettings.
    • При изменении: Любой вызов, например, toggleSound(), изменит $state(userSettings), что автоматически вызовет $effect, и данные будут записаны в LocalStorage.



=====================================================
2. Задача: Обновление userProgress (Score)

Мы будем использовать наш существующий модуль game.js, который мы создавали ранее.
src/lib/shared/stores/game.js (Дополнение)
Предполагаем, что ваш $state(gameState) уже содержит score.
JavaScript
// src/lib/shared/stores/game.js (Дополнено)

// ... (existing code with $state(gameState) and updateScore function) ...

// 1. Ключ для LocalStorage
const PROGRESS_KEY = 'userProgress';

// 2. Эффект для сохранения прогресса
$effect(() => {
    // 2.1. Отслеживаем только необходимые поля из gameState
    const { score, level, bestScore } = gameState;

    if (typeof localStorage !== 'undefined') {
        // 2.2. Загружаем существующую запись (если есть)
        const stored = localStorage.getItem(PROGRESS_KEY);
        const progressData = stored ? JSON.parse(stored) : {};

        // 2.3. Обновляем нужные поля и сохраняем обратно
        const updatedProgress = {
            ...progressData,
            score: score,
            level: level,
            bestScore: bestScore,
            lastPlayed: new Date().toISOString()
        };

        localStorage.setItem(PROGRESS_KEY, JSON.stringify(updatedProgress));
        console.log(`[LocalStorage] ${PROGRESS_KEY} (Score: ${score}) обновлен.`);
    }
});
🔑 Результат:
    • Когда вы вызываете updateScore(10) в любом компоненте, gameState.score изменяется.
    • Изменение gameState.score автоматически запускает $effect.
    • $effect загружает, обновляет поле score и сохраняет всю структуру userProgress обратно.



===========================================================
3. Задача: Обновление interface (Theme/Lang)


Эта задача аналогична первой и второй: мы создаем реактивное хранилище для интерфейса и используем $effect для синхронизации с LocalStorage.
src/lib/shared/stores/interface.js
JavaScript
// src/lib/shared/stores/interface.js

const KEY = 'interface';

function loadInterface() {
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    }
    // Значения по умолчанию
    return {
        lang: 'en', // 'en', 'es', 'ru', ...
        theme: 'default' // 'default', 'light', 'dark'
    };
}

// 1. Реактивное состояние
export const interfaceSettings = $state(loadInterface());

// 2. Эффект синхронизации с LocalStorage
$effect(() => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(interfaceSettings));
        console.log(`[LocalStorage] Тема установлена: ${interfaceSettings.theme}`);
        
        // 3. Бонус: Обновляем класс на <body>, как вы просили ранее
        document.body.className = ''; // Сбрасываем старые классы темы
        document.body.classList.add(interfaceSettings.theme);
    }
});


/**
 * @name setTheme
 * @description Обновляет тему
 */
export function setTheme(newTheme) {
    interfaceSettings.theme = newTheme;
}
🔑 Использование в компоненте:
Svelte
<script>
  import { setTheme } from '$lib/shared/stores/interface';
</script>

<button onclick={() => setTheme('light')}>Светлая тема</button>
<button onclick={() => setTheme('dark')}>Темная тема</button>
При нажатии на кнопку:
    1. Вызывается setTheme('light').
    2. Изменяется $state(interfaceSettings).
    3. Автоматически запускается $effect.
    4. $effect записывает новый объект в LocalStorage и обновляет класс <body>.

