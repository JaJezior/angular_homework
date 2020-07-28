import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';

export class Cleric extends Person {
    specialAttackSound(){
        const audio = new Audio();
        audio.src = 'https://www.myinstants.com/media/sounds/wiedz.mp3';
        audio.load();
        audio.play();
      }
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {
        this.specialAttackSound();
        for (const hero of target)
        {
            const healigPower = 3;
            hero.hpStat += healigPower;
            if (hero.hpStat > hero.maxHp)
            {
                hero.hpStat = hero.maxHp;
            }
            await this.msgService.addLog(`Kapłan ${this.name} uleczył ${hero.name} i podniósł jego hp do ${hero.hpStat}.`);
        }
    }
    constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                public maxHp: number, public imgLink: string) {
super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
this.specialAttackChance = 2;
    }
  }
