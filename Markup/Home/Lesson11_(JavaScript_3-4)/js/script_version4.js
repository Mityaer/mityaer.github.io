
var app = { // создаем объект "app", в котором будут все наши методы
// createElement: function(tagName, className, content, parentElement) { */ // метод создает элемент с тегом, класом и контентом. Как и обычная функция, принимает параметры: название тега (h1, div etc), класс, и контент. parentElement - это DOM элемент в который мы вставляем наш элемент;
  createElement: function(params) { // принимаем объект (параметры) от app.createElement
    var element = document.createElement(params.tagName); // записываем во временную внутреннюю переменную "element" новосозданный DOM элемент, со свойством tagName. Tag - зарезервированное слово;
    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }
    element.className = params.className;         // добавляем свойство "className" во временную внутреннюю переменную element. Class - зарезервированное;
    element.innerHTML = params.content;           // добавляем свойство "content" во временную внутреннюю переменную element;
    //if (parentElement) {                   // если в createElement передан parentElement то ...
    //  parentElement.appendChild(element);  // ...на место parentElement вставляем тот DOM-элемент, который является родителем. Это вместо body.appendChild(el);
    //}                                      // т.е. если мы передали в метод createElement родителя (в четвертом параметре), то в этот родитель вставляется наш новосозданный элемент
    if (params.parentElement){                    // модифицированное условие
      params.parentElement.appendChild(element);
    }
    return element;                        // из element возвращаем значение element в функцию (метод);
  }                                        // что такое (как называется) этот VAR ?????????????????
}

var bodyLink = document.querySelector('body'); // присваиваем для удобства переменной "body" значение с реальным путем к этому самому "body"
// body.appendChild(el); // ищем родителя - body и вставляем переменную el в body. Но чтобы JS знал что такое этот "body" нужно сначала описать его.
/*var el = --- почему эту штуку можно убрать????? */ /*app.createElement('div', 'wrapper', 'test', body);*/ // создаем переменную (элемент) el, применяем к нему функцию app.createElement и пишем, что в соотвествующие поля функции (читай - метода) function(tagName, className, content) мы хотим записать ('div', 'wrapper', 'test', body), а к этим полям соответственно применятся значения, описанные в методе createElement. Червертое поле "body" - это родитель!!! куда вставляется созданный элемент
app.createElement({      // вызываем метод createElement. Было: var el = app.createElement('div', 'wrapper', 'test', body) - это мы передавали параметры в метод объекта app, но тут если пропустишь один параметро - то жопа. Или нужно ставить пустую строку.
  tagName: 'h1',        // передаем в объект app отдельный другой объект с полями и значениями вот эта поебень - ({}) это передача параметров в объект
  className: 'wrapper',
  content: 'Тест по программированию',       //мы вверху к tagName, className и content спереди дописали params
  parentElement: bodyLink
});
app.createElement({
  tagName: 'input',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  parentElement: bodyLink
});

// -----------------------------------------------------------------------------
/*
var element = document.createElement('h1');       //метод createElemet создает елемент, кот.вставляем в DOM
element.classList.add('head');                    //добавляем ему класс
element.innerHTML = 'Тест по программированию';   //задаем ему текст

var body = document.querySelector('body');        // ищем родителя, вставляем элемент в документ
body.appendChild(element);                        // вызываем метод вставки элемента appendChild, есть еще insertBefore(elem, nextSibling)
*/
