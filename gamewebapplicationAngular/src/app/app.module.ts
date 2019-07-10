import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
