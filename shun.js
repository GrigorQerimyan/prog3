let LivingC = require ('./LivingC')
module.exports = class Shun extends LivingC{ 
constructor(x,y,index){
    super(x,y,index)
    this.kind=12

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
random(ch,ch1){
    let found = this.chooseCell(ch,ch1);
    let result = Math.floor(Math.random()*found.length)
    return found[result];
}
chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
}
mul() {
    this.kind-=0.1;
    // var emptyCells = this.chooseCell(0);
    // var grassCells = this.chooseCell(1);
    // var allCells=[
    //     ...emptyCells,
    //    ... grassCells
    // ]
    var newCell = this.random(0,1);

    if (newCell && this.kind >= 12) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 4;
     
      
        var newShun = new Shun(newX, newY, 1);
        grassArr3.push(newShun);
     
    }
}
move(){
        this.kind;
    // var emptyCells = this.chooseCell(1);
    var newCell = this.random(0,1);
    
    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 4;
        matrix[this.y][this.x]=0;
        this.x=newX;
        this.y=newY;
        for (var i in grassArr1) {
            if (newX == grassArr1[i].x && newY == grassArr1[i].y) {
                grassArr1.splice(i, 1);
                break;
            }
        }

    }
}
eat(){
  
   
   
    // const VagrCells = this.chooseCell(3);
   
    var newCell = this.random(3);
    
    if(newCell){
   
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 4;
        matrix[this.y][this.x]=0 ;
        this.x=newX;
        this.y=newY;
        
     
         for (var i in grassArr2) {
            if (newX == grassArr2[i].x && newY == grassArr2[i].y) {
                grassArr2.splice(i, 1);
                break;
                
            }
        }
      this.kind=+ 5
    }
}

// eat1(){
//     this.kind;
//     var emptyCells = this.chooseCell(3);
//     var newCell = random(emptyCells);
    
//     if(newCell){
//         var newX = newCell[0];
//         var newY = newCell[1];
//         matrix[newY][newX] = 4;
//         matrix[this.y][this.x]=0;
//         this.x=newX;
//         this.y=newY;
//         for (var i in grassArr2) {
//             if (newX == grassArr2[i].x && newY == grassArr2[i].y) {
//                 grassArr2.splice(i, 1);
//                 break;
//             }
//         }
  
//     }
// }

die(){
    this.kind;
  

        if(this.kind==0){
         var  newX=this.x;
          var newY=this.y;
           matrix[this.y][this.x]=0;
            for (var i in grassArr3) {
                if (newX == grassArr3[i].x && newY== grassArr3[i].y) {
                    grassArr3.splice(i,1);
                    break;
                }
            }
            this.kind =1
        }
}
}