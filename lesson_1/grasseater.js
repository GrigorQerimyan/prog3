class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [


        ];

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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    mul() {
        this.energy;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 11) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
         
          
            var newGrass = new GrassEater(newX, newY, 1);
            grassArr1.push(newGrass);
            this.energy--
        }
    }
    move() {
        this.energy;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x]=0;
            this.x=newX;
            this.y=newY;
            
            matrix[newY][newX] = 2;
           this.energy--
        }

    }
    eat(){
        this.energy;
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        
        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x]=0;
            this.x=newX;
            this.y=newY;
            matrix[newY][newX] = 2;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++
            this.mul()
        }

    }
   die(){
    this.energy;
  

        if(this.energy===0){
            matrix[this.y][this.x]=0
           
            var newX=this.x
            var newY=this.y
            for (var i in grassArr1) {
                if (newX == grassArr1[i].x && newY== grassArr1[i].y) {
                    grassArr1.splice(i,1);
                    break;
                }
            }
        }
    }
     

   }


