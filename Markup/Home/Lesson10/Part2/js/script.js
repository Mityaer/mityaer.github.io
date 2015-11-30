var arr = [];
var sucsessfulLogin = 0; //флаг успешного входа//

for (var i = 0; i < 5; i++) {
arr[i] = prompt ("Введите имя "+ (i+1) + " пользователя");
console.log(arr[i]);
}
name = prompt("Enter your name");
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === name) {
     sucsessfulLogin = 1;
     alert(name + ", your login sucsessful");
  }
}
// alert(typeof "sucsessfulLogin");
if (sucsessfulLogin === 0 ) {
  alert("Not yet registred");
}
