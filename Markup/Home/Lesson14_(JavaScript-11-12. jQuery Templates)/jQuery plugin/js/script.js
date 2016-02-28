$(function(){ //document ready

  //ищем все 'a' с классом 'fancybox' и вызываем метод fancybox(), который мы добавили служебному объекту fn
  // другими словами, инициализируем плагин на ссылке 'a' с классом fancybox:
  $('a.fancybox').fancybox({
    overlayColor: 'rgba(68, 51, 68, 0.9)'
  });

});
