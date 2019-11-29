window.onload = loadPage


function loadPage(){
    showCalender()
    showDate()
    addTodoToKalender()
}

let todoList = []

/**
 * Detta bör läggas i en funktion. 
 */
let todo = {
    date: 4,
    text: "STÄÄÄÄDA"
}

todoList.push(todo)


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

