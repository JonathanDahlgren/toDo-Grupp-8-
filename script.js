window.onload = loadPage


function loadPage(){
    showCalender()
}

function showCalender(){

    let daysOfCalender = new Array(31)

    for(let i = 0; i < daysOfCalender.length; i++){    
        let calenderBox = createNewDivs(i+1)
        let calenderGrid = document.querySelector('.calenderGrid')
        console.log(calenderGrid)
        calenderGrid.appendChild(calenderBox)
        
    }
}

function createNewDivs(day){
    let newDay = document.createElement('div')
    newDay.innerHTML += (day)
    newDay.className = 'calenderBox'
    return newDay
}