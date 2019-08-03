import { Component, OnInit } from '@angular/core';
import { JumbleComponent } from '../../childComponents/jumble/jumble.component';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { levelSet } from '../../models/levelSet';

@Component({
  selector: 'app-parent-jumble',
  templateUrl: './parent-jumble.component.html',
  styleUrls: ['./parent-jumble.component.css']
})
export class ParentJumbleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
