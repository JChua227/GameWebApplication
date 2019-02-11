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
                if(grid[x][y]!=0)
                    document.getElementById(x + "," + y).disabled=false;
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
        if(check(1)){
            alert("Player 1 wins!");
            player1score++;
            resetboard();
        }
    }
    else{
        grid[x][y]=2;
        document.getElementById(x + "," + y).disabled=true;
        if(check(2)){
            alert("Player 2 wins!");
            player2score++;
            resetboard();
        }
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