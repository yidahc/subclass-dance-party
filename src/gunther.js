var Gunther = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('Gunther').prepend("<img src='Gunther.gif' height=200px width=200px/>");
};

Gunther.prototype = Object.create(Dancer.prototype);
Gunther.prototype.constructor = Gunther;

Gunther.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};