import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../person.service';
// import {MatProgressBarModule} from '@angular/material'
@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
  styleUrls: ['./show-hero.component.css']
})
export class ShowHeroComponent implements OnInit {

  @Input()
  hero: Person;

  // hpBar = 100 * (this.hero.hpStat / this.hero.maxHp);

  constructor() {   }


  ngOnInit(): void {
  }

}
