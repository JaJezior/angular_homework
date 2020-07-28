import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Smog extends Person {
    async SpecialAttack(target: CharacterProperties[]): Promise<any>{
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