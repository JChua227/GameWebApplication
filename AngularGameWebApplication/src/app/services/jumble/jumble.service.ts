import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { levelSet } from '../../models/levelSet';

@Injectable({
  providedIn: 'root'
})
export class JumbleService {

  url:string='http://localhost:8080/level/';

  constructor(private httpClient:HttpClient) { }

  getSetOfLevel(level:number):Observable<levelSet>{
    return this.httpClient.get<levelSet>(this.url + level);
  }
}
