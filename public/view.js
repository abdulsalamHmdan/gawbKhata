var socket = io();
let qu = [];
let ch = [];
let answer = [];

// socket.on('a', () => {
// 	console.log("a")
// })
// socket.on('b', () => {
// 	console.log("b")
// })
// socket.on('c', () => {
// 	console.log("c")
// })

socket.emit("jo", "me", "view")

socket.on('showMe', (id, name) => {
	document.querySelector('.' + id + ' h3').innerText = name;
})
socket.on('clickButton', (data) => {
	document.querySelector(data).click();
})
socket.on('insert', (data) => {
	let n = [data[0], data[1], Math.random()]
	ch.push(n)
	// console.log(n);
})


socket.on('insert2', (data) => {
	let n = [data[0], data[1]]
	answer.push(n)
	// console.log(n);
})

document.querySelector("#b1").addEventListener('click', () => {
	qu = question.splice(0, 1)[0];
	console.log(qu)
	ch = []
	answer = []
	document.querySelector(".choices").innerText = '';
	document.querySelector(".result").innerHTML = ''
	document.querySelector(".qustion h1").innerText = qu[0];
	let n = ["x", qu[1], Math.random()];
	ch.push(n)
	socket.emit("go")
	// console.log(n)
})

document.querySelector("#b2").addEventListener('click', () => {
	ch = ch.sort((a, b) => {
		return a[2] - b[2];
	})

	document.querySelector(".choices").innerText = '';
	console.log(ch)
	ch.forEach(x => {
		document.querySelector(".choices").innerHTML += `<div class="choic">
		<h2>${x[1]}</h2>
	</div>`
	})
	answer = [];
	socket.emit("show", ch)

})

document.querySelector("#b3").addEventListener('click', () => {
	document.querySelector(".result").innerHTML = ''
	console.log(answer)
	answer.forEach(x => {
		if (x[1] == 'x') {
			document.querySelector(".result").innerHTML += `<div class="ans green"><h2>${x[0]} <span> ===> </span> ${x[1]}</h2></div>`
			document.querySelector(`.${x[0]} .sumScore`).innerText = +document.querySelector(`.${x[0]} .sumScore`).innerText + 50
		} else {
			document.querySelector(".result").innerHTML += `<div class="ans red"><h2>${x[0]} <span> ===> </span> ${x[1]}</h2></div>`
			document.querySelector(`.${x[1]} .sumScore`).innerText = +document.querySelector(`.${x[1]} .sumScore`).innerText + 20

		}
	})
})



document.querySelectorAll(".player").forEach(x => {
	x.addEventListener('click', () => {
		let coin = prompt("الدرجة", 50)
		x.querySelector(".sumScore").innerText = +x.querySelector(".sumScore").innerText + +coin;
	})
})


