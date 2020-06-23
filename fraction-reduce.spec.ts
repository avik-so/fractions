import { expect } from 'chai';
import { Fraction } from './fraction';

describe('Reducing fractions', () => {
  it('2/4 should equal 1/2', function () {
    let fraction = new Fraction(2, 4);
    let expectedResult = new Fraction(1, 2);
    expect(fraction).to.eql(expectedResult);
  });
  it('4/8 should equal 1/2', function () {
    let fraction = new Fraction(4, 8);
    let expectedResult = new Fraction(1, 2);
    expect(fraction).to.eql(expectedResult);
  });
  it('6/63 should equal 2/21', function () {
    let fraction = new Fraction(6, 63);
    let expectedResult = new Fraction(2, 21);
    expect(fraction).to.eql(expectedResult);
  });
  it('8/4 should equal 2', function () {
    let fraction = new Fraction(8, 4);
    let expectedResult = new Fraction(2, 1);
    expect(fraction).to.eql(expectedResult);
  });
});
