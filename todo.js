// ------- TODO --------- // 
let id = 0
let todoList = []

// Add ToDo w/ Enter
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        newToDoItem();
    }
}


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
    input = document.getElementById('input');
    
    if (input.value == '') {
        alert('OOOOPS')
    } else {
        let todo = {
            id: id++,
            date: "2019-12-04",
            text: input.value
        };
        todoList.push(todo);

        let list = document.getElementById('list');
        let item = document.createElement('li');
        item.id = todo.id

        let text = document.createElement('span');
        text.innerHTML = input.value;

        let removeIcon = document.createElement('i');
        removeIcon.className = 'fa fa-times';
        removeIcon.onclick = removeToDoItem;

        let checkIcon = document.createElement('i');
        checkIcon.className = 'fa fa-check-circle done';
        //checkIcon.onclick = removeToDoItem;//
        
        item.appendChild(checkIcon);
        item.appendChild(text);
        item.appendChild(removeIcon);
        
        list.appendChild(item);
        input.value = '';
        
        showCalender()
    }
}



function removeToDoItem(event) {
    /** @type {HTMLElement} */
    const removeIcon = event.target;
    const liItem = removeIcon.closest('li');
    liItem.parentElement.removeChild(liItem);

    console.log(liItem.id);
    for(let i = 0; i < todoList.length; i++){

        if(todoList[i].id == liItem.id){
            todoList.splice(i, 1)
            break
        }

    }

    showCalender()
}