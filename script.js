var _frame = document.getElementById('frame');

var frame = _frame.contentDocument;

var body = frame.children[0].children[1];

document.onkeyup = function() {
  body.innerHTML = document.querySelector('.html').innerHTML;
}
