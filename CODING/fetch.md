# ﻿руна $effect и fetch.

Задача 1. Универсальная Функция, которая получает url, загружает JSON и возвращает объект JS. Использовать функцию очистки внутри $effect (вызывается перед новым запуском эффекта или при уничтожении) для отмены незавершенного запроса. С применением лучших практик. Покажи код самой функции и пример её использования.

===========================================================
Для создания универсальной функции с очисткой мы используем паттерн, который в Svelte 5 часто реализуется как "Store Factory" или "Composable". Мы создадим функцию useFetch (по аналогии с хуками в других фреймворках), которая будет возвращать реактивное состояние и запускать $effect для обработки запроса.

🛠️ Универсальный Модуль useFetch.js
Этот модуль будет размещен в слое SHARED вашей FSD-структуры, например, по пути: src/lib/shared/api/useFetch.js.
JavaScript
// src/lib/shared/api/useFetch.js

// Руны $state и $effect не требуют импорта в Svelte 5

/**
 * @name useFetch
 * @description Реактивная функция для загрузки JSON с отменой незавершенного запроса.
 * @param {string | null} initialUrl - Начальный URL для загрузки.
 * @returns {{
 * data: any,
 * isLoading: boolean,
 * error: string | null,
 * setUrl: (newUrl: string | null) => void
 * }}
 */
export function useFetch(initialUrl = null) {

    // 1. Реактивное состояние для хранения результатов и параметров
    const state = $state({
        url: initialUrl,
        data: null,
        isLoading: false,
        error: null,
    });

    /**
     * @name setUrl
     * @description Функция для реактивного изменения URL и запуска нового fetch.
     */
    function setUrl(newUrl) {
        state.url = newUrl;
    }

    // 2. Эффект: Запускается при инициализации и при изменении state.url
    $effect(() => {
        // Проверяем, что url существует
        if (!state.url) {
            state.data = null;
            state.error = null;
            return; // Ничего не делаем, если URL пуст
        }
        
        // 2.1. Создаем AbortController для возможности отмены
        const controller = new AbortController();
        const signal = controller.signal;
        
        // 2.2. Устанавливаем статус загрузки
        state.isLoading = true;
        state.error = null;
        
        async function fetchData() {
            try {
                const response = await fetch(state.url, { signal });
                
                // Проверяем, что запрос не был отменен, прежде чем обрабатывать ответ
                if (signal.aborted) return;

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const dataObject = await response.json();
                
                // 2.3. Обновляем реактивное состояние
                state.data = dataObject;

            } catch (err) {
                // Если ошибка — это AbortError, игнорируем ее, так как это была очистка
                if (err.name === 'AbortError') {
                    console.log(`[Fetch] Запрос к ${state.url} отменен.`);
                    return;
                }
                console.error(`[Fetch Error] ${state.url}:`, err);
                state.error = err.message;
                state.data = null; // Очищаем данные при ошибке

            } finally {
                // Устанавливаем isLoading в false, если запрос не был отменен
                if (!signal.aborted) {
                    state.isLoading = false;
                }
            }
        }

        fetchData();
        
        // 3. Функция очистки (Cleanup function)
        // Она вызывается:
        // a) перед повторным запуском $effect (если state.url изменится)
        // b) при уничтожении компонента
        return () => {
            controller.abort(); // Отменяем текущий незавершенный запрос
        };
    });

    // 4. Возвращаем реактивное состояние и мутатор URL
    return {
        get data() { return state.data; },
        get isLoading() { return state.isLoading; },
        get error() { return state.error; },
        setUrl
    };
}

💡 Пример Использования в Компоненте
Этот компонент показывает, как вы можете использовать useFetch для загрузки начальной конфигурации и возможности изменить URL для загрузки других данных.
    • Путь: src/lib/widgets/JsonViewer/JsonViewer.svelte
Svelte
<script>
    import { useFetch } from '$lib/shared/api/useFetch';

    // 1. Инициализация. Начинаем загрузку JSON с заданного URL.
    const { data, isLoading, error, setUrl } = useFetch('/api/initial-config.json');

    function loadAnotherConfig() {
        // 2. Вызываем setUrl. Это меняет $state.url внутри useFetch
        // и автоматически перезапускает $effect с отменой предыдущего запроса.
        setUrl('/api/secondary-data.json');
    }
    
    function clearData() {
        // Очистка: установка URL в null останавливает fetch и сбрасывает состояние
        setUrl(null);
    }
</script>

<div class="json-viewer">
    {#if isLoading}
        <p>Загрузка данных...</p>
    {:else if error}
        <p style="color: red;">Ошибка: {error}</p>
        <button onclick={clearData}>Очистить</button>
    {:else if data}
        <h2>Данные загружены (Ключ: {data.key || 'N/A'})</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onclick={loadAnotherConfig}>Загрузить другие данные</button>
        <button onclick={clearData}>Очистить</button>
    {:else}
        <p>Начальная конфигурация загружена, нажмите кнопку, чтобы запросить другие данные.</p>
        <button onclick={loadAnotherConfig}>Загрузить данные</button>
    {/if}
</div>

<style lang="scss">
    // Стили для компонента
    .json-viewer {
        padding: 1em;
        border: 1px solid #ccc;
    }
    pre {
        background-color: #f0f0f0;
        padding: 0.5em;
        overflow-x: auto;
    }
</style>
🔑 Преимущества этого подхода:
    1. Реактивность: Компонент обновляется автоматически, когда меняются data, isLoading или error.
    2. Универсальность: Вы можете использовать useFetch для любых JSON-запросов, просто передавая нужный URL.
    3. Лучшие практики: Интегрированное использование AbortController обеспечивает очистку ресурсов, предотвращая гонки данных и лишнюю нагрузку на сеть/память при быстрой смене страниц или параметров запроса.
    4. Синглтон Svelte 5: Мы используем $state и $effect напрямую, без необходимости импортов из svelte/compiler.

