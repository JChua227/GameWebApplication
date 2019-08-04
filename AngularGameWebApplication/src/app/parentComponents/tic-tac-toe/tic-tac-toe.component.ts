import { Component, OnInit, Input } from '@angular/core';
import { TictactoeComponent } from '../../childComponents/tictactoe/tictactoe.component';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  title:string='Tic-Tac-Toe';

  constructor() { }

  ngOnInit() {
  }

}
