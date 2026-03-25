/**
 * Стрелочная функция, которая возвращает текущую дату в формате ддммгггг (слитно).
 * @returns {string} Строка даты в формате DDMMYYYY.
 */
const formatCurrentDate = () => {
  const date = new Date();

  // Получаем день, месяц и год
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Соединяем в формат ДДММГГГГ
  return `${day}${month}${year}`;
};


/**
 * Функция для управления доступом к сайту через пароль.
 * Блокирует контент блюром и показывает модальное окно.
 */
function signBlur() {
  // 1. КОНФИГУРАЦИЯ
  const CORRECT_PASSWORD = formatCurrentDate(); // Ваш пароль
  const CONTENT_SELECTOR = '#homeMain'; // Элемент, который нужно заблюрить (можно использовать '#homeMain')

  // 2. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ
  const content = document.querySelector(CONTENT_SELECTOR);
  const modal = document.getElementById('auth-modal');
  const input = document.getElementById('password-input');
  const submitButton = document.getElementById('submit-password');
  const message = document.getElementById('auth-message');

  if (!content || !modal) {
    console.error("Не найдены элементы контента или модального окна.");
    return;
  }

  // 3. ПРИМЕНЕНИЕ БЛУРА И ПОКАЗ МОДАЛЬНОГО ОКНА
  function applyBlur() {
    // Проверяем, если контент еще не разблокирован
    if (sessionStorage.getItem('isUnlocked') !== 'true') {
      content.style.filter = 'blur(12px)';
      content.style.pointerEvents = 'none'; // Отключаем взаимодействие с заблюренным контентом
      modal.style.display = 'flex';
      input.focus();
    } else {
      removeBlur();
    }
  }

  // 4. СНЯТИЕ БЛУРА И СКРЫТИЕ МОДАЛЬНОГО ОКНА
  function removeBlur() {
    content.style.filter = 'none';
    content.style.pointerEvents = 'auto'; // Включаем взаимодействие
    modal.style.display = 'none';
    sessionStorage.setItem('isUnlocked', 'true'); // Сохраняем состояние разблокировки
  }

  // 5. ЛОГИКА ПРОВЕРКИ ПАРОЛЯ
  function checkPassword() {
    const enteredPassword = input.value.trim();

    if (enteredPassword === CORRECT_PASSWORD) {
      message.textContent = '';
      removeBlur();
      // Удаляем слушателей, чтобы не выполнялась повторная проверка
      submitButton.removeEventListener('click', checkPassword);
      input.removeEventListener('keypress', handleKeypress);
    } else {
      message.textContent = 'Неверный пароль. Попробуйте снова.';
      message.style.opacity = 1;
      input.value = ''; // Очищаем поле
      input.focus();
    }
  }

  // Обработка нажатия Enter
  function handleKeypress(event) {
    if (event.key === 'Enter') {
      checkPassword();
    }
  }

  // 6. УСТАНОВКА СЛУШАТЕЛЕЙ
  submitButton.addEventListener('click', checkPassword);
  input.addEventListener('keypress', handleKeypress);

  // Инициализация: применяем блюр при запуске
  applyBlur();
}

// Запускаем процесс блюр после загрузки DOM
document.addEventListener('DOMContentLoaded', signBlur);
