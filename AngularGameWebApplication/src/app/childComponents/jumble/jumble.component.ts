import { Component, OnInit } from '@angular/core';
import { JumbleService } from '../../services/jumble.service';
import { levelSet } from '../../models/levelSet';

@Component({
  selector: 'app-jumble',
  templateUrl: './jumble.component.html',
  styleUrls: ['./jumble.component.css']
})
export class JumbleComponent implements OnInit {

  levelset:levelSet;

  constructor(private jumbleService:JumbleService) { }

  ngOnInit() {
    this.getSetOfLevel();
  }

  getSetOfLevel(){
    this.jumbleService.getSetOfLevel(1).subscribe(x=>{
       this.levelset=x;
    });
  }

}
