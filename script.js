// import { Socket } from "socket.io";

var p = 100;
var t = 100;


// var grassArr = [];
// var grassArr1 = [];
// var grassArr2 = [];
// var grassArr3 = [];
// var grassArr4 = [];
// var grassArr5 = [];
let socket = io()
var side = 30;

function setup() {
    frameRate(150);
    createCanvas(side * 20, side * 20);
    background('#acacac');


}



// summer1.onclick = function () {
//     summer = 1
// };
// autumn1.onclick = function () {
//     autumn = 1
// };
// winter1.onclick = function () {
//     winter = 1
// };
let winter = 0
let autumn = 0
let summer = 0
let spring = 0;
function nkarel(matrix) {
let weather = document.querySelector(".weather")
let summer1 = document.querySelector(".summer");
let autumn1 = document.querySelector(".autumn");
let winter1 = document.querySelector(".winter");
let spring1 = document.querySelector(".spring");
let g = 0
let g1 = 0
let v = 0
let s = 0
let m = 0
let l = 0
let grass = document.querySelector(".grass")
let grasseater = document.querySelector(".grasseater")
let vagr = document.querySelector(".vagr")
let shun = document.querySelector(".shun")
let mard = document.querySelector(".mard")
let lavmard = document.querySelector(".lavmard")
let kid = document.querySelector(".kid")
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
               g = g+1
                if (spring == 1) {
                    fill("#00ff2f")
                }
                if (summer == 1) {
                    fill("#21de27")
                }
                if (autumn == 1) {
                    fill("#2fd076")
                }
                if (winter == 1) {
                    fill("#57a864")
                }
                if (spring == 0 && summer == 0 && autumn == 0 && winter == 0) {
                    fill("green");
                }
            }
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            if (matrix[y][x] == 2) {
                g1 = g1 + 1
                if (spring == 1) {
                    fill("#b4ff00")
                }
                if (summer == 1) {
                    fill("#c1e41b")
                }
                if (autumn == 1) {
                    fill("#c4a93b")
                }
                if (winter == 1) {
                    fill("#bcae43")
                }

                if (spring == 0 && summer == 0 && autumn == 0 && winter == 0) {
                    fill("yellow");
                }
            }
            if (matrix[y][x] == 3) {
                v = v + 1
                if (spring == 1) {
                    fill("#f82b07")
                }
                if (summer == 1) {
                    fill("#ff001b")
                }
                if (autumn == 1) {
                    fill("#e01f27")
                }
                if (winter == 1) {
                    fill("#bf5140")
                }
                if (spring == 0 && summer == 0 && autumn == 0 && winter == 0) {
                    fill("red");
                }
            }
            if (matrix[y][x] == 4) {
                s = s + 1
                if (spring == 1) {
                    fill("#0c00ff")
                }
                if (summer == 1) {
                    fill("#2c63d3")
                }
                if (autumn == 1) {
                    fill("#415abe")
                }
                if (winter == 1) {
                    fill("#5462ab")
                }
                if (spring == 0 && summer == 0 && autumn == 0 && winter == 0) {
                    fill("blue");
                }

            }
            if (matrix[y][x] == 5) {
                m = m + 1
                fill("black")
            }
            if (matrix[y][x] == 6) {
                l = l + 1
                fill("white")
            }

            rect(x * side, y * side, side, side);


        }
    }
    weather.onclick = function (){
        spring = 0
        autumn = 0
        winter = 0
        summer = 0 
}
    spring1.onclick = function(){
        spring = 1
        autumn = 0
        winter = 0
        summer = 0
}
autumn1.onclick = function (){
    autumn = 1
    winter = 0
    summer = 0
    spring = 0
}
   

winter1.onclick = function (){
    winter = 1
    summer = 0
    spring = 0
    autumn = 0
   
}
summer1.onclick = function (){
    summer = 1
    spring = 0
    autumn = 0
    winter = 0
}
grass.innerHTML = "կանաչ" + ":"+ g;
grass.style.color = "green";
grasseater.innerHTML = "դեղին"+ ":" + g1;
grasseater.style.color = "yellow";
vagr.innerHTML = "կարմիր" + ":"+ v;
vagr.style.color = "red";
shun.innerHTML = "կապույտ"+ ":" + s;
shun.style.color = "blue";
mard.innerHTML = "սպիտակ" + ":"+ m;
lavmard.innerHTML = "սև"+ ":" + l;
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

socket.on("send matrix", nkarel);
// let btn = document.getElementById("spring")
// btn.onclick = function spring1() {
//     for (var i = 0; i < p; i++) {
//         for (var j = 0; j < t; j++) {
//             if (matrix[i][j] == 1) {
//                 fill("black")
//             }
//         }
//     } rect(j * side, i * side, side, side)
// }




