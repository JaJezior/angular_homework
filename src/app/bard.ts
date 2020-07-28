import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Bard extends Person {
    specialAttackSound(){
        const audio = new Audio();
        audio.src = 'https://www.myinstants.com/media/sounds/czy-musza.mp3';
        audio.load();
        audio.play();
      }
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {
          target[0].isAsleep = true;
          this.specialAttackSound();
          await this.msgService.addLog(`Bard ${this.name} uśpił swą niezwykle nieurodziwą pieśnią ${target[0].name}.`);
      }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string) {
        super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
        this.specialAttackChance = 3;
      }
    }