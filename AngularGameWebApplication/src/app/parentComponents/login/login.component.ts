import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { UserForm } from '../../models/UserForm';
import { NavbarComponent } from '../../childComponents/navbar/navbar.component';
import { Password } from '../../models/Password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title:string='Login/Register';
  private userForm:UserForm;
  private validatePassword:Password;

  private username:string;
  private name:string;
  private password:string;
  private reTypePassword:string;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  public createAccount(){
    this.validatePassword.password=this.password;
    this.validatePassword.reTypePassword=this.reTypePassword;

    if(!this.loginService.validate(this.validatePassword)){
      alert('Your passwords are not the same, please fix it...');
      return;
    }

    this.userForm.username=this.username;
    this.userForm.name=this.name;
    this.userForm.password=this.password;
    this.userForm.reTypePassword=this.reTypePassword;

    if(!this.loginService.createAccount(this.userForm)){
      alert('Sorry, this username already exists...');
    }
  }

  public checkLogin(){

  }

}
