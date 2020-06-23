export class Fraction {
  public numerator: number = 0;
  public denominator: number = 1;
  constructor(numerator, denominator = 1) {
    if (numerator < 0 && denominator < 0) {
      numerator = Math.abs(numerator);
      denominator = Math.abs(denominator);
    }
    const gcf = Fraction.gcf(numerator, denominator);
    this.numerator = numerator / gcf;
    this.denominator = denominator / gcf;
  }
  static gcf(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a == 0 || b == 0) return 1;
    if (a == b) return Math.abs(a);
    return a > b ? this.gcf(a - b, b) : this.gcf(b, a);
  }

  add(fraction: Fraction): any {
    return new Fraction(
      this.numerator * fraction.denominator +
        fraction.numerator * this.denominator,
      this.denominator * fraction.denominator
    );
  }
}
