
function showDate() {

    var d = new Date()

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("getMonth").innerHTML = months[d.getMonth()]

    var d = new Date()
    document.getElementById("getDate").innerHTML = d.getDate()
    var d = new Date()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.getElementById("day").innerHTML = days[d.getDay()]

}

function time() {
    let currentTime = new Date();

    let time = currentTime.getHours() + " : " +
        currentTime.getMinutes() + " : " +
        currentTime.getSeconds()

    document.getElementById("time").innerText = time;

}
