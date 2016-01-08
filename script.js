var _frame = document.getElementById('frame');

var frame = _frame.contentDocument;

var body = frame.children[0].children[1];
var head = frame.children[0].children[0];
var style = documentcreateElement('style');
head.appendChild(style);

document.onkeyup = function() {
  body.innerHTML = document.querySelector('.html').innerHTML;
  style.innerHTML = document.querySelector('.css').innerHTML;
}
