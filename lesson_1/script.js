var matrix = [
];
var p = 90;
var t = 90;

var matrix = [	
    // [0, 0, 1, 0, 0],
    // [1, 0, 0, 0, 0],
    // [0, 1, 0, 0, 0],
    // [0, 0, 1, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 2]
 ];
var grassArr = [];
var grassArr1 = [];
var grassArr2 = [];
var grassArr3 = [];
var grassArr4 = [];
var grassArr5 = [];
var side = 15;

function setup() {
    frameRate(150);
    createCanvas(1000,1000);
    background('#acacac');
  
   

  
    for (let i = 0; i <p; i++) {
        matrix[i] = [];
        for (let j = 0; j <t; j++) {
        matrix[i][j] = random([0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            2,2,2, 2,2,  0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,3,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,3,3,3,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            4,3,3,3,3,3,4,5,4,5,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
            0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                 0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                      0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                           0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                                0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                                     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                                          0,0,0,0,0,0,6,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
                                               0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,     0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
]);
   
     
   
        if (matrix[i][j] === 1) {
            const gr = new Grass(j, i, 1);
            grassArr.push(gr); 
        }
        if (matrix[i][j] ===2) {
            const gr1 = new GrassEater(j, i, 1);
            grassArr1.push(gr1); 
        }
        if(matrix[i][j]===3){
            const gr2 = new Vagr(j, i, 1);
            grassArr2.push(gr2); 
        }
        if(matrix[i][j]===4){
            const gr3 = new Shun(j, i, 1);
            grassArr3.push(gr3); 
        }
        if(matrix[i][j]===5){
            const gr4 = new Mard(j, i, 1);
            grassArr4.push(gr4); 
        }
        if(matrix[i][j]===6){
            const gr5 = new lavMard(j, i, 1);
            grassArr5.push(gr5); 
        }
        }
      
        }
      
    }

function draw() {
     
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

    for(var i in grassArr){
        grassArr[i].mul();
        
        
    }
   
    for(var i in grassArr1){
     
    
         grassArr1[i].mul();
        grassArr1[i].move();
        grassArr1[i].eat();
         grassArr1[i].die();
    }
    for(var i in grassArr2){
    grassArr2[i].mul() 
    grassArr2[i].move()
  
    grassArr2[i].eat()
    grassArr2[i].die()
    }
    for(var i in grassArr3){
        grassArr3[i].mul()
        grassArr3[i].move()
        grassArr3[i].eat()
        grassArr3[i].die()
    }
    for(var i in grassArr4){
        grassArr4[i].move()
        grassArr4[i].eat()
    }
    for(var i in grassArr5){
        grassArr5[i].move()
        grassArr5[i].eat()
    }
}
console.log(grassArr);
console.log(grassArr1);
console.log(grassArr2);
console.log(grassArr3);
console.log(grassArr4);
console.log(grassArr5);