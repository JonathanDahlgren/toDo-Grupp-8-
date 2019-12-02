window.onload = loadPage


function loadPage(){
    showCalender()
    showDate()
    time()
    setInterval(time, 1000)
    // addTodoToKalender()
    

}


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

//Create list item
let ul = document.createElement('ul');

// Input
input = document.getElementById('input').value;

// Add todo
function newToDoItem() {


todoList.push(input.value);
console.log(input.value);

let ul = document.getElementById('list');
let li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);






input.value = '';
}


function showCalender(){

    let daysOfCalender = new Array(31)

    for(let i = 1; i <= daysOfCalender.length; i++){ 
        let todoCounter = 0
        todoList.forEach((todo) => {
            if(todo.date == i) {
                todoCounter++
            }
        })

        console.log(todoCounter)
        
        let calenderBox = createNewDivs(i, todoCounter)
        let calenderGrid = document.querySelector('.calenderGrid')
        console.log(calenderGrid)
        calenderGrid.appendChild(calenderBox)
        
    }
}

function createNewDivs(day, todosAmount){
    let newDay = document.createElement('div')
    if(todosAmount != 0) {
        newDay.innerHTML = day + " " + todosAmount
    } else {
        newDay.innerHTML = day
    }
    newDay.className = 'calenderBox'
    return newDay
}

function showDate(){

var d = new Date()

        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        document.getElementById("getMonth").innerHTML = months[d.getMonth()]
 
        var d = new Date()
        document.getElementById("getDate").innerHTML = d.getDate()
        var d = new Date()
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        document.getElementById("day").innerHTML = days[d.getDay()]

}

function time(){
    let currentTime = new Date();
    
    let time = currentTime.getHours() + " : "
    + currentTime.getMinutes() + " : "
    + currentTime.getSeconds()
    
    document.getElementById("time").innerText = time;
    
}