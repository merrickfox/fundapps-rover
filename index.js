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
  if(command === 'l') {
    this.rotate(command);
  }
  if(command === 'r') {
    this.rotate(command);
  }
};

Rover.prototype.rotate = function (direction) {
  var directions = ['N', 'E', 'S', 'W'];
  var currentIndex = _.indexOf(directions, this.direction);
  var newIndex;

  if (direction === 'l') {
    if (currentIndex - 1 < 0){
      newIndex = 3;
    } else {
      newIndex = currentIndex - 1;
    }
  } else {
    if (currentIndex + 1 > 3){
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
  }

  this.direction = directions[newIndex];
};








































