'use strict';

describe('calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });


  describe('plus', function () {

    it('should have 2 as an answer with 1 and 1 as parameters', function () {
      expect(calculator.plus(1, 1)).toBe(2);
    });

    it('should have 2 as an answer with 4 and -2', function () {
      expect(calculator.plus(4, -2)).toBe(2);
    });

    xit('should have 3 as an answer with 1 and 1 and 1', function () {

    });

    xit('should print sum is 2 with 1 and 1 as parameters', function () {


    });
  });

  describe('min', function () {

    it('should have 2 as an answer with 3 and 1 ', function () {
      expect(calculator.min(3, 1)).toBe(2);
    });

    it('should have -1 as an anser with 1 and 2', function () {
      expect(calculator.min(1, 2)).toBe(-1);
    });

    it('should have -1 as an answer with 1 and 1 and 1', function () {
      pending();
    });


  });


  describe('multiply', function () {

    xit('should have 2 as an answer with 2 and 1', function () {
      expect(calculator.multiply(2, 1)).toBe(2);
    });

  });

});
