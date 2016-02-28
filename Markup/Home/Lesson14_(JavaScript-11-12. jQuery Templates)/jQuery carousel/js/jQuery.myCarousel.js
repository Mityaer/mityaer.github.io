//IIFE. Это нужно чтобы функция сразу же выполнялась:
(function($) {

  // fn - служебный объект хранящий все методы JQ.
  // Мы добавляем в глобальный объект 'fn' метод, называем его "myCarousel":
  $.fn.myCarousel = function(options) { //передаем объект options, в него записываем значения, чтобы конфигурировать наш плагин в другом файле.

    $(function(){ //document ready

      var defaults = {
        countOfOffsettingImages: 1 // на сколько картнок смещается карусель
      };
      var settings = $.extend(defaults, options); // метод $.extend совмешает два объекта и, если что, перезатирает инфо первого из второго:

      var $leftArr = $('.carousel-arrow-left');
      var $rightArr = $('.carousel-arrow-right');
      var $elementsList = $('.carousel-list');
      var allImages = $('.carousel-hider .carousel-list').children('.carousel-element'); // массив всех картинок, просто так
      var imageVisibleWidth = $('.carousel-hider').width(); // ширина блока всех картинок, просто так

      var pixelStep = (defaults.countOfOffsettingImages * 225); // на сколько пикселей смещается карусель
      var currentPosition = 0;
      var $elementsCount = $elementsList.find('li').length; //кол-во картинок
      var maxOffSet = - (($elementsCount - 3) * 225);
      console.log(maxOffSet);
      var minOffSet = 0;

      $('.carousel-list').css('width', (imageVisibleWidth * $elementsCount)); // Просто так задаем блоку со слайдами ширину всех слайдов

      $rightArr.click(function() {
        if (currentPosition > maxOffSet) {        // если не конец карусели
          if ((currentPosition - pixelStep) > maxOffSet) {  // смотрим вперед, хватает ли места для прокрутки
            currentPosition -= pixelStep;                   // выполняется, если места хватает
          } else {
          currentPosition = maxOffSet;                      // если не хватает, ограничиваем maxOffSet прокрутку видимым пространством
        }
          $elementsList.animate({ left: currentPosition}, 300);
        } else {                                            // если конец карусели, обнуляем позицию (перескок в начало)
          currentPosition = 0;
          $elementsList.animate({ left: currentPosition}, 300);
        }
      });

      $leftArr.click(function() {
        if (currentPosition < minOffSet) {                  // если не в начале карусели
          if ((currentPosition + pixelStep) < minOffSet) {  // считаем, хватает
            currentPosition += pixelStep;                   // просто сдвиг
          } else {
            currentPosition = 0;                            // посчитали, но меcта для сдвига не хватает
          }
          $elementsList.animate({ left: currentPosition}, 300);
        } else {                                            // если начало карусели (тек.поз. = 0)
          currentPosition = - (($elementsCount - 3) * 225); // ($elementsCount - 3) потому что при переходе в другой конец все равно нужно отобразить 3 элемента, т.к. у нас 3 элемента видимых
          $elementsList.animate({ left: currentPosition}, 300);

        }
      });
    });


    return this;
  }

})(jQuery); //изолированная область, задаем явно что знак доллара - это именно библиотека JQ а не другая (избегаем конфликтов).
