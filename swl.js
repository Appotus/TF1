var img = $('.sw-links');
if (img.length > 0) {
  var offset = img.offset();

  function mouse(evt) {
    var center_x = (offset.left) + (img.width() / 2);
    var center_y = (offset.top) + (img.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) +45;
    img.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img.css('-o-transform', 'rotate(' + degree + 'deg)');
    img.css('-ms-transform', 'rotate(' + degree + 'deg)');
  }
  $(document).mousemove(mouse);
}

var img2 = $('.sw-rechts');
if (img.length > 0) {
  var offset = img.offset();

  function mouse(evt2) {
    var center_x = (offset.left) + (img2.width() / 2);
    var center_y = (offset.top) + (img2.height() / 2);
    var mouse_x = evt2.pageX;
    var mouse_y = evt2.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) +45;
    img2.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img2.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img2.css('-o-transform', 'rotate(' + degree + 'deg)');
    img2.css('-ms-transform', 'rotate(' + degree + 'deg)');
  }
  $(document).mousemove(mouse);
}