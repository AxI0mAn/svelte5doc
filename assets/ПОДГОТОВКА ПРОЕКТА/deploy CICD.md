# FIRST  DEPLOY
# CI/CD
#  🚀 Алгоритм автоматического развертывания


===========================
# FIRST  DEPLOY   - 🚀 Алгоритм развертывания SvelteKit на GitHub Pages

1. 🛠️ Проверка и Подготовка (Локально)

Перед настройкой CI/CD убедитесь, что ваш локальный код готов.

Проверка package.json: Убедитесь, что команда build в вашем package.json не содержит VITE_BASE_PATH:

// package.json 

JSON

"scripts": {
  // ❌ УДАЛИТЕ VITE_BASE_PATH ИЗ ЭТОЙ СТРОКИ!
  "build": "vite build",
  // ...
},
Почему удаляем? Мы будем передавать VITE_BASE_PATH через GitHub Actions (в файле .yml), а не через локальный скрипт. Это сделает CI/CD более чистым.

Проверка svelte.config.js: 
Убедитесь, что он настроен на чтение base из переменной окружения:

JavaScript

kit: {
  paths: {
    base: process.env.VITE_BASE_PATH || '',
  },
  adapter: adapter({
    pages: 'build', 
    assets: 'build', 
    fallback: '200.html' 
  }),
  // ...
}


Загрузка кода:       Зафиксируйте и отправьте все изменения на ветку main на GitHub.

Bash

git add .
git commit -m "Prepare for deployment"
git push origin main


2. 🤖 Настройка GitHub Actions (CI/CD)
Это основной шаг, который автоматизирует процесс сборки и публикации.

Шаг 2.1: Создание файла Workflow
В корне вашего проекта создайте папку и файл: .github/workflows/deploy.yml

Шаг 2.2: Содержимое deploy.yml
Используйте следующий шаблон. Он выполняет сборку, передавая правильный базовый путь, и публикует результат в специальную ветку.

-------------------------------------------------------------------------------------
# YAML версия Gemini НЕ ПУБЛИКУЕТ - ВЫДАЁТ ОШИБКУ - ниже рабочая версия
-------------------------------------------------------------------------------------
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # Запускать при пуше в ветку main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    # Определяем окружение для GitHub Pages
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    # Разрешаем Actions записывать данные в репозиторий (необходимо для деплоя)
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      # 1. Чек-аут кода
      - name: Checkout
        uses: actions/checkout@v4
      
      # 2. Установка Node.js (выбираем Node 20 или новее)
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      # 3. Установка зависимостей
      - name: Install dependencies
        run: npm install

      # 4. Сборка SvelteKit
      - name: Build SvelteKit
        run: npm run build
        env:
          # ⭐️ ПЕРЕДАЧА VITE_BASE_PATH ЗДЕСЬ!
          # ${{ github.event.repository.name }} - это имя репозитория (test-repo)
          VITE_BASE_PATH: /${{ github.event.repository.name }}
          
      # 5. Настройка артефакта (папки сборки)
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: svelte

      # 6. Загрузка артефакта
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build # Указываем папку, куда adapter-static поместил файлы

      # 7. Развертывание на GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
# Версия Chat GPT  РАБОЧАЯ ВЕРСИЯ, НО ТРЕБУЕТ НАЛИЧИЯ
# src/routes/+page.js cо строкой export const prerender = true;  // для сборки файла index.html

# .github/workflows/deploy.yml

name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install
        run: npm ci

      - name: Build
        env:
          VITE_BASE_PATH: /${{ github.event.repository.name }}
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4

-------------------------------------------------------------------------------------

Шаг 2.3: Загрузка Workflow

Отправьте этот файл на GitHub:

Bash

git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for deployment"
git push origin main

3. 🌐 Настройка GitHub Pages (Один раз)

Этот шаг выполняется только один раз в браузере.

Перейдите в репозиторий: Откройте ваш репозиторий на GitHub.

Settings (Настройки): Перейдите во вкладку Settings.

Pages: Выберите секцию Pages в боковом меню.

Source (Источник):

Установите Source (Источник) в положение "Deploy from a branch" (Развертывание из ветки) → НЕТ!

Выберите "GitHub Actions" (Действия GitHub) в качестве источника развертывания.

Важно: Поскольку мы использовали шаблон actions/deploy-pages@v4, GitHub автоматически определит, что нужно использовать Actions.

4. 🎉 Результат и Автоматизация

Первый запуск: После отправки файла .yml (Шаг 2.3) GitHub Actions автоматически начнет выполнение рабочего процесса. Вы можете следить за его прогрессом во вкладке Actions вашего репозитория.

URL: После успешного завершения деплоя, на странице Settings → Pages появится ваш рабочий URL (например, https://username.github.io/test-repo/).

Автоматические обновления: Теперь каждый раз, когда вы отправляете изменения (git push) в ветку main, GitHub Actions будет автоматически запускать процесс:

Установка зависимостей.

Сборка (npm run build).

Публикация в сеть.




=============================
# CI/CD

стандартная и самая правильная практика для профессиональной разработки и непрерывной доставки (CI/CD).

Ваш рабочий процесс должен выглядеть именно так: разработка ведется в отдельных ветках, а ветка main используется исключительно как источник истины (Source of Truth) для автоматического развертывания.

🚀 Алгоритм автоматического развертывания
Автоматическое обновление сайта происходит благодаря конфигурации, которую мы внесли в файл .github/workflows/deploy.yml.

1. Логика запуска (Trigger)
Рабочий процесс GitHub Actions настроен на прослушивание события push (отправка изменений) только в одну ветку:

YAML

 # .github/workflows/deploy.yml
on:
  push:
    branches:
      - main # 👈 Это главный триггер
Это означает, что изменения появятся на сайте только в двух случаях:

Вы напрямую отправляете (push) изменения в ветку main (не рекомендуется).

Вы сливаете (merge) другую ветку (например, feature/new-button или develop) в ветку main.

2. Рекомендованный рабочий процесс
Ваш цикл разработки будет выглядеть так:

-1. Разработка	
Создание новой ветки	feature/X	
Отделяетесь от main и пишете код новой функции.

-2. Готовность	
Завершение работы, локальное тестирование.	 feature/X	

-3. Проверка	
Создание Pull Request (PR)	feature/X → main	Вы просите слить код. 
Это дает возможность провести ревью.

-4. Развертывание	
Слияние (Merge) PR	main	
Когда PR сливается, происходит push в main, что автоматически запускает GitHub Actions (сборка → публикация).

-5. Результат	
Сайт обновляется через 2–5 минут.	 (Сайт)	
Пользователи видят изменения.


3. Нюанс: Базовый путь (VITE_BASE_PATH)
Обратите внимание, что мы настроили GitHub Actions на автоматическое присвоение базового пути:

YAML

VITE_BASE_PATH: /${{ github.event.repository.name }}
Это гарантирует, что если вы переименуете репозиторий, вам не нужно будет менять ничего в коде — GitHub Actions сам подставит новое имя репозитория в качестве базового пути во время сборки.



=============================================
#  🚀 Алгоритм автоматического развертывания

В вашем новом, настроенном рабочем процессе локальная команда npm run build (или npm run deploy) является просто предварительной проверкой, а не шагом в процессе деплоя.

Вот точная последовательность, которая приведет к обновлению сайта:

1. Подготовка (Локально)
Вы разрабатываете и тестируете свой код в отдельной ветке (например, feature/new-quiz).

2. Сборка для проверки (Опционально)
Вы можете запустить:

Bash для СБОРКИ

npm run prod
Эта команда удалит старую папку build и соберет новую с VITE_BASE_PATH 

Bash для ПРОВЕРКИ

npm run preview 
Запустите команду npm run preview для локального тестирования статического сайта (чтобы убедиться, что он работает перед отправкой).

3. Коммит и Push
Вы фиксируете все изменения в вашей ветке:

Bash

git add .
git commit -m "Complete new feature"
git push origin feature/new-quiz

4. 🔑 Триггер автоматизации (Главный шаг)
После этого вы делаете одно из двух действий:

A. Создаете Pull Request (PR) и сливаете его в ветку main.

B. Сразу сливаете вашу ветку в main (например, командой git push origin feature/new-quiz:main).

Критически важно: Любой push (или merge, который по сути является push) в ветку main является триггером для GitHub Actions.

5. 🤖 Автоматический запуск CI/CD
После этого шага процесс полностью автоматизирован:

GitHub видит push в main.

Запускается файл .github/workflows/deploy.yml.

GitHub Actions самостоятельно выполняет все шаги:

npm ci (установка зависимостей)

npm run build (Сборка с правильным VITE_BASE_PATH — именно здесь происходит финальная сборка для деплоя).

Развертывание на GitHub Pages.

Вывод: Ваша задача заканчивается на слиянии в main. Вам не нужно запускать npm run build или npm run deploy на локальном компьютере перед слиянием, чтобы обновить сайт. Это делается исключительно для локальной проверки.






