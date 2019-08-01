import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentJumbleComponent } from './parentComponents/parent-jumble/parent-jumble.component';
import { TicTacToeComponent } from './parentComponents/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {path: 'jumble',component:ParentJumbleComponent},
  {path: 'tictactoe',component:TicTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }