import { Injectable } from '@angular/core';
import { Person, CharacterProperties } from './Person';
import { MessagesService } from './messages.service';
import { Smog } from './smog';
import { Bard } from './bard';
import { Cleric } from './cleric';
import { Warrior } from './warrior';
import { Mage } from './mage';

@Injectable({
    providedIn: 'root'
  })
export class PersonService {
  constructor(public messagesService: MessagesService) {     }
  heroes = [
    new Mage(this.messagesService, 'Janusz Korwin-Mikke', 8, 2, 18 , 'https://cdn.galleries.smcloud.net/t/galleries/gf-UTSe-GqZJ-Wv2s_janusz-korwin-mikke-664x442-nocrop.jpg'),
    new Warrior(this.messagesService, 'Zbigniew Stonoga', 8, 2, 18 , 'https://www.wykop.pl/cdn/c3201142/comment_lOzPkShTT8LH4NQlNtlnVUA8bm2HxNyt.jpg'),
    new Bard(this.messagesService, 'Adaś Miałczyński', 8, 2, 18, 'https://fwcdn.pl/webv/19/11/11911/snap2.11911.4.jpg'),
    new Cleric(this.messagesService, 'o. Natanek', 8, 2, 18, 'https://d-art.ppstatic.pl/kadry/k/r/1/96/d8/55ca76507fb00_o_medium.jpg')
  ];
    monster = [new Smog(this.messagesService, 'SMOOOG KRAKOWSKI', 7, 4, 233, 'https://malopolskatogo.pl/content/uploads/2018/07/smok-1920x2560.jpg')];

 getHeroes(): Person[] {
   this.heroes = this.heroes;
   return this.heroes;
  }
 getMonster(): Person[]{
   return this.monster;
 }
}
