var form = document.querySelector('form');
const list = document.querySelector('ol');
const text = document.querySelector('#textBar');
var preview = document.querySelector('#preview');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    appendToDisplay(form.elements.todoItem.value);
    form.elements.todoItem.value = '';
    preview.innerText = '';
})

text.addEventListener('input', () => {
    preview.innerText = text.value;
})

function appendToDisplay(text) {
    let note = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    if(text === '') {
        alert('Empty note!');
        return;
    }
    note.innerText = text;
    note.appendChild(checkbox);
    note.classList = "inputBar"
    list.appendChild(note);
}