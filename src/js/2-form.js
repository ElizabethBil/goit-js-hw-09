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

const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

let object = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function setValue({ email, message }) {
  input.value = email || '';
  textarea.value = message || '';
}

!object ? (object = { email: '', message: '' }) : setValue(object);

form.addEventListener('input', e => {
  const element = e.target.name;
  const value = e.target.value;
  object[element] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(object));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value.trim() && textarea.value.trim()) {
    localStorage.removeItem('feedback-form-state');
    input.value = '';
    textarea.value = '';

    console.log(object);
  } else {
    alert('All fields should be filled in');
  }
});
