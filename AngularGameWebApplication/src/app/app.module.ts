import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeComponent } from './childComponents/tictactoe/tictactoe.component';
import { NavbarComponent } from './childComponents/navbar/navbar.component';
import { JumbleComponent } from './childComponents/jumble/jumble.component';
import { HttpClientModule } from '@angular/common/http';
import { TicTacToeComponent } from './parentComponents/tic-tac-toe/tic-tac-toe.component';
import { ParentJumbleComponent } from './parentComponents/parent-jumble/parent-jumble.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    NavbarComponent,
    JumbleComponent,
    TicTacToeComponent,
    ParentJumbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
