import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JumbleService {

  url:string='localhost:8080';

  constructor(private httpClient:HttpClient) { }

  getSetOfLevel():Observable<string[]>{
    return this.httpClient.get<string[]>(this.url);
  }
}
