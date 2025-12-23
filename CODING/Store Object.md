Расскажи об управлении состоянием через объект. Как это работает? 

Есть объект в котором хранится информация, которая меняется. Изменение в этом объекте отражается на экране в соответствующем элементе интерфейса. Например, 
текущий счёт, когда раунд пройден - счёт меняется; 
состояние каждой из 4 подсказок и каждой по 4 штуки (сколько ещё можно использовать), меняется, когда подсказка использована; 
количество раундов и как пройдены предыдущие раунды, массив в котором отмечены: успешно пройденные раунды ('win'), проигранные раунды ('lose'), не сыгранные раунды ('next').  

Практический пример в /home/daxio/Desktop/Link to Projects/svelte5components/src/lib/Components/buttonIcon/IconSectorButton.svelte

Управление состоянием через объект (Store Object) в Svelte
Ваш подход — хранение всего изменяемого состояния игры в едином объекте — является отличной и распространенной стратегией. В экосистеме Svelte это реализуется с помощью концепции Stores (Хранилища).
Svelte имеет встроенную систему реактивности, которая позволяет компонентам подписываться на изменения в таких хранилищах.

1. ⚙️ Как это работает с точки зрения Svelte
Svelte Store — это простой объект с тремя методами: subscribe, set, и update.
    1. Хранение объекта: Вы создаете файл, например, gameStore.js, и объявляете в нем объект состояния (ваш "объект, в котором хранится информация").
    2. Реактивность (Подписка): Компоненты Svelte, которым нужно отображать данные (например, счет или количество подсказок), подписываются на этот Store.
    3. Обновление: Когда происходит событие (например, "раунд пройден" или "подсказка использована"), вы вызываете метод update на Store.
    4. Оповещение: Svelte Store автоматически оповещает все подписанные компоненты, и они перерисовывают только те части DOM, где произошло изменение.

2. 📝 Создание единого объекта состояния (Store)
Лучшая практика — использовать writable store из Svelte, так как он позволяет легко записывать и обновлять данные.

Файл: src/stores/gameStore.js
JavaScript
import { writable } from 'svelte/store';

// ⭐️ 1. Единый объект состояния (Ваш объект) ⭐️
const initialGameState = {
    currentScore: 0,
    roundStatus: [
        { id: 1, status: 'win' },
        { id: 2, status: 'lose' },
        { id: 3, status: 'next' },
        // ... до 10 или 20 раундов
    ],
    // Подсказки: 4 типа, по 4 шт. каждого
    hints: {
        typeA: 4,
        typeB: 4,
        typeC: 4,
        typeD: 4,
    },
    isGameActive: false,
};

// ⭐️ 2. Создаем writable store
export const gameState = writable(initialGameState);

// ⭐️ 3. Создаем функции-акции (Actions) для обновления
// Этот подход (паттерн Flux/Redux) чище, чем прямое изменение
export const updateScore = (points) => {
    gameState.update(state => ({ 
        ...state, 
        currentScore: state.currentScore + points 
    }));
};

export const useHint = (type) => {
    gameState.update(state => {
        if (state.hints[type] > 0) {
            return {
                ...state,
                hints: {
                    ...state.hints,
                    [type]: state.hints[type] - 1
                }
            };
        }
        return state; // Не меняем, если подсказок нет
    });
};

export const markRoundComplete = (roundId, status) => {
    gameState.update(state => {
        const newStatus = state.roundStatus.map(round => {
            if (round.id === roundId) {
                return { ...round, status: status };
            }
            return round;
        });
        return {
            ...state,
            roundStatus: newStatus
        };
    });
};

3. 🖥️ Использование в компонентах Svelte

В любом компоненте (.svelte) вы можете получить доступ к данным, используя специальный префикс $ (синтаксический сахар Svelte).

Файл: src/components/ScoreDisplay.svelte

Svelte
<script>
  // 1. Импортируем Store
  import { gameState } from '../stores/gameStore'; 
</script>

<h2>Текущий Счет: {$gameState.currentScore}</h2>
Файл: src/components/HintButton.svelte
Svelte
<script>
  import { gameState, useHint } from '../stores/gameStore'; 
  export let hintType; // Например, 'typeA'
  
  // Доступ к количеству:
  $: remaining = $gameState.hints[hintType];
  
  const handleUseHint = () => {
    if (remaining > 0) {
      useHint(hintType); // Вызываем функцию-акцию
    }
  };
</script>

<button 
  on:click={handleUseHint} 
  disabled={remaining === 0}
>
  Использовать {hintType} ({remaining} шт.)
</button>

4. 🔑 Ключевые преимущества этого подхода
    • Единый источник истины (Single Source of Truth): Всегда ясно, где хранится состояние.
    • Четкое разделение: Взаимодействие со Store происходит только через функции-акции (updateScore, useHint), что предотвращает беспорядочное изменение данных.
    • Автоматическая реактивность: Svelte сам заботится о перерисовке элементов, когда вы вызываете update на Store.

