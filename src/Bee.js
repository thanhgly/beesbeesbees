var Bee = function() {
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';

};

Bee.prototype = Object.creat(Grub.prototype);
Bee.prototype.constructor = Bee;

