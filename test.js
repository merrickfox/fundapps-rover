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

