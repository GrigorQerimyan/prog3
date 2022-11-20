var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

var p = 90;
var t = 90;

var matrix = [	
    
];

var grassArr = [];
var grassArr1 = [];
var grassArr2 = [];
var grassArr3 = [];
var grassArr4 = [];
var grassArr5 = [];

function createObj(){

   for (let i = 0; i <p; i++) {
      matrix[i] = [];
      for (let j = 0; j <t; j++) {
      matrix[i][j] = Math.random([0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,1,1,1,1,
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
createObj()


