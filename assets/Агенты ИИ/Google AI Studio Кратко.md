Настройка Google AI Studio:

Нажмите на логотип Google AI Studio в левом верхнем углу.

В открывшемся окне:
Настройте параметры по списку, который есть ниже (выберите модель Gemini 2.5 Pro, поставьте температуру 0.15, включите Thinking mode и Code execution).

В поле System Instructions вставьте ваши глобальные правила (про Svelte 5, руны и отказ от Tailwind).

Внизу, в поле ввода сообщения, прикрепите файлы вашего проекта через кнопку + и вставьте текст финального ТЗ.

# Шаг 1. Базовые настройки интерфейса (Правая панель):

Модель (Model selection)
Model: Gemini 2.5 Pro (для сложных архитектурных шагов, разбора багов и генерации ключевой логики) или Gemini 2.5 Flash (для рутинного написания простых UI-компонентов и экономии суточных лимитов)

Основные параметры
Temperature (Температура): 0.15 (низкое значение заставит модель писать строгий, точный код без "фантазий" и строго следовать структуре вашего ТЗ)

#Блок «Thinking»

Thinking mode: Включен (On) (критически важно для Pro-модели; перед выдачей кода ИИ сначала построит внутреннюю цепочку рассуждений, что минимизирует архитектурные ошибки)

Set thinking budget: Выключен (Off) (пусть модель тратит на размышления столько токенов, сколько ей нужно для качественного анализа)

# Блок «Tools»

Structured outputs: Выключен (Off) (не нужен, так как вы ждете от модели файлы кода и текстовые объяснения, а не JSON-структуры)

Code execution: Выключен (Off) (позволит Gemini запускать свои алгоритмы парсинга или сокращения дробей во внутренней песочнице Python, чтобы выдавать вам гарантированно протестированный и рабочий код)

Function calling: Выключен (Off) (не требуется для этой задачи)

Grounding with Google Search: Включен (On) (поможет модели сверяться с актуальной документацией по Svelte 5 и синтаксису рун, если возникнут спорные моменты)

Grounding with Google Maps: Выключен (Off) (не требуется)

URL context: Включен (On) (пригодится, если вам захочется скинуть модели прямую ссылку на специфический раздел документации)

# Блок «Advanced settings»

Media resolution: Default (или High, если будете прикреплять скриншоты макетов в высоком разрешении)

Safety settings: Edit -> Выставить все ползунки на минимум (Block none / Block few) (чтобы фильтры безопасности случайно не заблокировали генерацию кода при использовании системных терминов вроде abort, kill или execute)

Output length: 65536 (максимальное значение, чтобы модель могла отдавать объемные файлы логики и UI-компонентов целиком, не обрывая генерацию на середине кода)

Top P: 0.95 (в сочетании с низкой температурой удержит модель в рамках самых логически обоснованных вариантов написания кода)

# Блок «Environment» (появляется при включении Code execution)

Type: New (каждый раз запускает чистую среду выполнения для тестов)

Sources: Пусто (дополнительные файлы в песочницу прокидывать не нужно)

Network: Пусто (доступ в интернет коду внутри песочницы не требуется)


# Шаг 2. Заполнение System Instructions (Системные инструкции):

Дайте чату понятное имя (например, fraction_PWA_Svelte5_Refactoring).

Заполните системные инструкции:

You are a lead developer and architect specializing in Svelte 5 (Runes), modern CSS/SCSS (clean style logic, responsive design), and robust PWA/SPA architectures.

Your goal is to help users implement new features, refactor existing code, and optimize single-page applications (SPAs) with a mobile-first, responsive design, and cross-browser support.

Strict Code Generation Rules:
1. Svelte 5 Standard: Use only Svelte 5 Runes ($state, $derived, $props, $inspect, $effect). Never use old Svelte 3/4 reactive declarations (e.g., $:) or class-based structures. Favor functional programming principles.

2. Styling Philosophy: Use ONLY pure CSS or SCSS. Never use Tailwind CSS or any other utility-first CSS frameworks under any circumstances. Ensure perfect mobile responsiveness with Flex in Grid layouts.

3. Typography and UI/UX: Follow clean UI/UX standards and reference files in the styles/ 
Maintain a mobile-first, component-based architecture suitable for PWA offline use.

4. Language: Analyze requirements, explain technical concepts, and comment in code in Russian, but write all variable names and system keys strictly in English.

Tone and approach:
- Be a strict, structured, and constructive mentor. Don't confuse the developer; Instead, guide it along the optimal architectural path.

- When generating code, provide complete, comprehensive components or logical blocks. Don't use placeholders like "// the rest of the code here" unless explicitly requested.

- Step-by-step: We don't implement everything at once. We go step-by-step. Step by step. Feature by feature.

- Context first:
Before submitting code, you must understand the existing relationships.
Ask clarifying questions and have the necessary discussions to ensure mutual understanding of upcoming additions to the code.
I will provide you with the contents of the necessary and key files (+layout.svelte, appState.svelte.js, components).
If you need the code for updated files, please submit a request, and I will provide you with the current code for these files.

- Import analysis: You must track where data comes from and where it goes. Don't create copies of a function or clones with a new name if the functionality already exists and can be used.

- Prioritize autonomous operation, lightweight state management, and a clear file structure.

- Svelte 5 Style: Use only Runes. If you see any errors or opportunities for optimization for Svelte 5 in my old code, please point them out.


# Шаг 3. Как правильно подавать контекст агенту (Секреты работы в чате)

Используйте файлы: В левой части чата Google AI Studio вы можете загружать файлы.

Используйте расширенный и проверенный через ИИ запрос - промт для Google AI Studio.
Прикрепите файлы, если это необходимо.

# Шаг 4. Использование Compare Mode для ревью кода -  Если вы сомневаетесь в предложенном решении.

# Шаг 5. Важное предупреждение: СОХРАНЕНИЕ!!! Никогда не полагайтесь на автосохранение на 100%. 

1. Как сохранить промпт (Share)
Вместо кнопки «Save» в верхнем правом углу (рядом с кнопкой Get Code) находится кнопка Share (Поделиться).

Когда вы нажимаете Share, система автоматически сохраняет ваш текущий промпт на ваш Google Диск (в специальную папку AI Studio) и создаёт на него уникальную ссылку.

После этого вы можете спокойно закрывать вкладку. Промпт останется в вашей истории.

2. Как вернуться к сохранённой сессии
Все ваши чаты, промпты и загруженные файлы автоматически сохраняются в вашей библиотеке. Чтобы открыть их заново:

Посмотрите на левую панель интерфейса (если она скрыта, нажмите на иконку «бургер-меню» — три полоски в верхнем левом углу).

Найдите там раздел My Library (Моя библиотека) или Recent Prompts (Недавние промпты).

Там будут лежать абсолютно все ваши сессии кодинга. Просто кликните по нужной, и чат откроется со всеми прикреплёнными файлами и историей переписки.

💡 Важный совет для долгих сессий:
Поскольку вы работаете в режиме Chat prompt, вся история переписки сохраняется в реальном времени. Но если вы переживаете за сохранность данных перед закрытием браузера:

Нажмите кнопку Share в правом верхнем углу.

Введите любое понятное вам имя для этого чата (например, «Калькулятор Дробей — Шаг 1») и подтвердите сохранение.

После этого чат гарантированно зафиксируется в вашей библиотеке, и вы сможете продолжить с того же места в любой момент!

# Шаг 6.  Двигайтесь пошагово. 
Делайте запрос не на все файлы сразу, а запросите один файл, после него второй и так далее.

# Шаг 7. 💡 Инженерный лайфхак для многодневной разработки:
Когда за неделю переписки контекст раздуется (например, перевалит за 100-200 тысяч токенов) и Gemini начнёт выдавать ответы медленнее, сделайте «Контекстный сброс»:

Попросите модель в текущем чате: «Сделай краткое резюме нашей архитектуры, текущего состояния приложения Antopaz и списка задач, которые мы уже решили».

Скопируйте это резюме.

Откройте новый чат, вставьте те же System Instructions, прикрепите актуальные (уже изменённые) файлы кода, вставьте скопированное резюме как стартовую точку и продолжайте работу с чистой, быстрой памятью.

