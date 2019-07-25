import { Component, OnInit, ViewChild } from '@angular/core';

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

    //stops player from marking that spot
    //then gives player another turn until they hit a valid spot
    if(this.grid[x][y]!=0){
        this.playercounter--;
        return;
    }

    //player move
    if(this.playercounter%2==0){
        let check = this.check(1);
        this.grid[x][y]=1;
        document.getElementById(x + " " + y).innerHTML="X";
        if(check){
            alert("Player 1 wins!");
            this.player1score++;
            document.getElementById("player1score").innerHTML="Player 1: " + this.player1score;
            this.resetboard();
        }

    }
    else{
        let check = this.check(2);
        this.grid[x][y]=2;
        document.getElementById(x + " " + y).innerHTML="O";
        if(check){
            alert("Player 2 wins!");
            this.player2score++;
            document.getElementById("player2score").innerHTML="Player 2: " + this.player2score;
            this.resetboard();
        }
    }

    let checktie = this.checktie();
    //check for tie
    if(checktie){
        alert("Its a tie!");
        this.player1score += .5;
        this.player2score += .5;
        document.getElementById("player1score").innerHTML="Player 1: " + this.player1score;
        document.getElementById("player2score").innerHTML="Player 2: " + this.player2score;
        this.resetboard();
    }
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
        return false;
    }

    if(this.grid[0][0]==playervalue && this.grid[1][1]==playervalue && this.grid[2][2]==playervalue){
        return true;
    }
    if(this.grid[2][0]==playervalue && this.grid[1][1]==playervalue && this.grid[0][2]==playervalue){
        return true;
    }
    return false;
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
    return false;
    }
}

