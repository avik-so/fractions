import { Formatter } from './formatter';
export class Composer {
  public static compose(bottles: number): string {
    return this.firstHalf(bottles) + '\n' + this.secondHalf(bottles - 1);
  }

  private static firstHalf(bottles: number): string {
    return `${Formatter.toUpperCase(
      Formatter.bottles(bottles)
    )} of beer on the wall, ${Formatter.bottles(bottles)} of beer.`;
  }

  private static secondHalf(oneLessBottle: number): string {
    if (oneLessBottle == -1) {
      return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
    return `Take ${Formatter.itOrOne(
      oneLessBottle
    )} down and pass it around, ${Formatter.bottles(
      oneLessBottle
    )} of beer on the wall.`;
  }
}
