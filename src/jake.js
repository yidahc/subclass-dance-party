var Jake = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('Jake').prepend("<img src='Jake.gif' height=200px width=200px/>");
};

Jake.prototype = Object.create(Dancer.prototype);
Jake.prototype.constructor = Jake;

Jake.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};