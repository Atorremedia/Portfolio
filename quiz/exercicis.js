//colors array
let colors = [`blue`,`red`,`purple`,`green`, `black`, `orange`];

button1.addEventListener(`click`,function(){
button2 = document.getElementById(`button2`);
button3 = document.getElementById(`button3`);

//button1, color change
let button1 = document.getElementById('button1');
	var randomColor = colors[Math.floor(Math.random()*colors.length)];
	let container = document.getElementById(`container`);
	container.style.background = randomColor;
})

//button2, add elements

let element1 = document.createElement(`h1`);
element1.setAttribute(`class`,`tag`);
element1.innerHTML = "TAG";
console.log(element1);

button2.addEventListener(`click`,function(){
	container.append(element1)
})

//button3, clear elements


button3.addEventListener(`clic`, function(){
	console.log(`button3`);
	let element = document.getElementById(`tag`);
	element.remove();
})