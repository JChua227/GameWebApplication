import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularGameWebApplication';

  constructor(private httpClient:HttpClient){
    this.httpClient.get("http://localhost:8080/level/1").toPromise()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  }
  ngOnInit(){
    console.log("hello");
  }
}