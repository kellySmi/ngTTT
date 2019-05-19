import { Component, OnInit, Input } from '@angular/core';
import { Square } from '../square.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamesquare',
  templateUrl: './gamesquare.component.html',
  styleUrls: ['./gamesquare.component.css']
})
export class GamesquareComponent implements OnInit {
  @Input() square: Square;
  displayVal: string = "---";
  constructor(private gameService: GameService) {}

  ngOnInit() {}

  markSquare(id: number){
    this.gameService.setTurn(this.square);
    this.displayVal = this.gameService.getSquareVal(id);
  }
}
