var grid;
var playercounter;
var player1score=0;
var player2score=0;
resetboard();


function resetboard(){
    playercounter=-1;
    if(player1score+player2score>0){
        for(let x=0; x<3; x++){
            for(let y=0; y<3; y++){
                if(grid[x][y]!=0){
                    document.getElementById(x + "," + y).disabled=false;
                    document.getElementById(x + " " + y).innerHTML="";
                }
            }
        }
    }
    grid=[[0,0,0],[0,0,0],[0,0,0]];
}

function input(x,y){
    playercounter++;
    if(playercounter%2==0){
        grid[x][y]=1;
        document.getElementById(x + "," + y).disabled=true;
        document.getElementById(x + " " + y).innerHTML="X";
        if(check(1)){
            alert("Player 1 wins!");
            player1score++;
            document.getElementById("player1score").innerHTML="Player 1: " + player1score;
            resetboard();
        }
    }
    else{
        grid[x][y]=2;
        document.getElementById(x + "," + y).disabled=true;
        document.getElementById(x + " " + y).innerHTML="O";
        if(check(2)){
            alert("Player 2 wins!");
            player2score++;
            document.getElementById("player2score").innerHTML="Player 2: " + player2score;
            resetboard();
        }
    }

    if(checktie()){
        alert("Its a tie!");
        player1score += .5;
        player2score += .5;
        document.getElementById("player1score").innerHTML="Player 1: " + player1score;
        document.getElementById("player2score").innerHTML="Player 2: " + player2score;
        resetboard();
    }
}


function check(playervalue){
    for(let x=0; x<3; x++){
        let counter=0;
        for(let y=0; y<3; y++){
            if(grid[x][y]==playervalue){
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
            if(grid[y][x]==playervalue){
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

    if(grid[0][0]==playervalue && grid[1][1]==playervalue && grid[2][2]==playervalue){
        return true;
    }
    if(grid[2][0]==playervalue && grid[1][1]==playervalue && grid[0][2]){
        return true;
    }
}

function checktie(){
    let counter=0;
    for(let x=0; x<3; x++){
        for(let y=0; y<3; y++){
            if(grid[x][y]!=0){
                counter++;
            }
        }
    }

    if(counter==9){
        return true;
    }
}