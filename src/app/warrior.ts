import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Warrior extends Person {
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {

      this.PlaySound(this.specialAttackSoundLink);
      await this.msgService.addLog(`Wojownik ${this.name} stosuje tajne sztuki Muminków-Ninja i atakuje ${target[0].name} dwukrotnie!`);
      await this.Attack(target[0]);
      await this.Attack(target[0]);
          }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string, public deathSoundLink: string, public specialAttackSoundLink: string) {
  super(msgService, name, maxAttackStat, defStat, maxHp, imgLink, deathSoundLink, specialAttackSoundLink);
  this.specialAttackChance = 5;
      }
    }


