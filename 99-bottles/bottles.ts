import { Composer } from './composer';

export class Bottles {
  static verses(from: number, to: number): any {
    return this.composeVerses(from, to, 'VERSES');
  }

  static song(): any {
    return this.composeVerses(99, 0, 'SONG');
  }

  static verse(bottles: number): any {
    return this.composeVerses(bottles, bottles, 'VERSE');
  }

  private static composeVerses(from: number, to: number, type: string) {
    let verse = `<<-${type}\n`;
    for (let i = from; i >= to; i--) {
      verse += Composer.compose(i) + '\n';
    }
    verse += type;
    return verse;
  }
}
