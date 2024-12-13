var socket = io();
let ch = []
socket.emit("jo", "me", "control")
socket.on('insert', (data) => {
    let n = [data[0], data[1], data[2], Math.random()]
    ch.push(n)
    console.log(n);
    let div = document.createElement('div')
    div.className = "cont"

    let ans = document.createElement('h1')
    ans.innerText = data[2];
    let asrh = document.createElement('h5')
    asrh.innerText = data[1]
    let del = document.createElement('button')
    del.innerText = 'حذف'
    del.addEventListener('click', () => {
        console.log("delet")
        socket.emit("del1", data[0])
    })
    let change = document.createElement('button')
    change.innerText = 'تعديل'
    change.addEventListener('click', () => {
        console.log("change")
        let newAns = prompt("new")
        socket.emit("del2", data[0],newAns)
        ans.innerText = newAns;
    })
    div.appendChild(ans)
    div.appendChild(asrh)
    div.appendChild(del)
    div.appendChild(change)
    document.querySelector(".all").appendChild(div)

})



document.querySelector("#b1").addEventListener('click', () => {
    if (confirm('are you sure?')) {
        document.querySelector(".all").innerHTML = '';
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
