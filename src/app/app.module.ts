import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeroesComponent } from './show-heroes/show-heroes.component';
import { ShowMonsterComponent } from './show-monster/show-monster.component';
import { ShowGamelogComponent } from './show-gamelog/show-gamelog.component';
import { ShowGameComponent } from './show-game/show-game.component';
import { ShowHeroComponent } from './show-hero/show-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHeroesComponent,
    ShowMonsterComponent,
    ShowGamelogComponent,
    ShowGameComponent,
    ShowHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
