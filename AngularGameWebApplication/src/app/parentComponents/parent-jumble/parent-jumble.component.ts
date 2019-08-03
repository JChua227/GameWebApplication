import { Component, OnInit } from '@angular/core';
import { JumbleComponent } from '../../childComponents/jumble/jumble.component';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { levelSet } from '../../models/levelSet';
import { JumbleService } from '../../services/jumble.service';

@Component({
  selector: 'app-parent-jumble',
  templateUrl: './parent-jumble.component.html',
  styleUrls: ['./parent-jumble.component.css']
})
export class ParentJumbleComponent implements OnInit {

  levelset:levelSet;

  constructor(private jumbleService:JumbleService) { }

  ngOnInit() {
    this.getSetOfLevel(5);
  }


  getSetOfLevel(level:number){
    this.jumbleService.getSetOfLevel(level).subscribe(x=>{
      this.levelset=x;
    });
  }
}
