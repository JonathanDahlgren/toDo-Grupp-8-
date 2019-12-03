window.onload = loadPage


function loadPage() {
    showCalender()
    showDate()
    time()
    setInterval(time, 1000)
    // addTodoToKalender()
    loadToDoItems()

}
