const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
      let input1 = 6;
      let input2 = 5;

      let expected1 = false;
      let expected2 = true;
    //Act
    let actual1 = isFive(input1)
    let actual2 = isFive(input2)
    //Assert
    expect(actual1).to.equal(expected1);
    expect(actual2).to.equal(expected2)

  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let input = 3;
    //Act
    let expected = true;
    //Assert
    let actual = isOdd(input);
    expect(actual).to.equal(expected);
  });
  it("should return false if the num is even", () => {
    //Arrange
    let input = 2;
    //Act
    let expected = false;
    //Assert
    let actual = isOdd(input);
    expect(actual).to.equal(expected);
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let input = 'fish';
    //Act
    let expected = TypeError;
    //Assert
    let actual = () => isOdd(input);
    expect(actual).to.throw(expected);
  });
});





describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange


      //Act
      let expected = [1, 2, 3, 4, 5]
      // Assert
      let actual = myRange(1, 5)
      expect(actual).to.eql(expected)

      // expect.fail('Remove this expect.fail and replace it with your test');

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange

      //Act
      let expected = [1, 3, 5]
      let actual = myRange(1, 5, 2)
      // Assert
      expect(actual).to.eql(expected)


    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let input = 'barrel';
    //Act
    let expected = TypeError;
    //Assert
    let actual = () => myRange(input);
    expect(actual).to.throw(expected);


  });
});






describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
     //Arrange
     let input = -1;
     //Act
     let expected = RangeError;
     //Assert
     let actual = () => fizzBuzz(input);
     expect(actual).to.throw(expected);



  })
  it('should throw a TypeError if max is not a number', ()=> {
     //Arrange
     let input = 'doge';
     //Act
     let expected = TypeError;
     //Assert
     let actual = () => fizzBuzz(input);
     expect(actual).to.throw(expected);


  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    let input = 50;
    let expected = [3,  5,  6,  9, 10, 12, 18,
      20, 21, 24, 25, 27, 33, 35,
      36, 39, 40, 42, 48];
    let actual = fizzBuzz(input);
    expect(actual).to.eql(expected);
  })
})
