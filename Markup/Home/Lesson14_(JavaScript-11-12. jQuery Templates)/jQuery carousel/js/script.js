$(function(){ //document ready

  //ищем все 'a' с классом 'jq-arrows' и вызываем метод myCarousel(), который мы добавили служебному объекту fn
  // другими словами, инициализируем плагин на ссылке 'a' с классом jq-arrows:
  $('div.jq-arrows').myCarousel({
    countOfOffsettingImages: 2
  });

});
