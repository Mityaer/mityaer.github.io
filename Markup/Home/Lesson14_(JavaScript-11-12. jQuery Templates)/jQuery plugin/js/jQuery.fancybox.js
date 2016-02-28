// повесить обработчик событий
// сгенерировать элемент и вставить в html

(function($) { //IIFE. Это нужно чтобы функция сразу же выполнялась.

  // fn - служебный объект хранящий все методы JQ.
  // Мы добавляем в глобальный объект 'fn' поле, называем его fancybox, и записываем туда функцию:
  $.fn.fancybox = function(options) { //передаем объект options, в него записываем значения, чтобы конфигурировать наш плагин в другом файле.

    var defaults = {
      overlayColor: 'white'
    };

    var settings = $.extend(defaults, options); // метод $.extend совмешает два объекта и, если что, перезатирает первого инфо из второго

    var $link = this; // $link - ссылка, на которую мы проинициализировали плагин.
    var $body = $('body'); // jQuery коллекция.
    var $modal;     //объявляем переменные в общем скоупе, но задаем им значение только в строке 17-18
    var $overlay;   //объявляем переменные в общем скоупе, но задаем им значение только в строке 17-18

    function showModal(e) { //этот метод будет создавать элемент и вставлять его в body.
      var href = $link.attr('href'); // attr - стандартный метод JQ, вытягивает значение, или устанавливает его (если передано два значения через запятую).
      $modal = $('<div class="fancybox-modal"><img src="' + href + '" ></div>')
      $overlay = $(' <div class="fancybox-overlay">');
      $overlay.css({                                 // задаем цвет для overlay с помощью конфигурации в другом файле
        'background-color': settings.overlayColor
      });

      e.preventDefault(); // предотвратить событие a href по умолчанию

      $body.append($overlay);
      $body.append($modal);
      $overlay.one('click', hideModal); //по щелчку на $overlay выполняем метод hideModal. Обработчик событий вешаем во время создания $overlay

    }

    function hideModal() {
      $modal.remove();
      $overlay.remove();
    }

    $link.on('click', showModal); // по щелчку на link выполняем метод showModal

    return this; // возвращаем this чтобы была возможность вызывать цепочку событий
  }

})(jQuery); //изолированная область, задаем явно что знак доллара - это именно библиотека JQ а не другая. Избегаем конфликтов.
