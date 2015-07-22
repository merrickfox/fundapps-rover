var Rover = function () {
  this.x = 0;
  this.y = 0;
  this.direction = 'N';
}

var rover = new Rover();

Rover.prototype.move = function (command) {
  if(command === 'f') {
    this.y++;
  }
  if(command === 'b') {
    this.y--;
  }
};








































