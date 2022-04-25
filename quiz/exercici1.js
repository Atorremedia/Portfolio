let txt = "We are \"Vikings\"";
alert(txt);

let nombre = new Array();
let nombrenou = new Array();
let length = prompt("Nombre d'elements?");
for (num=0; num<length; num++){
	let guess = prompt("Introdueix un número.");
	nombre[num] = parseInt(guess);
}
document.write("L'array és: " +nombre+"<br>");
let factor = prompt("Indiqueu el factor");
document.write(`Mutipliquem els nombres per `+factor+`: `+"<br>");
for (num=0;num<nombre.length;num++){document.write(nombre[num]+` *`+factor+`, `)};
for (num=0;num<nombre.length;num++){nombrenou[num]=nombre[num]*factor};
document.write("<br>"+`El nou array és: `+nombrenou);

