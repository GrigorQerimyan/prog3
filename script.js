// import { Socket } from "socket.io";

// var p = 90;
// var t = 90;


// var grassArr = [];
// var grassArr1 = [];
// var grassArr2 = [];
// var grassArr3 = [];
// var grassArr4 = [];
// var grassArr5 = [];
let socket =  io() 
var side = 10;

function setup() {
    frameRate(150);
    createCanvas(side * 30,side *30);
    background('#acacac');

      
    }

function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
       
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
           if(matrix[y][x]==2){
               fill("yellow")
           }
           if(matrix[y][x]==3){
            fill("red")
        }
        if(matrix[y][x]==4){
            fill("blue")
        }
        if(matrix[y][x]==5){
            fill("black")
        }
        if(matrix[y][x]==6){
            fill("white")
        }
            rect(x * side, y * side, side, side);

        }
    }
  

   
     
    // for(var i in grassArr){
    //     grassArr[i].mul();
        
        
    // }
   
    // for(var i in grassArr1){
     
    
    //      grassArr1[i].mul();
    //     grassArr1[i].move();
    //     grassArr1[i].eat();
    //      grassArr1[i].die();
    // }
    // for(var i in grassArr2){
    // grassArr2[i].mul() 
    // grassArr2[i].move()
  
    // grassArr2[i].eat()
    // grassArr2[i].die()
    // }
    // for(var i in grassArr3){
    //     grassArr3[i].mul()
    //     grassArr3[i].move()
    //     grassArr3[i].eat()
    //     grassArr3[i].die()
    // }
    // for(var i in grassArr4){
    //     grassArr4[i].move()
    //     grassArr4[i].eat()
    // }
    // for(var i in grassArr5){
    //     grassArr5[i].move()
    //     grassArr5[i].eat()
    // }
}
socket.on("send matrix",nkarel);