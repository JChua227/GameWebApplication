import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../../models/UserForm'; 
import { Observable } from 'rxjs';
import { Check } from '../../models/Check';

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

  constructor(private httpClient:HttpClient) { }
  
  public createAccount(userForm:UserForm):Observable<Check>{
    
    return this.httpClient.get<Check>(this.url + '/add');
  }

}
