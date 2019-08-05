import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../../models/UserForm'; 
import { Observable } from 'rxjs';
import { Password } from '../../models/Password';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string='http://localhost:8080/account/';

  constructor(private httpClient:HttpClient) { }

  public createAccount(userForm:UserForm):Observable<boolean>{
    return this.httpClient.put<boolean>(this.url + 'add',userForm,httpHeader);
  }

  public validate(validatePassword:Password):Observable<boolean>{
    return this.httpClient.put<boolean>(this.url+'validate',validatePassword);
  }

}
