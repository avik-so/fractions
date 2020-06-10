export class Formatter {
  static itOrOne(oneLessBottle: number) {
    return oneLessBottle == 0 ? 'it' : 'one';
  }
  static toUpperCase(string: string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }
  static bottles(bottles: number): string {
    const formattedBottles = bottles == 0 ? 'no more' : bottles;
    return `${formattedBottles} ${this.pluralize(bottles)}`;
  }
  private static pluralize(bottles: number): string {
    return bottles == 1 ? 'bottle' : 'bottles';
  }
}
