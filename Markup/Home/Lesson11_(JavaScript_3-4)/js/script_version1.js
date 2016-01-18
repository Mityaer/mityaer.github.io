
var app = { // создаем объект "app", в котором будут все наши методы
  createMyElement: function(tagName1, className1, content1) { // метод создает элемент с тегом, класом и контентом. Как и обычная функция, принимает параметры: название тега (h1, div etc), класс, и контент;
    var element = document.createElement(tagName1); // СОЗДАЕМ временную внутреннюю переменную "element", DOM элемент, со свойством tagName. Tag - зарезервированное слово;
    element.className = className1;                 // добавляем свойство "className" во временную внутреннюю переменную element. Class - зарезервированное;
    element.innerHTML = content1;                   // добавляем свойство "content" во временную внутреннюю переменную element;
    return element;                                // из element возвращаем значение element в функцию (метод);
  }                                                // что такое (как называется) этот VAR ?????????????????
}

var body = document.querySelector('body') // присваиваем для удобства переменной "body" значение с реальным путем к этому самому "body"
var el = app.createMyElement('div', 'wrapper', 'test'); // создаем переменную (элемент) el, применяем к нему функцию app.createElement и пишем, что в соотвествующие поля функции (читай - метода) function(tagName, className, content) мы хотим записать ('div', 'wrapper', 'test'), а к этим полям соответственно применятся значения, описанные в методе createElement
body.appendChild(el); // ищем родителя - body и вставляем переменную el в body. Но чтобы JS знал что такое этот "body" нужно сначала описать его.

// -----------------------------------------------------------------------------
/*
var element = document.createElement('h1');       //метод createElemet создает елемент, кот.вставляем в DOM
element.classList.add('head');                    //добавляем ему класс
element.innerHTML = 'Тест по программированию';   //задаем ему текст

var body = document.querySelector('body');        // ищем родителя, вставляем элемент в документ
body.appendChild(element);                        // вызываем метод вставки элемента appendChild, есть еще insertBefore(elem, nextSibling)
*/
