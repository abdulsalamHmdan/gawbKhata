var socket = io();
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myparam');
let name = {p1:"خالد بن الوليد",p2:"سعد بن أبي وقاص",p3:"عمرو بن العاص",p4:"حمزة بن عبدالمطلب"}[myParam]
let id = myParam;
console.log(myParam)
let button = document.querySelector('.inp button')
document.querySelector("title").innerText = id;
socket.emit("jo", id, "player")

socket.emit("showMe", id, name)
button.addEventListener('click', () => {
	let s = document.querySelector('.inp input').value;
	socket.emit("insert", [id,name, s, Math.random()])
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
		title.innerText = x[2];
		choic.appendChild(title)
		choic.addEventListener('click', () => {
			if (confirm("هل انت متأكد")) {
				socket.emit("insert2", [id, x[0],x[1],name])
				document.querySelector(".choose").innerText = '';
				document.querySelector("body").className = 'waiting';

			}
		})
		document.querySelector(".choose").appendChild(choic)
	})
	document.querySelector("body").className = 'select';

})
