import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string='Home';

  constructor() { }

  ngOnInit() {
  }

}
