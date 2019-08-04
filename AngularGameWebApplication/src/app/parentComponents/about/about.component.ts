import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string='About';

  constructor() { }

  ngOnInit() {
  }

}
