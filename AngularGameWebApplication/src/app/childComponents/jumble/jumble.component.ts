import { Component, OnInit, Input } from '@angular/core';
import { levelSet } from '../../models/levelSet';
import {JumbleService } from '../../services/jumble/jumble.service';

@Component({
  selector: 'app-jumble',
  templateUrl: './jumble.component.html',
  styleUrls: ['./jumble.component.css']
})
export class JumbleComponent implements OnInit {

  levelset:levelSet;
  typed:string[]=[''];
  level:number;
  word:string;


  constructor(private jumbleService:JumbleService) {
  }

  ngOnInit() {
  }

  validate(){
    if(this.levelset.setOfWords.includes(this.word) && !this.typed.includes(this.word)){
      this.typed.push(this.word);
    }
    if(this.typed.length==this.levelset.setOfWords.length){
      alert("You Win! Picking Another Set...");
      this.typed=[''];
      this.getSetOfLevel();
    }
    this.word='';
  }

  getSetOfLevel(){
    this.word='';
    this.typed=[''];
    this.jumbleService.getSetOfLevel(this.level).subscribe(x=>{
      this.levelset=x;
    });
  }

}
