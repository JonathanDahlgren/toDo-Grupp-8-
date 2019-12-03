// ------- TODO --------- // 
let todoList = []

/**
 * Detta bör läggas i en funktion. 
 */
let todo = {
    date: 4,
    text: "STÄÄÄÄDA"
}

// Add ToDo w/ Enter
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        newToDoItem();
    }
}


// todoList.push(todo)


// Input
input = document.getElementById('input').value;


// Load ToDo Items
function loadToDoItems(items) {

    for (let i = 0; i < todoList.length; i++) {
        console.log(i + ' element is ' + todoList[i]);
        let ul = document.getElementById('list');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(todoList[i]));
        ul.appendChild(li);
    }
}


// Add todo
function newToDoItem() {

    if (input.value == '') {
        alert('OOOOPS')
    } else {
        todoList.push(input.value);
        console.log(input.value);

        let ul = document.getElementById('list');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }
}



function removeToDoItem() {
    console.log('TAA BOOORT');
    todoList.pop();
}






