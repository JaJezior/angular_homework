import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Warrior extends Person {
    specialAttackSound(){
      const audio = new Audio();
      audio.src = 'https://www.myinstants.com/media/sounds/dosc-kurwa-przebraa-sie-miarka.mp3';
      audio.load();
      audio.play();

    }
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {
        this.specialAttackSound();
        await this.msgService.addLog(`Wojownik ${this.name} stosuje tajne sztuki Muminków-Ninja i atakuje ${target[0].name} dwukrotnie!`);
        await this.Attack(target[0]);
        await this.Attack(target[0]);
          }
      constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                  public maxHp: number, public imgLink: string) {
  super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
  this.specialAttackChance = 5;
      }
    }


