function baseToExponent(baseF, exponentF) {
res=1;
for (var i = 0; i < exponentF; i++) {
res=(res*baseF); //res*=baseF;//
console.log("Число " + baseF + " в степени " + (i+1) + " = " + res);
}
return res; //возврат результата функции//
}

var base = parseInt(prompt('Input first num'));
var exponent = parseInt(prompt('Input the exponent num'));
console.log("Result: " + Math.pow(base,exponent));

if (exponent>0) {
console.log("Result of function: " + baseToExponent(base, exponent)); /*вызов фнкц*/
} else {
alert("Input num bigger than 0");
}
