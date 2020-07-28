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
    new Mage(this.messagesService, 'inż. Jerzy Zięba', 8, 2, 18 , 'https://ocdn.eu/images/pulscms/NjU7MDA_/35d314bdf398fac14380e92d06d273eb.png'),
    new Warrior(this.messagesService, 'Zbigniew Stonoga', 8, 2, 18 , 'https://www.wykop.pl/cdn/c3201142/comment_lOzPkShTT8LH4NQlNtlnVUA8bm2HxNyt.jpg'),
    new Bard(this.messagesService, 'Michał Szpak', 8, 2, 18, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLu1qI3cKGUGbhFtPQr5denPVMsHPofiDrCQ&usqp=CAU'),
    new Cleric(this.messagesService, 'o. Mateusz', 8, 2, 18, 'https://i.iplsc.com/artur-zmijewski-w-serialu-ojciec-mateusz/00083SDTSTQBAHMN-C122-F4.jpg')
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
