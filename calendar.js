

function showCalender() {

    let daysOfCalender = new Array(31)

    for (let i = 1; i <= daysOfCalender.length; i++) {
        let todoCounter = 0
        todoList.forEach((todo) => {
            if (todo.date == i) {
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

function createNewDivs(day, todosAmount) {
    let newDay = document.createElement('div')
    if (todosAmount != 0) {
        newDay.innerHTML = day + " " + todosAmount
    } else {
        newDay.innerHTML = day
    }
    newDay.className = 'calenderBox'
    return newDay
}