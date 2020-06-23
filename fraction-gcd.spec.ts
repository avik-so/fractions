import { expect } from 'chai';
import { Fraction } from './fraction';

describe('Find Greatest Common Factor', () => {
  it('1 and 1 should be 1', function () {
    let factor = Fraction.gcf(1, 1);
    let expectedResult = 1;
    expect(factor).to.eql(expectedResult);
  });
  it('2 and 4 should be 2', function () {
    let factor = Fraction.gcf(2, 4);
    let expectedResult = 2;
    expect(factor).to.eql(expectedResult);
  });
  it('6 and 63 should be 3', function () {
    let factor = Fraction.gcf(6, 63);
    let expectedResult = 3;
    expect(factor).to.eql(expectedResult);
  });
  it('3 and 7 should be 1', function () {
    let factor = Fraction.gcf(3, 7);
    let expectedResult = 1;
    expect(factor).to.eql(expectedResult);
  });
  it('63 and 6 should be 3', function () {
    let factor = Fraction.gcf(63, 6);
    let expectedResult = 3;
    expect(factor).to.eql(expectedResult);
  });
  it('48 and 18 should be 6', function () {
    let factor = Fraction.gcf(48, 18);
    let expectedResult = 6;
    expect(factor).to.eql(expectedResult);
  });
  it('5 ,6 = 1', function () {
    let factor = Fraction.gcf(5, 6);
    let expectedResult = 1;
    expect(factor).to.eql(expectedResult);
  });
  it('0 ,1 = 1', function () {
    let factor = Fraction.gcf(0, 1);
    let expectedResult = 1;
    expect(factor).to.eql(expectedResult);
  });
  it('1 ,0 = 1', function () {
    let factor = Fraction.gcf(1, 0);
    let expectedResult = 1;
    expect(factor).to.eql(expectedResult);
  });
  it('-2 ,-4 = 2', function () {
    let factor = Fraction.gcf(-2, -4);
    let expectedResult = 2;
    expect(factor).to.eql(expectedResult);
  });
});
