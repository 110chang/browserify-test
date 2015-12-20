
/*
 *    Parent
 */

var extend = require('extend');

function Parent() {

}
extend(Parent.prototype, {
  say: function() {
    console.log('hello');
  },
  yell: function() {
    console.log('hello!!!');
  }
});

module.exports = Parent;