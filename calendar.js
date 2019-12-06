
// ------- KALENDER --------- // 
function showCalender() {
    let calenderGrid = document.querySelector('.calenderGrid')
    calenderGrid.innerHTML = ""
    let daysOfCalender = new Array(31)

    for (let i = 1; i <= daysOfCalender.length; i++) {
        let todoCounter = 0
        
        for (const todo of todoList) {
            if (todo.date.slice(-2) == i) {
                todoCounter++
            }
        }

        console.log(todoCounter)

        let calenderDivs = createNewDivs(i, todoCounter)
        
        calenderGrid.appendChild(calenderDivs)

    }
}


function createNewDivs(day, todosAmount) {
    let newDay = document.createElement('div');
    let todoNumber = document.createElement('p');

   
    if (todosAmount != 0) {
        newDay.innerHTML = day // + " " + todosAmount
        todoNumber.innerHTML = todosAmount
        newDay.appendChild(todoNumber)


    } else {
        newDay.innerHTML = day

    }
    newDay.className = 'calenderDivs'
    todoNumber.className = 'todoNumber'

    return newDay
    
  
}