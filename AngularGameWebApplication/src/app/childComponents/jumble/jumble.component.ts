import { Component, OnInit, Input } from '@angular/core';
import { levelSet } from '../../models/levelSet';
import {JumbleService } from '../../services/jumble.service';

@Component({
  selector: 'app-jumble',
  templateUrl: './jumble.component.html',
  styleUrls: ['./jumble.component.css']
})
export class JumbleComponent implements OnInit {

  @Input()levelset:levelSet;
  typed:string[]=[''];
  level:number;
  word:string;


  constructor(private jumbleService:JumbleService) {
  }

  ngOnInit() {
  }

  validate(){
    console.log(this.word + "hi");
    if(this.levelset.setOfWords.includes(this.word) && !this.typed.includes(this.word)){
      this.typed.push(this.word);
    }
    if(this.typed.length==this.levelset.setOfWords.length){
      alert("You Win! Picking Another Set...");
      this.typed=[''];
      this.getSetOfLevel();
    }
  }

  getSetOfLevel(){
    this.jumbleService.getSetOfLevel(this.level).subscribe(x=>{
      this.levelset=x;
    });
  }

}