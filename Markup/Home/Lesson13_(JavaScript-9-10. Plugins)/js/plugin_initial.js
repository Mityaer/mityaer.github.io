$(function() {

  // Инициализация слайдера
  $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь
  });

  // Инициализация прокрутки слайдера
  // $('.jcarousel-prev').jcarouselControl({
  //     target: '-=1'
  // });
  //
  // $('.jcarousel-next').jcarouselControl({
  //     target: '+=1'
  // });

  // Инициализация пагинации слайдера
  $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + '</a>';
      }
  });

  // Автопрокрутка слайдера
  $('.jcarousel').jcarouselAutoscroll({
      interval: 5000,
      target: '+=1',
      autostart: true
  });

});


// // initializing Custom Selection Chosen 1.1.0
// $(function() {
//
//   var config = {
//     '.chosen-select'           : {},
//     '.chosen-select-deselect'  : {allow_single_deselect:true},
//     '.chosen-select-no-single' : {disable_search_threshold:10},
//     '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
//     '.chosen-select-width'     : {width:"95%"}
//   }
//   for (var selector in config) {
//     $(selector).chosen(config[selector]);
//   }
//
// });
