import { Injectable } from '@angular/core';
import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';






class Bard extends Person {
  async SpecialAttack(target: CharacterProperties[]): Promise<any> {
        target[0].isAsleep = true;
        await this.msgService.addLog(`Bard ${this.name} uśpił swą niezwykle nieurodziwą pieśnią ${target[0].name}.`);
    }
    constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                public maxHp: number, public imgLink: string) {
      super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
      this.specialAttackChance = 3;
    }
  }
export class Cleric extends Person {
    async SpecialAttack(target: CharacterProperties[]): Promise<any> {
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
class Mage extends Person {
  async SpecialAttack(target: CharacterProperties[]): Promise<any> {
        const mageDefDebuffPower = 1;
        target[0].defStat -= mageDefDebuffPower;
        if (target[0].defStat <= 0)
            {
                target[0].defStat = 0;
            }
        await this.msgService.addLog(`Szaman ${this.name} obłupał łuski ${target[0].name} i obniżył jego zdolność obrony do ${target[0].defStat}.`);
    }
    constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                public maxHp: number, public imgLink: string) {
super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
this.specialAttackChance = 1;
    }
  }
class Warrior extends Person {
  getEasterEgg(){
    let audio = new Audio();
    audio.src='https://www.myinstants.com/media/sounds/szkoda-gadac.mp3';
    audio.load();
    audio.play();
  }
  async SpecialAttack(target: CharacterProperties[]): Promise<any> {
        await this.msgService.addLog(`Wojownik ${this.name} stosuje tajne sztuki Muminków-Ninja i atakuje ${target[0].name} dwukrotnie!`);
        this.getEasterEgg();
        await this.Attack(target[0]);
        await this.Attack(target[0]);
        }
    constructor(public msgService: MessagesService, public name: string, public maxAttackStat: number, public defStat: number,
                public maxHp: number, public imgLink: string) {
super(msgService, name, maxAttackStat, defStat, maxHp, imgLink);
this.specialAttackChance = 5;
    }
  }
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

@Injectable({
    providedIn: 'root'
  })
export class PersonService {
  constructor(public messagesService: MessagesService) {     }
  heroes = [
    new Mage(this.messagesService, 'inż. Jerzy Zięba', 8, 2, 18 , 'https://ocdn.eu/images/pulscms/NjU7MDA_/35d314bdf398fac14380e92d06d273eb.png'),
    new Warrior(this.messagesService, 'Zbigniew Stonoga', 8, 2, 18 , 'https://www.wykop.pl/cdn/c3201142/comment_lOzPkShTT8LH4NQlNtlnVUA8bm2HxNyt.jpg'),
    new Bard(this.messagesService, 'Michał Szpak', 8, 2, 18, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLu1qI3cKGUGbhFtPQr5denPVMsHPofiDrCQ&usqp=CAU'),
    new Cleric(this.messagesService, 'o. Mateusz', 8, 2, 18, 'https://i.iplsc.com/artur-zmijewski-w-serialu-ojciec-mateusz/00083SDTSTQBAHMN-C122-F4.jpg')
  ];
    monster = [new Smog(this.messagesService, 'SMOOOG KRAKOWSKI', 7, 4, 233, 'https://malopolskatogo.pl/content/uploads/2018/07/smok-1920x2560.jpg')];

 getHeroes(): Person[] {
    return this.heroes;
  }
 getMonster(): Person[]{
   return this.monster;
 }
}
