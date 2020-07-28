import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Mage extends Person {
    specialAttackSound(){
        const audio = new Audio();
        audio.src = 'https://www.myinstants.com/media/sounds/czerwonym-smierc-2.mp3';
        audio.load();
        audio.play();
      }
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {
          const mageDefDebuffPower = 1;
          target[0].defStat -= mageDefDebuffPower;
          if (target[0].defStat <= 0)
              {
                  target[0].defStat = 0;
              }
          this.specialAttackSound();
          await this.msgService.addLog(`Szaman ${this.name} obłupał łuski ${target[0].name} i obniżył jego zdolność obrony do ${target[0].defStat}.`);
      }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string) {
  super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
  this.specialAttackChance = 1;
      }
    }