(function(){var _frame = document.getElementById('frame');

var frame = _frame.contentDocument;

var body = frame.children[0].children[1];
var head = frame.children[0].children[0];
var style = document.createElement('style');
head.appendChild(style);
var script = document.createElement('script');
head.appendChild(script);

document.onkeyup = function() {
  body.innerHTML = document.querySelector('.html').innerHTML;
  style.innerHTML = document.querySelector('.css').innerHTML;
  script.innerHTML = document.querySelector('.js').innerHTML;
}
});
