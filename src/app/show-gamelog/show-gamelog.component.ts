import { Component, OnInit, Input } from '@angular/core';
import { CharacterProperties, Person } from '../Person';
import { Cleric, PersonService } from '../person.service';
import { MessagesService} from '../messages.service';

@Component({
  selector: 'app-show-gamelog',
  templateUrl: './show-gamelog.component.html',
  styleUrls: ['./show-gamelog.component.css']
})
export class ShowGamelogComponent implements OnInit {


@Input()
logs: string[]

  constructor(public msgService: MessagesService, public personService: PersonService) { 
    
  }

  ngOnInit(): void {

  }
  gameStarted: boolean = false;
  async gameStart(){
    var heroes = this.personService.heroes;
    var monster = this.personService.monster;
    await this.msgService.addLog(`Nawiązano walkę z ${monster[0].name}`);
    this.gameStarted = false;
    this.game(heroes, monster);

  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public async game(heroes: CharacterProperties[], monster: CharacterProperties[]) {
    while(true)
    {
       for (let hero of heroes)
       {
           let k = 10;
           let specialAttackDiceRoll = Math.floor(Math.random() * k + 1);
           if (specialAttackDiceRoll > hero.specialAttackChance)
           {
                 await hero.Attack(monster[0]);
           }
           
           else
           {
                if (hero instanceof Cleric) { await hero.SpecialAttack(heroes); }
                
                else { await hero.SpecialAttack([monster[0]]); }
           }
       }
       if(monster[0].hpStat > 0 && !monster[0].isAsleep)
       {

          let k = 10;
          let specialAttackDiceRoll = Math.floor(Math.random() * k + 1);

          if (specialAttackDiceRoll > monster[0].specialAttackChance)
          {
            let targetId = Math.floor(Math.random() * heroes.length);
            let target = heroes[targetId];
            await monster[0].Attack(target);
  
            if (target.hpStat === 0)
            {
               await this.msgService.addLog(`${target.name} zginął marnie`);
               heroes = heroes.filter(function(hero){return hero !== target; } )
            }
          }
          else 
          {
            await monster[0].SpecialAttack(heroes)
            for (let target of heroes)
            {
                if (target.hpStat === 0)
                {
                await this.msgService.addLog(`${target.name} zginął marnie`);
                heroes = heroes.filter(function(hero){return hero !== target; } );
                }
            }
          }
          
       }
       if(heroes.length === 0)
       {
          await this.msgService.addLog('Gra skończona, drużyna umarła. Cała.');
          await this.msgService.addLog(`${monster[0].name} - postaci pozostało ${monster[0].hpStat} hp`);
          return;
       }
       if(monster[0].hpStat <= 0)
       {
          await this.msgService.addLog('Gra skończona, SMOG został pokonany');

          for (let hero of heroes)
          {await this.msgService.addLog(`${hero.name} - postaci pozostało ${hero.hpStat} hp`);
          }
          return;
       }

       monster[0].isAsleep = false;
    }
 }
}
