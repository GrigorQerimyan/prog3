let LivingC = require ('./LivingC')
module.exports = class Vagr extends LivingC{
constructor(x,y,index){
    super(x,y,index)
    this.sovac=8;
   
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
random(ch,ch2){
    let found = this.chooseCell(ch,ch2);
    let result = Math.floor(Math.random()*found.length)
    return found[result];
}
mul() {
    this.sovac;
    // var emptyCells = this.chooseCell(0 );
    var newCell = this.random(0);

    if (newCell && this.sovac >= 12) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;
     
      
        var newVagr = new Vagr(newX, newY, 1);
        grassArr2.push(newVagr);
     
    }
}
move() {
    this.sovac;
    // const emptyCells = this.chooseCell(0);
    // const grassCells = this.chooseCell(1);
    // const allCells=[
    //     ...emptyCells,
    //     ...grassCells
    // ]
    var newCell = this.random(0,1);
    
    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x]=0 ;
        this.x=newX;
        this.y=newY;
        this.sovac--
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }

}

eat(){
    this.sovac;
    // var emptyCells = this.chooseCell(2);
    var newCell = this.random(2);
    
    if(newCell){
        matrix[this.y][this.x]=0;
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0
      
        this.x=newX;
        this.y=newY;
        for (var i in grassArr1) {
            if (newX == grassArr1[i].x && newY == grassArr1[i].y) {
                grassArr1.splice(i, 1);
                break;
            }
        }
        this.sovac=this.sovac +4
    }

}
die(){
    this.sovac;
  

        if(this.sovac==12){
            matrix[this.y][this.x]=0
           
            var newX=this.x
            var newY=this.y
            for (var i in grassArr2) {
                if (newX == grassArr2[i].x && newY== grassArr2[i].y) {
                    grassArr2.splice(i,1);
                    break;
                }
            }
            
        }
    }
}