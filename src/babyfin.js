var BabyFin = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('	BabyFin').prepend("<img src='	BabyFin.gif' height=200px width=200px/>");
};

	BabyFin.prototype = Object.create(Dancer.prototype);
	BabyFin.prototype.constructor = 	BabyFin;

	BabyFin.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};