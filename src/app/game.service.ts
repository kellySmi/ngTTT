import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Square } from './square.model';
import { Winner } from './winner.model';
import { StaticDataSource } from "./static.datasource";
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map,switchMap } from'rxjs/operators';
//import { interval } from 'rxjs';
@Injectable()
export class GameService {
  private squares: Square[];
  private currPlayer: string;
  private playerMessage: BehaviorSubject<string> = new BehaviorSubject('First Player: X');
  private squareSubject: BehaviorSubject<Square[]>;
  //private winnersList: BehaviorSubject<Winner[]>;
  constructor(private dataSource: StaticDataSource, private http: HttpClient ) { 
    this.squares = new Array<Square>();
    this.dataSource.getData().forEach(s => this.squares.push(s));
    this.currPlayer = 'X'; // first player
    this.squareSubject = new BehaviorSubject(this.squares);
  }
  setTurn(square: Square ){
    square.val = this.currPlayer;
    if(!this.calculateWinner()){
      this.currPlayer = this.currPlayer == 'X' ? 'O' : 'X';
      this.playerMessage.next("Next player: "+ this.currPlayer);
    }else{
      this.playerMessage.next(this.currPlayer + " wins!");
    }
  }
  calculateWinner(): any{
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (this.squares[a].val && this.squares[a].val === this.squares[b].val && this.squares[a].val === this.squares[c].val) {
        return this.squares[a].val;
      }
    }
    return false;
  }
  getPlayerMessage(): BehaviorSubject<string> {
    return this.playerMessage;
  }
  getSquareVal(id: number){
    return this.squares[id-1].val;
  }
  getSquares(): BehaviorSubject<Square[]> {
    return this.squareSubject;
  }
  resetGame(){
    this.squares.map(s => s.val = '');
    this.playerMessage.next('First Player: X');
    
  }
  getWinnersList(): Observable<any[]>{
    return interval(5000).pipe(
      switchMap(() => this.http.get<any[]>('http://localhost:8080/api/ttt/getWinners')),
      map((r) => r)
    );
  }

  setWinner(){
    
  }
}
