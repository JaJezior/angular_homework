import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowGameComponent} from './show-game/show-game.component';
import {ShowHeroesComponent} from './show-heroes/show-heroes.component'
import { from } from 'rxjs';
import { ShowHeroComponent } from './show-hero/show-hero.component';


const routes: Routes = [
  { path: '', redirectTo: '/showgame', pathMatch: 'full' },
  { path: 'showgame', component: ShowGameComponent },
  { path: 'showheroes', component: ShowHeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
