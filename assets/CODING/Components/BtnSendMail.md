## Oтправкa писем на почту приложения полностью без бэкенда 
## EmailJS и один электронный адрес для входящих сообщения, но для всех пет-проектов (4 штуки) 






## Oтправкa писем на почту приложения полностью без бэкенда 

Чтобы реализовать отправку писем на почту приложения полностью без бэкенда и со строгой валидацией полей, у тебя есть два пути: простой «аскетичный» (через почтовый клиент пользователя) и профессиональный (через бесплатный сторонний API-сервис).

Поскольку тебе нужна форма внутри приложения с проверкой длины сообщения и обязательными полями, первый способ (mailto:) отпадает — он не умеет отправлять скрытые данные формы напрямую.

Лучший инструмент для этой задачи — бесплатный сервис EmailJS (или его аналоги вроде Formspree / Web3Forms). Они берут данные из твоей фронтенд-формы, сами упаковывают их в письмо и доставляют на твою почту. На бесплатном тарифе EmailJS дает 200 писем в месяц, чего для инди-проекта хватает с головой.

Ниже пошаговое руководство и чистый компонент на Svelte 5.

Шаг 1. Подготовка (3 минуты без кода)
Регистрируешься на emailjs.com.

Вкладка Email Services -> Добавляешь свою почту (куда будут приходить письма). Получаешь Service ID.

Вкладка Email Templates -> Создаешь шаблон письма. Пишешь там текст, используя переменные из формы:

Plaintext

Имя: {{user_name}}
Email: {{user_email}}
Сообщение: {{message}}
Получаешь Template ID.

Вкладка Account -> Копируешь свой Public Key.

Шаг 2. Код компонента формы ContactForm.svelte
Компонент написан в аскетичном стиле, использует стандартные возможности HTML5 для валидации (email, required) и руны Svelte 5 для отслеживания состояния. Для отправки мы используем обычный fetch к API EmailJS, чтобы не тащить в проект лишние npm-библиотеки.

Svelte
<script>
  // Твои ключи, полученные в панели EmailJS
  const SERVICE_ID = 'твой_service_id';
  const TEMPLATE_ID = 'твой_template_id';
  const PUBLIC_KEY = 'твой_public_key';

  // Состояние формы через руны Svelte 5
  let userName = $state('');
  let userEmail = $state('');
  let message = $state('');
  
  let isSending = $state(false);
  let statusMessage = $state('');
  let statusType = $state(''); // 'success' или 'error'

  /**
   * Обработчик отправки формы
   * @param {SubmitEvent} e
   */
  async function sendEmail(e) {
    e.preventDefault();
    
    // Дополнительная проверка длины сообщения на фронтенде
    if (message.trim().length < 5) {
      statusMessage = 'Сообщение должно быть не менее 5 символов!';
      statusType = 'error';
      return;
    }

    isSending = true;
    statusMessage = 'Отправка...';
    statusType = '';

    // Структура данных, которую требует API EmailJS
    const payload = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        user_name: userName,
        user_email: userEmail,
        message: message
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        statusMessage = 'Сообщение успешно отправлено!';
        statusType = 'success';
        // Очищаем форму
        userName = '';
        userEmail = '';
        message = '';
      } else {
        throw new Error('Ошибка сервера EmailJS');
      }
    } catch (err) {
      console.error(err);
      statusMessage = 'Не удалось отправить. Попробуйте позже.';
      statusType = 'error';
    } finally {
      isSending = false;
    }
  }
</script>

<form onsubmit={sendEmail} class="feedback-form">
  <div class="form-group">
    <label for="name">Ваше имя *</label>
    <input 
      type="text" 
      id="name" 
      bind:value={userName} 
      required 
      placeholder="Иван"
    />
  </div>

  <div class="form-group">
    <label for="email">Электронная почта *</label>
    <input 
      type="email" 
      id="email" 
      bind:value={userEmail} 
      required 
      placeholder="example@mail.com"
    />
  </div>

  <div class="form-group">
    <label for="msg">Сообщение (не менее 5 символов) *</label>
    <textarea 
      id="msg" 
      bind:value={message} 
      required 
      minlength="5" 
      rows="5"
      placeholder="Введите ваше сообщение..."
    ></textarea>
  </div>

  <button 
    type="submit" 
    class="btn__func action" 
    disabled={isSending}
  >
    {isSending ? 'Отправка...' : 'Отправить'}
  </button>

  {#if statusMessage}
    <p class="status-info {statusType}" role="status">
      {statusMessage}
    </p>
  {/if}
</form>

<style>
  .feedback-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  input, textarea {
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: transparent;
    color: inherit;
  }

  /* Твои кастомные статусные стили */
  .status-info {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  .status-info.success { color: #2e7d32; }
  .status-info.error { color: #c62828; }
</style>
Архитектурные фишки этого решения:
Защита от спама встроенными методами: Атрибут minlength="5" на теге <textarea> и required блокируют нажатие кнопки прямо на уровне браузера. Форма даже не попытается отправить запрос, пока условия не выполнены.

Никакого бэкенда: Весь процесс обмена (прием JSON-данных -> парсинг в шаблон -> отправка по SMTP протоколу на твой ящик) происходит на серверах EmailJS. Твой билд PWA-приложения остается чистой статикой (SPA), готовой для деплоя куда угодно.

Безопасность ключей: EmailJS спроектирован для работы на фронтенде. Передаваемый PUBLIC_KEY (как понятно из названия) является открытым. Зная его, злоумышленник не сможет угнать твой аккаунт, так как отправка жестко привязана к TEMPLATE_ID (шаблону), который ты настроил в админке.







===============================================







## EmailJS и один электронный адрес для входящих сообщения, но для всех пет-проектов (4 штуки) 


Если использовать EmailJS и один электронный адрес для входящих сообщения, но для всех пет-проектов (4 штуки) и в некоторых проектах будет форма для отзыва и форма для отправки сообщения, а в других только форма для отправки сообщения. Вопрос: как в сообщении увидеть из какого именно приложения пришло сообщение и какой его тип (отзыв или письмо)?

Для этого не нужно создавать четыре разных аккаунта. В EmailJS эту задачу можно решить красиво и централизованно. Всё, что тебе нужно, — настроить динамические переменные внутри одного шаблона письма, либо создать несколько шаблонов под каждый тип сообщения.

Вот два проверенных инженерных подхода.

Подход 1. Всё в одном шаблоне (Динамические поля в JSON-объекте) — Самый простой вариант
Ты создаешь в панели EmailJS один универсальный шаблон (например, Template ID: universal_contact_form), а информацию о приложении и типе формы прокидываешь прямо из JS-кода при отправке.

1. Настройка шаблона в панели EmailJS:
В тексте шаблона ты пишешь такие переменные в двойных фигурных скобках:

Plaintext
Новое уведомление!
Приложение: {{project_name}}
Тип обращения: {{form_type}}
--------------------------------------
Имя: {{user_name}}
Email: {{user_email}}
Сообщение: {{message}}
2. Изменение в коде формы (ContactForm.svelte):
Когда ты вызываешь fetch, ты просто добавляешь параметры project_name и form_type в объект template_params.

Для каждого своего проекта ты жестко прописываешь их значения. Например, для формы отзыва в приложении antopaz код будет выглядеть так:

JavaScript
const payload = {
  service_id: SERVICE_ID,
  template_id: 'universal_contact_form', // Один ID для всех форм
  user_id: PUBLIC_KEY,
  template_params: {
    // Автоматические маркеры для сортировки писем:
    project_name: 'Antopaz Quiz App', 
    form_type: 'Отзыв', 
    
    // Данные от пользователя:
    user_name: userName,
    user_email: userEmail,
    message: message
  }
};
Если это будет форма письма в калькуляторе caloca, ты просто поменяешь эти строчки на 'Caloca Calculator' и 'Письмо'. На почту придет красиво размеченное сообщение, где сразу видно, откуда «прилетело».

Подход 2. Разделение по шаблонам (Для жесткой сортировки на почте)
Если ты хочешь автоматизировать процесс (например, чтобы письма-отзывы автоматически падали в одну папку на почте, а технические баги из другого приложения — в другую), лучше создать в панели EmailJS несколько шаблонов (до 3 штук на бесплатном тарифе, либо использовать Подход 1 с темой письма).

Каждый шаблон будет иметь свой уникальный TEMPLATE_ID (например, template_antopaz_review, template_caloca_message).

В коде компонента для конкретной формы ты будешь указывать именно её персональный TEMPLATE_ID. Кроме того, в настройках шаблона EmailJS можно динамически менять тему письма (Subject):

Тема для первого шаблона: [Antopaz] Новый отзыв от {{user_name}}

Тема для второго шаблона: [Caloca] Вопрос по вычислениям

Благодаря такой теме ты сможешь настроить обычные фильтры (правила) в своем почтовом ящике (Яндекс, Gmail, Mail.ru), чтобы почта сама раскидывала входящие по папкам, ориентируясь на квадратные скобки [Antopaz] или [Caloca] в теме письма.

Резюме
Для пет-проектов Подход 1 (добавление project_name и form_type в параметры) — самый гибкий. Ты пишешь один переиспользуемый компонент формы, а в качестве пропсов ($props()) прокидываешь в него название приложения и тип формы. Компонент остается универсальным, а порядок на почте — идеальным.
