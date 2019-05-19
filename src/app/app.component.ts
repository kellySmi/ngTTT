import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameService } from './game.service';
import { Square } from './square.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTTT';
  playerMessage: string;
  pmSubject: BehaviorSubject<string>;
  sqSubject: BehaviorSubject<Square[]>;
  constructor(private gameService: GameService){
    this.pmSubject = this.gameService.getPlayerMessage();
    this.pmSubject.subscribe(b => this.playerMessage = b);
    
   }
  getSquares(): Square[] {
    let rtnSquares: Array<Square>;
    this.sqSubject = this.gameService.getSquares();
    this.sqSubject.subscribe(s => rtnSquares = s);
    return rtnSquares;
  }
  resetGame(){
    //reset game
    this.gameService.resetGame();
    location.reload();
  }
}