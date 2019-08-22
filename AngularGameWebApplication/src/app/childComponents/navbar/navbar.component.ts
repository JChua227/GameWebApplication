import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Username } from '../../models/Username';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()title:string;
  private username:string;

  constructor(private loginService:LoginService) {
  }

  ngOnInit() {
    this.loginService.getAccountSession().subscribe(x=>this.username=x);
  }




}
