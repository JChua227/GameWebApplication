import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../../models/UserForm'; 
import { Observable } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  addUrl:string='http://localhost:8080/account/add';

  constructor(private httpClient:HttpClient) { }

  public createAccount(userForm:UserForm):Observable<boolean>{
    return this.httpClient.put<boolean>(this.addUrl,userForm,httpHeader);
  }
}
