const {expect} = require('chai');

const _ = require('../lowbar');

describe('#identity', () => {
  it('returns the value passed as an argument', () => {
    expect(_.identity(3)).to.equal(3);
    expect(_.identity('hello')).to.equal('hello');
    expect(_.identity(true)).to.equal(true);
  });
  it('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(_.identity(arr)).to.equal(arr);
  });
});

describe('#take', () => {
  it('should return empty array when given []', () => {
    expect(_.take([])).to.eql([]);
  });
  it('should return empty array when passed 0 as the second argument', () => {
    expect(_.take([1, 2], 0)).to.eql([]);
  });
  it('Return array with first element when not passed a second argument', () => {
    expect(_.take([1, 2])).to.eql([1]);
  });
  it('should return array sliced to the given second argument', () => {
    expect(_.take([1, 2, 3, 4, 5], 4)).to.eql([1, 2, 3, 4,]);
  });
});  
