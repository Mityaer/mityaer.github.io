(function($) {
$(function() {
	// Вешаем обработчик событий на .tabs__caption
	// li:not(.active) вернет все li-элементы, кроме тех, что с классом active
	// обработчик на всех не активных
  $('.tabs__caption').on('click', 'li:not(.active)', function() {
		// this здесь - это то, на чем нажали, т.е. .tabs__caption
    $(this)
			// добавляем класс active элементу this и удаляем этот же класс у всех сиблингов
			// цепочка событий кстати!
      .addClass('active').siblings().removeClass('active')
			// выбираем ближайшй к this элемент .tabs
			// находим .tabs__content
			// удаляем у него класс active
			// вешаем класс active для .tabs__content - ????????????????????
      .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})($);


// Всплывающие подсказки:
(function($) {
$(function() {
	// вешаем обработчик событий click на класс input:
  $('.input').on('click', function() {
		// при нажатии на input додаем к hints соответствующий класс active
		var currentHint = $(this).parent().find('.hints');
		$('.hints').removeClass('active');
		currentHint.fadeIn("slow");
  });
});
})($);
