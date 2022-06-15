var form = document.querySelector('form');
const list = document.querySelector('ol');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    appendToDisplay(form.elements.todoItem.value);
    form.elements.todoItem.value = '';
})

function appendToDisplay(text) {
    let note = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    note.innerText = text;
    note.appendChild(checkbox);
    note.classList = "inputBar"
    list.appendChild(note);
}