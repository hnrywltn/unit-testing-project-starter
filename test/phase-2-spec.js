const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    let input = ['a', 'b', 'c'];
    let expected = ['a', 'b', 'c', 'c', 'b', 'a'];
    let actual = mirrorArray(input);
    expect(actual).to.eql(expected);
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    let expected = 'function';
    let actual = hiddenCounter();
    let expected2 = 1;
    let actual2 = actual();
    expect(typeof actual).to.equal(expected);
    expect(actual2).to.equal(expected2)
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
  let double = (num) => {
    return num * 2
  };
  let expected = [2, 4, 6];
  let actual = myMap([1, 2, 3], double);
  expect(actual).to.eql(expected);
  });

  it("should not call the built in Array#map", function () {
    let myMapSpy = chai.spy.on(Array.map)
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    let expected = 2;
    let actual = avgValue([1, 2, 3]);
    expect(actual).to.equal(expected);
  })
})
