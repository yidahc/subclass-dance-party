var BMO = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BMO').prepend("<img src='BMO.gif' height=200px width=200px/>");
};

BMO.prototype = Object.create(Dancer.prototype);
BMO.prototype.constructor = BMO;

BMO.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};