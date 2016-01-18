// созд. объект app:
var app = {

// созд метод объекта:
  createMyElement: function(parameters) {
    // создаем переменную-объект-массив "element" куда прописываем что делать с данными из app.createMyElement({}) после вызова этого метода
    var element = document.createElement(parameters.tagName1);

    // если мы передали className1 то присваиваем ему CSS-class:
    if (parameters.className1) {
      element.className = parameters.className1;
    }

    // если мы передали parameters.content1 то присваиваем ему innerHTML (пишем внутри):
    if (parameters.content1) {
      element.innerHTML = parameters.content1;
    }

    // если мы передали inputType то присваиваем ему type:
    if (parameters.inputType) {
      element.type = parameters.inputType; // правило для checkbox
    }

    // вставка элемента "element" в body:
    parameters.parentElement.appendChild(element);
    return element;
  },

  //метод для создания блоков Вопрос-Варианты ответа:
  questions: function(amountOfQuestionGroups, amountOfCheckboxes) {

    // вызываем циклом группы вопросов:
    for (var i = 1; i <= amountOfQuestionGroups; i++) {

      this.createMyElement({
        className1: 'head',
        tagName1: 'h2',
        content1: 'Вопрос №: ' + i,
        parentElement: body
      });

      // вызываем циклом группы checkboxes:
      for (var j = 1; j <= amountOfCheckboxes; j++) {

        // вставляем checkbox:
        //   this.createMyElement({
        //   tagName1: 'input',
        //   inputType: 'checkbox',
        //   // display: 'block',
        //   parentElement: body
        // });

        // вставляем label - подпись к checkbox:
        this.createMyElement({
          tagName1: 'p',
          content1: '<input type="checkbox"/> Вариант Ответа Блабла № ' + j, //<input type="checkbox"/> - вставка checkbox к надписи
          parentElement: body
        });
      }
    };
  }
}

// присваиваем для удобства переменной "body" значение с реальным путем к этому самому "body"
var body = document.querySelector('body');

// вызываем метод createMyElement объекта app и вставляем заголовок:
app.createMyElement({
  className1: 'head',
  tagName1: 'h1',
  content1: 'Тест по программированию',
  parentElement: body
});



// вызываем метод, который циклами рисует группу вопросов и checkboxes:
app.questions(3, 3);

// вставляем кнопку:
app.createMyElement({
  tagName1: 'input',
  inputType: 'submit',
  //nameBlaBla: 'Отправить',
  parentElement: body
});
