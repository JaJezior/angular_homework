import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Person';
import { PersonService} from '../person.service';


@Component({
  selector: 'app-show-heroes',
  templateUrl: './show-heroes.component.html',
  styleUrls: ['./show-heroes.component.css']
})
export class ShowHeroesComponent implements OnInit {

  @Input()
  heroes: Person[];


  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.heroes = this.personService.heroes;
  }

}
