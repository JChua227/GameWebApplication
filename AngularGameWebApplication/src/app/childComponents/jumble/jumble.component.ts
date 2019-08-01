import { Component, OnInit } from '@angular/core';
import { JumbleService } from '../../services/jumble.service';

@Component({
  selector: 'app-jumble',
  templateUrl: './jumble.component.html',
  styleUrls: ['./jumble.component.css']
})
export class JumbleComponent implements OnInit {

  listOfChildWords:string[];

  constructor(private jumbleService:JumbleService) { }

  ngOnInit() {
  }

  getSetOfLevel(){
    this.jumbleService.getSetOfLevel().subscribe(x=>{this.listOfChildWords=x});
  }

}
