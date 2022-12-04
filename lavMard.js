const GrassEater = require('./grassEater');
let LivingC = require ('./LivingC')
module.exports = class lavMard extends LivingC{
    constructor(x,y,index){
     super(x,y,index)
        this.kind=8
    }
    getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    
    }
    mul() {
        this.kind;
     
        var newCell = this.random(5);
    
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY + 1][newX - 1] =this.random(2);
         
          
            var newlavMard = new GrassEater(newX - 1, newY +  1, 1);
            grassArr5.push(newlavMard);
         
        }
    }
   
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
  
    move(){
      
       
        // var emptyCells = this.choseCell(1);
        var newCell = this.random(0);
        
        if(newCell){
       
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x=newX;
            this.y=newY;
     
        
          
        }
    }
      
    // move1(){
      
       
    //     // var emptyCells = this.choseCell(1);
    //     var newCell = this.random(1);
        
    //     if(newCell){
       
    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = 6;
    //         matrix[this.y][this.x] = 1;
    //         this.x=newX;
    //         this.y=newY;
     
        
          
    //     }
    // }
    
    eat(){
        this.kind;
        // const grassEaterCells = this.chooseCell(2);
        // const VagrCells = this.chooseCell(4);
        // const allCells=[
        //     ...grassEaterCells,
        //     ...VagrCells
        // ]
        var newCell = this.random(4);
        
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x]=0;
            this.x=newX;
            this.y=newY;
            for (var i in grassArr1) {
                if (newX == grassArr1[i].x && newY == grassArr1[i].y) {
                    grassArr1.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr3) {
                            if (newX == grassArr3[i].x && newY == grassArr3[i].y) {
                                grassArr3.splice(i, 1);
                                break;
                            }
                        }
        }
    }
 

    
    // die(){
    //     this.kind;
      
    
    //         if(this.kind==0){
    //          var  newX=this.x;
    //           var newY=this.y;
    //            matrix[this.y][this.x]=0;
    //             for (var i in grassArr5) {
    //                 if (newX == grassArr5[i].x && newY== grassArr5[i].y) {
    //                     grassArr5.splice(i,1);
    //                     break;
    //                 }
    //             }
    //             this.kind =8
    //         }
    // }
    }