import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';

@Component({
  selector: 'app-show-monster',
  templateUrl: './show-monster.component.html',
  styleUrls: ['./show-monster.component.css']
})
export class ShowMonsterComponent implements OnInit {

  @Input()
  monster: Person[];

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.monster = this.personService.monster;
  }

}
