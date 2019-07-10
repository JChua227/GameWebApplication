import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  
  private grid:number[][];
  private playercounter:number;
  private player1score:number=0;
  private player2score:number=0;

  constructor() {
    this.resetboard();
  }

  ngOnInit() {
    
  }


  resetboard():void{
    this.playercounter=-1;
    if(this.player1score+this.player2score>0){
        for(let x=0; x<3; x++){
            for(let y=0; y<3; y++){
                if(this.grid[x][y]!=0){
                    document.getElementById(x + " " + y).innerHTML="";
                }
            }
        }
    }
    this.grid=[[0,0,0],[0,0,0],[0,0,0]];
  }


  //player input
 input(x,y):void{
  this.playercounter++;

  //disable not working...this fixes it a little
  //stops player from marking that spot
  //then gives player another turn until they hit a valid spot
  if(this.grid[x][y]!=0){
      this.playercounter--;
      return;
  }

  //player move
  if(this.playercounter%2==0){
      this.grid[x][y]=1;
      document.getElementById(x + " " + y).innerHTML="X";
      setTimeout(function(){
          if(this.check(1)){
              alert("Player 1 wins!");
              this.player1score++;
              document.getElementById("player1score").innerHTML="Player 1: " + this.player1score;
              this.resetboard();
          }
      }, 15);

  }
  else{
      this.grid[x][y]=2;
      document.getElementById(x + " " + y).innerHTML="O";
      setTimeout(function(){
          if(this.check(2)){
              alert("Player 2 wins!");
              this.player2score++;
              document.getElementById("player2score").innerHTML="Player 2: " + this.player2score;
              this.resetboard();
          }
      }, 15);
  }

  //check for tie
  setTimeout(function(){
      if(this.checktie()){
          alert("Its a tie!");
          this.player1score += .5;
          this.player2score += .5;
          document.getElementById("player1score").innerHTML="Player 1: " + this.player1score;
          document.getElementById("player2score").innerHTML="Player 2: " + this.player2score;
          this.resetboard();
      }
  }, 15);
}

//checks for win condition
 check(playervalue):boolean{
  for(let x=0; x<3; x++){
      let counter=0;
      for(let y=0; y<3; y++){
          if(this.grid[x][y]==playervalue){
              counter++;
          }
      }
      if(counter==3){
          return true;
      }
      else{
          counter=0;
      }

      for(let y=0; y<3; y++){
          if(this.grid[y][x]==playervalue){
              counter++;
          }
      }
      if(counter==3){
          return true;
      }
      else{
          counter=0;
      }
  }

  if(this.grid[0][0]==playervalue && this.grid[1][1]==playervalue && this.grid[2][2]==playervalue){
      return true;
  }
  if(this.grid[2][0]==playervalue && this.grid[1][1]==playervalue && this.grid[0][2]==playervalue){
      return true;
  }
}

//checks for tie condition
  checktie():boolean{
    let counter=0;
    for(let x=0; x<3; x++){
        for(let y=0; y<3; y++){
            if(this.grid[x][y]!=0){
                counter++;
            }
        }
    }

    if(counter==9){
        return true;
    }
  }
}
