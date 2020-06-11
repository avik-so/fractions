import { Bottles } from './bottles';
export class BottleNumber {
  private iteration: number = -1;
  constructor(iteration: number) {
    this.iteration = iteration;
  }
  public container(): string {
    return 'bottles';
  }
  public action(): string {
    return 'Take one down and pass it around';
  }
  public successor(): BottleNumber {
    return BottleNumber.getBottleNumber(this.iteration - 1);
  }
  public quantity(): string {
    return this.iteration.toString();
  }

  public static getBottleNumber(verse: number): BottleNumber {
    const bottleMap = {
      0: new ZeroBottles(),
      1: new OneBottle(),
      6: new SixBottles(),
    };
    return bottleMap.hasOwnProperty(verse)
      ? bottleMap[verse]
      : new BottleNumber(verse);
  }
  public toString(): string {
    return (
      `${this.capitalize(`${this.numOfContainer()} of beer on the wall, `)}` +
      `${this.numOfContainer()} of beer.\n` +
      `${this.action()}, ` +
      `${this.successor().numOfContainer()} of beer on the wall.\n`
    );
  }

  private capitalize(phrase: string): string {
    return `${phrase[0].toUpperCase()}${phrase.slice(1)}`;
  }
  private numOfContainer() {
    return `${this.quantity()} ${this.container()}`;
  }
}

class ZeroBottles extends BottleNumber {
  constructor() {
    super(0);
  }
  public action(): string {
    return 'Go to the store and buy some more';
  }

  public successor(): BottleNumber {
    return new BottleNumber(99);
  }
  public quantity(): string {
    return 'no more';
  }
}

class OneBottle extends BottleNumber {
  constructor() {
    super(1);
  }
  public action(): string {
    return 'Take it down and pass it around';
  }
  bottle;
  public container(): string {
    return 'bottle';
  }
}

class SixBottles extends BottleNumber {
  constructor() {
    super(6);
  }
  public quantity(): string {
    return '1';
  }

  public container(): string {
    return 'six-pack';
  }
}
