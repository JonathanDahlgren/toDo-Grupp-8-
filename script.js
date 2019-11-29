window.onload = loadPage


function loadPage(){
    showCalender()
    showDate()
    time()
    setInterval(time, 1000)
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
