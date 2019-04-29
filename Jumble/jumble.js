
var fs = require('fs');
var data="";
let counter=0;
fs.readFile('C:/Users/jared/Desktop/Project/GameWebApplication/Jumble/levels/12.txt', 'utf8',function(err, data) {

    var doublearray = new Array();
    for(let x=0; x<data.length; x++){
        let array = new Array();
        
        let trigger=false;
        while(data.charAt(x)!='\n'){    
            let sb = "";
            if(trigger){
                x++;
            }
            while(data.charAt(x)!=' ' && data.charAt(x)!='\n'){
                sb += data.charAt(x);
                x++;
                trigger=true;
                
            }
            if(data.charAt(x)!='\n'){
                array.push(sb);
            }
        }
        
        doublearray.push(array);
    }
    console.log(doublearray);
});