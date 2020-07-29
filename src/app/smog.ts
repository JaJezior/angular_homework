import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Smog extends Person {
    
    async SpecialAttack(target: CharacterProperties[]): Promise<any>{
          await this.msgService.addLog('Prezydent mówi, jak jest!');
          this.PlaySound(this.specialAttackSoundLink);
          for (const hero of target)
          {
              await this.Attack(hero);
          }
      }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string,  public deathSoundLink: string, public specialAttackSoundLink: string) {
  super(msgService, name, maxAttackStat, defStat, maxHp, imgLink, deathSoundLink, specialAttackSoundLink);
  this.specialAttackChance = 4;
      }
    }
    