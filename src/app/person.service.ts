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
    new Mage(this.messagesService, 'Janusz Korwin-Mikke', 8, 2, 18 , 'https://cdn.galleries.smcloud.net/t/galleries/gf-UTSe-GqZJ-Wv2s_janusz-korwin-mikke-664x442-nocrop.jpg', 'https://www.myinstants.com/media/sounds/daj-po-rowno.mp3', 'https://www.myinstants.com/media/sounds/czerwonym-smierc-2.mp3'),
    new Warrior(this.messagesService, 'Zbigniew Stonoga', 8, 2, 18 , 'https://www.wykop.pl/cdn/c3201142/comment_lOzPkShTT8LH4NQlNtlnVUA8bm2HxNyt.jpg', 'https://www.myinstants.com/media/sounds/szkoda-gadac.mp3', 'https://www.myinstants.com/media/sounds/dosc-kurwa-przebraa-sie-miarka.mp3' ),
    new Bard(this.messagesService, 'Adaś Miałczyński', 8, 2, 18, 'https://fwcdn.pl/webv/19/11/11911/snap2.11911.4.jpg', 'https://www.myinstants.com/media/sounds/pieknie-kurwa-pieknie.mp3', 'https://www.myinstants.com/media/sounds/czy-musza.mp3'),
    new Cleric(this.messagesService, 'o. Natanek', 8, 2, 18, 'https://d-art.ppstatic.pl/kadry/k/r/1/96/d8/55ca76507fb00_o_medium.jpg', 'https://www.myinstants.com/media/sounds/co_to_kurwa_jest.mp3' , 'https://www.myinstants.com/media/sounds/wiedz.mp3')
  ];
    monster = [new Smog(this.messagesService, 'President M. M. Kolonko', 7, 4, 233, 'https://cdn.donald.pl/filer_public_thumbnails/filer_public/46/30/463004b3-da2b-4e3a-aa0a-61d75f47cdd4/photo_2020-07-05_091207.jpeg__655x0_q85_crop_subsampling-2_width-655.jpg', 'https://www.myinstants.com/media/sounds/undertale-megalovania-mp3cut.mp3', 'https://www.myinstants.com/media/sounds/kolonko-ciul-z-it-2.mp3')];

 getHeroes(): Person[] {
   this.heroes = this.heroes;
   return this.heroes;
  }
 getMonster(): Person[]{
   return this.monster;
 }
}
