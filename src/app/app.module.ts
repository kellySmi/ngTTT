import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesquareComponent } from './gamesquare/gamesquare.component';
import { StaticDataSource } from "./static.datasource";
import { GameService } from './game.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesquareComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StaticDataSource, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
