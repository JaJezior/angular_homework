import { Component } from '@angular/core';
import { Person } from './Person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework';
  heroes: Person[];
  // constructor(personService: PersonService) {
  //   this.heroes = personService.getHeroes();
  // }
}
