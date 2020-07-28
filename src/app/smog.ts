import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Smog extends Person {
    specialAttackSound(){
        const audio = new Audio();
        audio.src = 'https://www.myinstants.com/media/sounds/kolonko-ciul-z-it-2.mp3';
        audio.load();
        audio.play();
      }
    async SpecialAttack(target: CharacterProperties[]): Promise<any>{
        this.specialAttackSound();
          await this.msgService.addLog('SMOG ZIEJE PM10 i CO2!');
          for (const hero of target)
          {
              await this.Attack(hero);
          }
      }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string) {
  super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
  this.specialAttackChance = 4;
      }
    }
    