var _frame = document.getElementById('frame');

var frame = _frame.contentDocument;

var body = frame.children[1].children[0];

document.onkeyup = function() {
  body.innerHTML = document.querySelector('.html').innerHTML;
}
