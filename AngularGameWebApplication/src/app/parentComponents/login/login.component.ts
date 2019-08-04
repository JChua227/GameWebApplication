import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { UserForm } from 'src/app/models/UserForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:UserForm;
  usernameExist:string;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  public createAccount(){
    if(this.loginService.createAccount(this.userForm)){
      this.usernameExist='Sorry, this username already exists.';
    }
  }
}
