var FinJake = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('FinJake').prepend("<img src='FinJake.gif' height=200px width=200px/>");
};

FinJake.prototype = Object.create(Dancer.prototype);
FinJake.prototype.constructor = FinJake;

FinJake.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};