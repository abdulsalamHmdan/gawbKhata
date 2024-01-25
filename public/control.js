var socket = io();

socket.emit("jo", "me", "control")


document.querySelector("#b1").addEventListener('click', () => {
    if (confirm('are you sure?')) {
        socket.emit("clickButton", "#b1")

    }
})
document.querySelector("#b2").addEventListener('click', () => {
    if (confirm('are you sure?')) {
        socket.emit("clickButton", "#b2")

    }
})
document.querySelector("#b3").addEventListener('click', () => {
    if (confirm('are you sure?')) {
        socket.emit("clickButton", "#b3")

    }
})
document.querySelector("#b4").addEventListener('click', () => {
    if (confirm('are you sure?')) {
        socket.emit("clickButton", "#b4")

    }
})
