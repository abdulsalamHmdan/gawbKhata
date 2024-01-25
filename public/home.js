var socket = io();
let name = prompt("Please enter your name:");
let id = prompt("enter your id", "p1");
let button = document.querySelector('.inp button')
document.querySelector("title").innerText = id;
socket.emit("jo", id, "player")

socket.emit("showMe", id, name)
button.addEventListener('click', () => {
	let s = document.querySelector('.inp input').value;
	socket.emit("insert", [id, s, Math.random()])
	document.querySelector('.inp input').value = '';
	document.querySelector("body").className = 'waiting';

})

socket.on('go', () => {
	document.querySelector('.inp input').value = '';
	document.querySelector(".choose").innerText = '';
	document.querySelector("body").className = 'inserting';

})
socket.on('show', (ch) => {
	document.querySelector(".choose").innerText = '';

	ch.forEach(x => {
		if (x[0] == id) {
			return;
		}
		let choic, title;
		choic = document.createElement('div')
		choic.className = 'choic'
		title = document.createElement('h2')
		title.innerText = x[1];
		choic.appendChild(title)
		choic.addEventListener('click', () => {
			if (confirm("هل انت متأكد")) {
				socket.emit("insert2", [id, x[0]])
				document.querySelector(".choose").innerText = '';
				document.querySelector("body").className = 'waiting';

			}
		})
		document.querySelector(".choose").appendChild(choic)
	})
	document.querySelector("body").className = 'select';

})







// socket.on('load', () => {
// 	console.log("a")

// })
