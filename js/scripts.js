var a = 3;
var b = 4;
var value;
value = (a*b) + (2*a*b) - (b*b);
console.log(value);

if (value>0) {
	console.log('wynik dodatni');
} else {
	console.log('wynik ujemny');
}

if (value === 0) {
	console.log('wynik równy 0');
} else {
	console.log('wynik jest różny od 0');
}