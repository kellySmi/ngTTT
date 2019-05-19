import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  winnersList$: Observable<any[]>;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    // interval(2000)
    // //.timeInterval()
    // .flatMap(() => this.gameService.getWinnersList())
    // .subscribe(data => {
    //   this.winnersList = data;
    // });
    this.winnersList$ = this.gameService.getWinnersList();
    //const numbers = interval(1000);
    //const takeFourNumbers = numbers.pipe(take(4));
    //takeFourNumbers.subscribe(x => console.log('Next: ', x));
  }

}
