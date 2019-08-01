import { Component, OnInit } from '@angular/core';
import { TictactoeComponent } from '../../childComponents/tictactoe/tictactoe.component';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
