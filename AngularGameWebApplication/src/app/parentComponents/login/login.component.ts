import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { UserForm } from '../../models/UserForm';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { Check } from '../../models/Check';
import { callbackify } from 'util';
import { Login } from '../../models/Login';
import { Username } from '../../models/Username';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title:string='Login/Register';

  private userForm:UserForm;
  private username:string;
  private name:string;
  private password:string;
  private reTypePassword:string;

  private check:Check;
  private checkLoginStatus:boolean;

  private login:Login;
  private loginUsername:string;
  private loginPassword:string;

  private usename:string;

  constructor(private loginService:LoginService) { 
    this.userForm = new UserForm();
    this.login = new Login();
  }

  ngOnInit() {
  }

  public createAccount(){

    this.userForm.username=this.username;
    this.userForm.name=this.name;
    this.userForm.password=this.password;
    this.userForm.reTypePassword=this.reTypePassword;

    this.loginService.createAccount(this.userForm).subscribe(x=>this.check=x);
  }

  public checkLogin(){
    this.login.username = this.loginUsername;
    this.login.password = this.loginPassword;
    this.loginService.login(this.login).subscribe(x=>this.checkLoginStatus=x);
    
    this.loginService.getAccountSession().subscribe(x=>this.usename=x);
  }

}
