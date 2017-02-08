'use strict';

var _ = require('underscore');

// Sets child's prototype to a new object whose prototype is parent's
// prototype. Used as:
//   Meteor._inherits(ClassB, ClassA).
//   _.extend(ClassB.prototype, { ... })
// Inspired by CoffeeScript's `extend` and Google Closure's `goog.inherits`.
module.exports._inherits = function (Child, Parent) {
  // copy Parent static properties
  for (var key in Parent) {
    // make sure we only copy hasOwnProperty properties vs. prototype
    // properties
    if (_.has(Parent, key)) Child[key] = Parent[key];
  }

  // a middle member of prototype chain: takes the prototype from the Parent
  var Middle = function Middle() {
    this.constructor = Child;
  };
  Middle.prototype = Parent.prototype;
  Child.prototype = new Middle();
  Child.__super__ = Parent.prototype;
  return Child;
};