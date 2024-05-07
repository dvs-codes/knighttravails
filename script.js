let chessBoard = []




const graphMaker = function() {
    for (let i=0; i<64; i++) {
        chessBoard[i]=[]
    }
    chessBoard.forEach((item, index) => {
        let convertedArray = [index%8, (index-index%8)/8]

        const stepMaker = function (x, y, arrayList) {
            let nextXCordinate = convertedArray[0]+x
            let nextYCordinate = convertedArray[1]+y
    
            let newIndex = nextXCordinate + nextYCordinate*8
    
            item.push(newIndex)
        }
        //up right, check for out of board
        if (convertedArray[0]<=6 && convertedArray[1]<=5) {
            stepMaker(+1, +2)
        } 
        //up left
        if (convertedArray[0]>=1 && convertedArray[1]<=5) {
            stepMaker(-1, +2)
        }
        //right top
        if (convertedArray[0]<=5 && convertedArray[1]<=6) {
            stepMaker(+2, +1)
        }
        //right down
        if (convertedArray[0]<=5 && convertedArray[1]>=1) {
            stepMaker(+2, -1)
        }
        //down right
        if (convertedArray[0]<=6 && convertedArray[1]>=2) {
            stepMaker(+1, -2)
        }
        //down left
        if (convertedArray[0]>=1 && convertedArray[1]>=2) {
            stepMaker(-1, -2)
        }
        //left up
        if (convertedArray[0]>=2 && convertedArray[1]<=6) {
            stepMaker(-2, +1)
        }//left down
        if (convertedArray[0]>=2 && convertedArray[1]>=1) {
            stepMaker(-2, -1)
        }
    })
}
graphMaker()

const knightMoves = function (startCell, endCell, queue = [startCell[0]+startCell[1]*8], prevSquare = [], steps = [startCell[0]+startCell[1]*8] ) {
    //check for out of bound
    if (startCell[0]<=7 && startCell[1]<=7 && 
        endCell[0]<=7 && endCell[1]<=7) {

        //check base case for recursion
        if (startCell[0]===endCell[0] &&
            startCell[1]===endCell[1]) {
            return steps
        } else {
            // small math to convert x and y to a simple number that corresponds to index
            let currenIndex = startCell[0] + startCell[1]*8
            let endIndex = endCell[0]+endCell[1]*8
            //going through each move
            for (let item of chessBoard[currenIndex]) {
                let  convertedIndex = [item%8, (item-item%8)/8]
                if (endIndex === item) {
                    steps.push(item)
                    return steps
                }
                if (!prevSquare.includes(item) && !queue.includes(item)) {
                    queue.push(item)
                }
            }

            prevSquare.push(queue.splice(0,1)[0])

            let convertedIndex = [queue[0]%8, (queue[0]-queue[0]%8)/8] 
            return knightMoves(convertedIndex, endCell, queue, prevSquare, steps)
        }
    } else {
        alert('out of board !')
    }
}

console.log(knightMoves([0,0], [7,7]))
console.log(chessBoard)

