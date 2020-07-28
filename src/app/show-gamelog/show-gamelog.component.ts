import { Component, OnInit, Input } from '@angular/core';
import { CharacterProperties, Person } from '../Person';
import { PersonService } from '../person.service';
import { MessagesService} from '../messages.service';
import { Cleric } from '../cleric';


@Component({
  selector: 'app-show-gamelog',
  templateUrl: './show-gamelog.component.html',
  styleUrls: ['./show-gamelog.component.css']
})
export class ShowGamelogComponent implements OnInit {

  constructor(public msgService: MessagesService, public personService: PersonService) {

  }

  @Input()
  logDelay: number;
  @Input()
  logs: string[];
  
 gameStarted = false;




  ngOnInit(): void {
  }
 async gameStart(): Promise<any> {
  if (this.logs.length >= 5)
  {
    await this.msgService.resetLog();
  }

  var heroes = this.personService.getHeroes();
  var monster = this.personService.getMonster();
  this.resetCharactersStats(heroes, monster);
  this.msgService.addLog(`Nawiązano walkę z ${monster[0].name}`);
  this.game(heroes, monster);
  }
  private resetCharactersStats(heroes: Person[], monster: Person[]) {
    heroes.forEach(hero => {
      hero.hpStat = hero.maxHp;
    });
    monster[0].hpStat = monster[0].maxHp;
    monster[0].defStat = 4;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public async game(heroes: CharacterProperties[], monster: CharacterProperties[]) {
    while (true)
    {
       for (const hero of heroes)
       {
           const k = 10;
           const specialAttackDiceRoll = Math.floor(Math.random() * k + 1);
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
       if (monster[0].hpStat > 0 && !monster[0].isAsleep)
       {

          const k = 10;
          const specialAttackDiceRoll = Math.floor(Math.random() * k + 1);

          if (specialAttackDiceRoll > monster[0].specialAttackChance)
          {
            const targetId = Math.floor(Math.random() * heroes.length);
            const target = heroes[targetId];
            await monster[0].Attack(target);

            if (target.hpStat === 0)
            {
               await this.msgService.addLog(`${target.name} zginął marnie`);
               heroes = heroes.filter(function(hero){return hero !== target; } );
            }
          }
          else
          {
            await monster[0].SpecialAttack(heroes);
            for (const target of heroes)
            {
                if (target.hpStat === 0)
                {
                await this.msgService.addLog(`${target.name} zginął marnie`);
                heroes = heroes.filter(function(hero){return hero !== target; } );
                }
            }
          }

       }
       if (heroes.length === 0)
       {
          await this.msgService.addLog('Gra skończona, drużyna umarła. Cała.');
          await this.msgService.addLog(`${monster[0].name} - postaci pozostało ${monster[0].hpStat} hp`);
          this.gameStarted = false;
          return;
       }
       if (monster[0].hpStat <= 0)
       {
          await this.msgService.addLog('Gra skończona, SMOG został pokonany');

          for (const hero of heroes)
          {await this.msgService.addLog(`${hero.name} - postaci pozostało ${hero.hpStat} hp`);
          }
          this.gameStarted = false;
          return;
       }

       monster[0].isAsleep = false;
    }
 }
}
