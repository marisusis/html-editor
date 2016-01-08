var _frame = document.getElementById('frame');

var frame = _frame.contentDocument;

var body = frame.children[0].children[1];
var head = frame.children[0].children[0];

var script = head.createElement('style');

document.onkeyup = function() {
  body.innerHTML = document.querySelector('.html').innerHTML;
  script.innerHTML = document.querySelector('.css').innerHTML;
}
