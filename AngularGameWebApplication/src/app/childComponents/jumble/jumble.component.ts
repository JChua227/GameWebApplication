import { Component, OnInit, Input } from '@angular/core';
import { levelSet } from '../../models/levelSet';

@Component({
  selector: 'app-jumble',
  templateUrl: './jumble.component.html',
  styleUrls: ['./jumble.component.css']
})
export class JumbleComponent implements OnInit {

  @Input()levelset:levelSet;
  typed:string[];

  constructor() {
  }

  ngOnInit() {
  }

  validate(word:string){
    if(this.levelset.setOfWords.includes(word) && !this.typed.includes(word)){
      this.typed.push(word);
    }
  }


}
