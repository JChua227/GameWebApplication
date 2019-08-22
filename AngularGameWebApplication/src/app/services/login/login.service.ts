import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserForm } from '../../models/UserForm'; 
import { Observable } from 'rxjs';
import { Check } from '../../models/Check';
import { Login } from '../../models/Login';
import { Username } from '../../models/Username';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string='http://localhost:8080/account';
  temp:any;
  cntrl=this;

  constructor(private httpClient:HttpClient) { }

  public createAccount(userForm:UserForm):Observable<Check>{
    return this.httpClient.get<Check>(this.url + '/createaccount/' + userForm.toArray());
  }

  public login(login:Login):Observable<boolean>{
    return this.httpClient.get<boolean>(this.url + '/login/' + login.toArray());
  }

  public getAccountSession():Observable<string>{
    return this.httpClient.get<string>(this.url + '/getusername');
  }

}