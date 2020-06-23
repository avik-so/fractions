import { expect } from 'chai';
import { Fraction } from './fraction';

describe('Fraction Addition', function () {
  it('0 + 0 should equal 0', function () {
    let fraction = new Fraction(0);
    let expectedResult = new Fraction(0);
    expect(fraction.add(fraction)).to.eql(expectedResult);
  });

  it('2 + 2 should equal 4', function () {
    let fraction = new Fraction(2);
    let expectedResult = new Fraction(4);
    expect(fraction.add(fraction)).to.eql(expectedResult);
  });
  it('1/3 + 1/3 should equal 2/3', function () {
    let fraction = new Fraction(1, 3);
    let expectedResult = new Fraction(2, 3);
    expect(fraction.add(fraction)).to.eql(expectedResult);
  });

  it('1/3 + 1/2 should equal 5/6', function () {
    let fractionThird = new Fraction(1, 3);
    let fractionHalf = new Fraction(1, 2);
    let expectedResult = new Fraction(5, 6);
    expect(fractionThird.add(fractionHalf)).to.eql(expectedResult);
  });
  it('1/3 + 2/3 should equal 1', function () {
    let fractionThird = new Fraction(1, 3);
    let fractionTwoThirds = new Fraction(2, 3);
    let expectedResult = new Fraction(1);
    expect(fractionThird.add(fractionTwoThirds)).to.eql(expectedResult);
  });

  it('1/2 + 1/4 should equal 3/4', function () {
    let fractionThird = new Fraction(1, 2);
    let fractionTwoThirds = new Fraction(1, 4);
    let expectedResult = new Fraction(3, 4);
    expect(fractionThird.add(fractionTwoThirds)).to.eql(expectedResult);
  });
  it('3/4 + 3/4 should equal 3/2', function () {
    let fractionThird = new Fraction(3, 4);
    let fractionTwoThirds = new Fraction(3, 4);
    let expectedResult = new Fraction(3, 2);
    expect(fractionThird.add(fractionTwoThirds)).to.eql(expectedResult);
  });
  it('-1/4 + 3/4 should equal 1/2', function () {
    let fractionThird = new Fraction(-1, 4);
    let fractionTwoThirds = new Fraction(3, 4);
    let expectedResult = new Fraction(1, 2);
    expect(fractionThird.add(fractionTwoThirds)).to.eql(expectedResult);
  });
  it('1/-4 + -3/-4 should equal 1/2', function () {
    let fractionThird = new Fraction(1, -4);
    let fractionTwoThirds = new Fraction(-3, -4);
    let expectedResult = new Fraction(1, 2);
    expect(fractionThird.add(fractionTwoThirds)).to.eql(expectedResult);
  });
});
