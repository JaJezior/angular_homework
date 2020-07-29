import { MessagesService } from './messages.service';

export interface CharacterProperties {
   msgService: MessagesService;
    name: string;
    maxAttackStat: number;
    defStat: number;
    hpStat: number;
    maxHp: number;
    specialAttackChance: number;
    isAsleep: boolean;
    imgLink: string;
    deathSoundLink: string;
    specialAttackSoundLink: string;
    Attack(oponent: CharacterProperties): void;
    SpecialAttack(target: CharacterProperties[]): void;
    PlaySound(soundLink: string): void;
 }

export abstract class Person implements CharacterProperties {
    public isAsleep;
    public hpStat;
    public specialAttackChance;
    constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number,
                public defStat: number, public maxHp: number, public imgLink: string, public deathSoundLink: string, public specialAttackSoundLink: string){
        this.hpStat = maxHp;

    }
    abstract SpecialAttack(target: Person[]): void;

    PlaySound(soundLink: string){
      const audio = new Audio();
      audio.src = soundLink;
      audio.load();
      audio.play();
    }

    async Attack(oponent: CharacterProperties): Promise<any> {
       let damage = Math.floor( Math.random() * this.maxAttackStat) + 1 - oponent.defStat;
       if (damage < 0)
       {
         damage = 0;
       }
       oponent.hpStat = oponent.hpStat - damage;
       if (oponent.hpStat < 0)
       {
          oponent.hpStat = 0;
       }
       await this.msgService.addLog(`${this.name} zaatakował ${oponent.name} za ${damage} pozozstało ${oponent.hpStat}hp `);
    }
 }
