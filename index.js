var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

var p = 90;
var t = 90;



grassArr = [];
grassArr1 = [];
grassArr2 = [];
grassArr3 = [];
grassArr4 = [];
grassArr5 = [];
function matrixgenerator(ch,ch1,ch2,ch3,ch4,ch5,ch6){
    matrix = [];
    for(let i = 0;i<ch.length;i++){
        matrix = []
        for(let j = 0; ch[i].length; j++){
        matrix.push(0)}
    }
    for(let i = 0;i<ch1.length;i++){
        matrix = []
        for(let j = 0; ch1[i].length; j++){
        matrix.push(1)}
    }
    for(let i = 0;i<ch2.length;i++){
        matrix = []
        for(let j = 0; ch2[i].length; j++){
        matrix.push(2)}
    }
    for(let i = 0;i<ch3.length;i++){
        matrix = []
        for(let j = 0; ch3[i].length; j++){
        matrix.push(3)
        }
    }
    for(let i = 0;i<ch4.length;i++){
        matrix = []
        for(let j = 0; ch4[i].length; j++){
        matrix.push(4)}
    }
    for(let i = 0;i<ch5.length;i++){
        matrix = []
        for(let j = 0; ch5[i].length; j++){
        matrix.push(5)}
    }
    for(let i = 0;i<ch6.length;i++){
        matrix = []
        for(let j = 0; ch6[i].length; j++){
        matrix.push(6)}
    }
    io.sockets.emit("send matrix", matrix);
}
let x = Math.floor(Math.random()* matLength)//aveacru ame ch-i  vra
matrixgenerator("100","30","4","2","2")

// function gen() {

//     for (let i = 0; i < p; i++) {
//         matrix[i] = [];
//         for (let j = 0; j < t; j++) {
//             matrix[i][j] = Math.floor(Math.random() * 7);
         
//           }
//         }
//     }
//     io.sockets.emit("send matrix", matrix);
// }
// gen()

let Shun = require('./shun')
let Grass = require('./grass')
let GrassEater = require('./grassEater')
let Vagr = require('./vagr')
let Mard = require('./mard')
let lavMard = require('./lavmard')





function createObj() {

    for (let i = 0; i < p; i++) {
        for (let j = 0; j < t; j++) {

            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i, 1);
                grassArr.push(gr);
            }
            if (matrix[i][j] === 2) {
                const gr1 = new GrassEater(j, i, 1);
                grassArr1.push(gr1);
            }
            if (matrix[i][j] === 3) {
                const gr2 = new Vagr(j, i, 1);
                grassArr2.push(gr2);
            }
            if (matrix[i][j] === 4) {
                const gr3 = new Shun(j, i, 1);
                grassArr3.push(gr3);
            }
            if (matrix[i][j] === 5) {
                const gr4 = new Mard(j, i, 1);
                grassArr4.push(gr4);
            }
            if (matrix[i][j] === 6) {
                const gr5 = new lavMard(j, i, 1);
                grassArr5.push(gr5);
            }
        }
    }
    io.sockets.emit("send matrix", matrix);
}



function game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassArr1) {
        grassArr1[i].mul();
        grassArr1[i].move();
        grassArr1[i].eat();
        grassArr1[i].die();
    }
    for (var i in grassArr2) {
        grassArr2[i].mul()
        grassArr2[i].move()

        grassArr2[i].eat()
        grassArr2[i].die()
    }
    for (var i in grassArr3) {
        grassArr3[i].mul()
        grassArr3[i].move()
        grassArr3[i].eat()
        grassArr3[i].die()
    }
    for (var i in grassArr4) {
        grassArr4[i].move()
        grassArr4[i].eat()
    }
    for (var i in grassArr5) {
        grassArr5[i].move()
        grassArr5[i].eat()
    }
    io.sockets.emit("send matrix", matrix);

}

setInterval(game, 1000)


io.on('connection', function (socket) {
    createObj()
});




