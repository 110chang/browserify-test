
/*
 *    Child
 */

var extend = require('extend');
var inherit = require('util').inherits;
var Parent = require('./parent');

function Child() {

}
inherit(Child, Parent);
extend(Child.prototype, {
  say: function() {
    console.log('good bye');
  }
});
module.exports = Child;