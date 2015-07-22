describe('Initial settings', function() {

  it('The rover should have a x coordinate and it should be 0 initially', function() {
    rover.x.should.be.exactly(0).and.be.a.Number;
  });

  it('The rover should have a y coordinate and it should be 0 initially', function() {
    rover.y.should.be.exactly(0).and.be.a.Number;
  });

  it('The rover should have a direction variable and it should be N initially', function() {
    rover.direction.should.be.exactly('N');
  });
});

describe('Rover single move commands', function() {
  it('should take a forward command and update the coordinates accordingly', function() {
    rover.move('f');
    rover.y.should.be.exactly(1);
  });

  it('should take a backward command and update the coordinates accordingly', function() {
    rover.move('b');
    rover.y.should.be.exactly(0);
  });

  it('should take a left command and update the direction accordingly', function() {
    rover.move('l');
    rover.direction.should.be.exactly('W');
    rover.y.should.be.exactly(0);
    rover.x.should.be.exactly(0);
  });

  it('should take a right command and update the direction accordingly', function() {
    rover.move('r');
    rover.direction.should.be.exactly('N');
    rover.y.should.be.exactly(0);
    rover.x.should.be.exactly(0);
  });

});

describe('Rover multi move commands', function() {
  beforeEach(function() {
    rover.reset();
  });

  it('should combine directions and rotations and update the coords accordingly', function() {
    rover.move('ffrf');

    rover.y.should.be.exactly(2);
    rover.x.should.be.exactly(1);
    rover.direction.should.be.exactly('E');
  });

  it('should combine directions and rotations and update the coords accordingly', function() {
    rover.move('ffrffrbb');

    rover.y.should.be.exactly(4);
    rover.x.should.be.exactly(2);
    rover.direction.should.be.exactly('S');
  });

  it('should combine directions and rotations and update the coords accordingly', function() {
    rover.move('ffrrflllb');

    rover.y.should.be.exactly(1);
    rover.x.should.be.exactly(1);
    rover.direction.should.be.exactly('W');
  });
});

describe('Rover wrapping around planet', function() {
  beforeEach(function() {
    rover.reset();
  });

  it('should move to y 100 when you go south at y 0', function() {
    rover.move('b');

    rover.y.should.be.exactly(100);
  });

  it('should move to y 0 when you go north at y 100', function() {
    rover.set(0, 100, 'N');
    rover.move('f');

    rover.y.should.be.exactly(0);
  });

  it('should move to x 100 when you go west at x 0', function() {
    rover.move('lf');

    rover.x.should.be.exactly(100);
  });

  it('should move to x 0 when you go east at x 100', function() {
    rover.set(100, 0, 'E');
    rover.move('f');

    rover.x.should.be.exactly(0);
  });
});

describe('Rover obstacle detection', function() {
  beforeEach(function() {
    rover.reset();
  });

  it('raise the the obstacle flag and stop moving', function() {
    rover.move('ffffff');

    rover.y.should.be.exactly(3);
    rover.stoppedForObstacle.should.equal(true);
  });

  it('raise the the obstacle flag and stop moving', function() {
    rover.move('ffffffr');

    rover.y.should.be.exactly(3);
    rover.direction.should.be.exactly('N');
    rover.stoppedForObstacle.should.equal(true);
  });
});

