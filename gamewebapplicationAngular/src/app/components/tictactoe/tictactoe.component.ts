import { Component, OnInit } from '@angular/core';
import { thingsILike } from '../../models/thingsILike';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  name:string = "jared";
  age:number = 21;
  list:thingsILike[];
  
  constructor() { }

  ngOnInit() {
    this.list = [
      {
        activity: "surf",
        length: 1,
        rating: 4
      },
      {
        activity: "chill with friends",
        length: 120,
        rating: 10
      },
      {
        activity: "eat",
        length: 60,
        rating: 8
      }
    ]
  }

}
