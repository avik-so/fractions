export class Composer {
  public static compose(bottles: number): string {
    return `${this.capitalize(
      this.drinks(bottles)
    )} of beer on the wall, ${this.drinks(bottles)} of beer.
${this.action(bottles)}, ${this.drinks(
      this.nextAmount(bottles)
    )} of beer on the wall.`;
  }
  static drinks(n: number): string {
    switch (n) {
      case 1:
        return `1 bottle`;
      case 0:
        return 'no more bottles';
      case 6:
        return '1 six-pack';
      default:
        return `${n} bottles`;
    }
  }
  static capitalize(phrase: string): string {
    return `${phrase[0].toUpperCase()}${phrase.slice(1)}`;
  }

  static nextAmount(bottles: number): number {
    if (bottles == 0) return 99;
    return bottles - 1;
  }
  static action(n: number = 0): string {
    switch (n) {
      case 1:
        return 'Take it down and pass it around';
      case 0:
        return 'Go to the store and buy some more';
      default:
        return 'Take one down and pass it around';
    }
  }
}
