let LivingC = require ('./LivingC')
module.exports = class Mard extends LivingC{
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
        return super.chooseCell(character);
    
    
    }
    random(ch,ch1){
        let found = this.chooseCell(ch,ch1);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    // mul() {
    //     this.kind;
    //     var emptyCells = this.chooseCell(0);
    //     var newCell = random(emptyCells);
    
    //     if (newCell && this.kind >= 12) {
    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = 5;
         
          
    //         var newMard = new Mard(newX, newY, 1);
    //         grassArr4.push(newMard);
         
    //     }
    // }
    move(){
      
       
        // var emptyCells = this.chooseCell(0);
        var newCell = this.random(0);
        
        if(newCell){
       
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x]=0 ;
            this.x=newX;
            this.y=newY;
        
          
        }
    }
    move1(){
      
       
        // var emptyCells = this.chooseCell(0);
        var newCell = this.random(1);
        
        if(newCell){
       
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x]= 1;
            this.x=newX;
            this.y=newY;
        
          
        }
    }
    
    eat(){
        this.kind;
        // const grassEaterCells = this.chooseCell(2);
        // const VagrCells = this.chooseCell(3);
        // const allCells=[
        //     ...grassEaterCells,
        //     ...VagrCells
        // ]
        var newCell = this.random(3,2);
        
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x]=0;
            this.x=newX;
            this.y=newY;
            for (var i in grassArr3) {
                if (newX == grassArr3[i].x && newY == grassArr3[i].y) {
                    grassArr3.splice(i, 1);
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
    //             for (var i in grassArr4) {
    //                 if (newX == grassArr4[i].x && newY== grassArr4[i].y) {
    //                     grassArr4.splice(i,1);
    //                     break;
    //                 }
    //             }
    //             this.kind =8
    //         }
    // }
    }