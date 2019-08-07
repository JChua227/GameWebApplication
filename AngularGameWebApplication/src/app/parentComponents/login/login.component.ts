import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { UserForm } from '../../models/UserForm';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { Check } from '../../models/Check';
import { callbackify } from 'util';

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

  constructor(private loginService:LoginService) { 
    this.userForm = new UserForm();
  }

  ngOnInit() {
  }

  public createAccount(){

    this.userForm.username=this.username;
    this.userForm.name=this.name;
    this.userForm.password=this.password;
    this.userForm.reTypePassword=this.reTypePassword;

    this.loginService.createAccount(this.userForm).subscribe(x=>{this.check=x;});
  }

  public checkLogin(){

  }

}
