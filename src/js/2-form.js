// const form = document.createElement("form");
// form.className = "feedback-form";
// form.autocomplete = "off";
// form.innerHTML = `<label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>`;

// document.body.appendChild(form);

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let object = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function setValue({ email, message }) {
  input.value = email || '';
  textarea.value = message || '';
}

// Перевірка, чи є значення в localStorage
try {
  object = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
} catch (error) {
  console.error('Error parsing localStorage:', error);
  object = {};
}

// Читання даних з локального сховища при завантаженні сторінки
setValue(object);

form.addEventListener('input', (e) => {
  const element = e.target.name;
  const value = e.target.value;
  object[element] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value.trim() && textarea.value.trim()) {
  localStorage.removeItem(STORAGE_KEY);

    input.value = '';
    textarea.value = '';

    console.log(object);
    object = {};
  } else {
    alert('All fields should be filled in');
  }

});

