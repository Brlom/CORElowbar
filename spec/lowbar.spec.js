const {expect} = require('chai');
/* const sinon = require('sinon); */
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
    expect(_.take([1, 2, 3, 4, 5], 4)).to.eql([1, 2, 3, 4]);
  });
});  

describe('#includes', () => {
  it('when passed an empty collection, should return false', () => {
    expect(_.includes([])).to.equal(false);
    expect(_.includes([], 0)).to.equal(false);
    expect(_.includes('')).to.equal(false);
  });
  it('should return boolean depending on if item is found in collection', () => {
    expect(_.includes([1, 2, 3], 1)).to.equal(true);
    expect(_.includes([1, 2, 3], 5)).to.not.equal(true);
    // expect(_.includes({a: 1, b: 2}, 1)).to.equal(true);
  });
});

// describe('#uniq', () => {
//   it('should return empty array when given []', () => {
//     expect(_.uniq([])).to.eql([]);
//   });
//   it('should return array with no repeated value', () => {
//     expect(_.uniq([1, 1])).to.eql([1]);
//   expect(_.uniq([1, 2])).to.eql([1, 2]);
//   expect(_.uniq([1, 2, 2, 1, 3])).to.eql([1, 2, 3]);
//   expect(_.uniq([2, 2, 2, 2, 2])).to.eql([2]);
//   });
// });

// describe('#map', () => {
//   it('should return empty array when given empty array', () => {
//     expect(_.map([])).to.eql([]);
//   });
//   it('when passed a collection and an iteritee, iteritee should loop through collection and return based on the function', () => {
//     expect(_.map([1, 2, 3, 4], _.identity)).to.eql([1, 2, 3, 4]);
//     expect(_.map([1, 2, 3, 4], _))
//   });
// });

// describe('#reduce', () => {
//   it('returns initial value of acc, when passed empty array', () => {
//     expect(_.reduce([], () => { }, 0)).to.equal(0);
//     expect(_.reduce([''], () => { }, 0)).to.equal('');
//   });
//   it('Array: iterates over array: (spy): being called array.length times', () => {
//     const spy = sinon.spy();
//     _.reduce([1, 2, 3], spy, 0);
//     expect(_spy.callCount).to.equal(3); 
//   }); 
//   it('Object: iterates over object: (spy): being called key/values length times', () => {
//     const spy = sinon.spy();
//     _.reduce([{a: 1, b: 2, c: 3}], spy, 0);
//     expect(_spy.callCount).to.equal(3); 
//   });
//    it('Array: iteratee gets called with: array, values, index, acc', () => {
//     const spy = sinon.spy();
//     _.reduce(['dusty!!!], spy, 0);
//     expect(_spy.args[0]).to.eql([0, 'dusty!!!', 0, ['dusty!!!']]); 
//   });
//     it('Object: iteratee gets called with: array, values, index, acc', () => {
//     const spy = sinon.spy();
//     _.reduce([{a: 1}], spy, 0);
//     expect(_spy.args[0]).to.eql([0, 1, 'a', [{a: 1}]); 
//   });
//   it('gives us final acc value', () => {
//     expect(_.reduce([1], () => 'cat', 0)).to.equal('cat');
//   }); 