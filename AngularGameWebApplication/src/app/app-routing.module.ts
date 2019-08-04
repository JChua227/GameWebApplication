import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentJumbleComponent } from './parentComponents/parent-jumble/parent-jumble.component';
import { TicTacToeComponent } from './parentComponents/tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './parentComponents/home/home.component';
import { AboutComponent } from './parentComponents/about/about.component';
import { LoginComponent } from './parentComponents/login/login.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'about',component:AboutComponent},
  {path: '',component:HomeComponent},
  {path: 'jumble',component:ParentJumbleComponent},
  {path: 'tictactoe',component:TicTacToeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }