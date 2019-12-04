// ------- TODO --------- // 
let todoList = ['dada']

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
    
        let list = document.getElementById('list');
        let item = document.createElement('li');
        let text = document.createElement('p')
        item.innerHTML = "<i id='done' class='fa fa-check-circle done' aria-hidden='true'></i><i id='remove' onclick='removeToDoItem()' class='fa fa-times' aria-hidden='true'></i>";
        text.appendChild(document.createTextNode(todoList[i]));
        item.appendChild(text);
        list.appendChild(item);
    }
}


// Add todo
function newToDoItem() {

    if (input.value == '') {
        alert('OOOOPS')
    } else {
        todoList.push(input.value);
        console.log(input.value);

        let list = document.getElementById('list');
        let item = document.createElement('li');
        let text = document.createElement('p')
        item.innerHTML = "<i id='done' class='fa fa-check-circle done' aria-hidden='true'></i><i id='remove' onclick='removeToDoItem()' class='fa fa-times' aria-hidden='true'></i>";
        text.appendChild(document.createTextNode(input.value));
        item.appendChild(text);
        list.appendChild(item);

        input.value = '';
    }
}



function removeToDoItem() {
    console.log('TAA BOOORT');
    todoList.pop();


    //Update Array -> Update todoList
    let list = document.getElementById('list');
    let item = document.getElementById('item');
     

}