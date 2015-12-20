
/*
 *   Main
 */

var $ = jQuery || require('jquery');
var Parent = require('./parent');
var Child = require('./child');

window.onload = function() {
  console.debug(jQuery);

  var foo = require('./foo');
  var gamma = require('gamma');

  var n = gamma(foo(5) * 3);
  var txt = document.createTextNode(n);
  console.debug(document);
  document.body.appendChild(txt);

  // hoge

};

var parent = new Parent();
parent.say();
parent.yell();

var child = new Child();
child.say();
child.yell();