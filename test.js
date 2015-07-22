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

describe('Rover move command', function() {
  it('should take a forward command and update the coordinates accordingly', function() {
    rover.move('f');
    rover.y.should.be.exactly(1);
  });

  it('should take a backward command and update the coordinates accordingly', function() {
    rover.move('b');
    rover.y.should.be.exactly(0);
  });

});

