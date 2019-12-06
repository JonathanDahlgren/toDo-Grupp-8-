// ------- TODO --------- // 
let id = 0
let todoList = []

// Lägga till ToDo w/ Enter
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        newToDoItem();
    }
}

// Lägga till todo
function newToDoItem() {
    input = document.getElementById('text-input');
    dateInput = document.getElementById('date-input');


    if (input.value == '') {
        alert('Write a todo in the "Add ToDo input field')
    } else if (dateInput.value == '') {
        alert('Choose a date for the ToDo')
    } else if (dateInput.value > 31) {
        alert('Choose a date between 1-31 Dec')
    } else {
        let todo = {
            id: id++,
            date: dateInput.value,
            text: input.value
        };
        todoList.push(todo);

        let list = document.getElementById('list');
        let item = document.createElement('li');
        item.id = todo.id

        let text = document.createElement('span');
        text.innerHTML = input.value + " " + "- " + dateInput.value;

        let removeIcon = document.createElement('i');
        removeIcon.className = 'fa fa-times remove';
        removeIcon.onclick = removeToDoItem;

        let checkIcon = document.createElement('i');
        checkIcon.className = 'fa fa-check-circle done';
        checkIcon.onclick = checkToDoItem;

        item.appendChild(checkIcon);
        item.appendChild(text);
        item.appendChild(removeIcon);

        list.appendChild(item);

        input.value = '';
        dateInput.value = '';
        showCalender()
    }
}



function removeToDoItem(event) {
    /** @type {HTMLElement} */
    const removeIcon = event.target;
    const liItem = removeIcon.closest('li');
    liItem.parentElement.removeChild(liItem);

    console.log(liItem.id);
    for (let i = 0; i < todoList.length; i++) {

        if (todoList[i].id == liItem.id) {
            todoList.splice(i, 1)
            break
        }

    }

    showCalender()
}

function checkToDoItem(event) {

    const checkIcon = event.target;
    const liItem = checkIcon.closest('li')

    if (liItem.style.background === "none") {

        liItem.style.background = "rgba(0, 0, 0, 0.5)";
       
        checkIcon.style.color = "green";

    } else {
        liItem.style.background = "none"

     
        checkIcon.style.color = "black";
    }

}