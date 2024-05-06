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

const knightMoves = function (startCell, endCell, queue = [startCell], steps = [startCell[0]+startCell[1]*8], paths = []) {
    //check for out of bound
    if (startCell[0]<=7 && startCell[1]<=7 && 
        endCell[0]<=7 && endCell[1]<=7) {

        //check base case for recursion
        if (queue.length===0) {
            return paths
        } else {
            let currenIndex = startCell[0] + startCell[1]*8
            let endIndex = endCell[0]+endCell[1]*8
            
            const stepMaker = function (x, y) {
                let nextXCordinate = startCell[0]+x
                let nextYCordinate = startCell[1]+y

                let newIndex = nextXCordinate + nextYCordinate*8
                //check if it is already in the que

                if (!queue.includes(newIndex) && !steps.includes(newIndex)) {
                    queue.push(newIndex)
                    steps.push(newIndex)
                    if (steps.includes(endIndex)) {
                        paths.push(steps)
                    }
                }
            }
            
            //up right, check for out of board
            if (startCell[0]<=6 && startCell[1]<=5) {
                stepMaker(+1, +2)
            } 
            //up left
            if (startCell[0]>=1 && startCell[1]<=5) {
                stepMaker(-1, +2)
            }
            //right top
            if (startCell[0]<=5 && startCell[1]<=6) {
                stepMaker(+2, +1)
            }
            //right down
            if (startCell[0]<=5 && startCell[1]>=1) {
                stepMaker(+2, -1)
            }
            //down right
            if (startCell[0]<=6 && startCell[1]>=2) {
                stepMaker(+1, -2)
            }
            //down left
            if (startCell[0]>=1 && startCell[1]>=2) {
                stepMaker(-1, -2)
            }
            //left up
            if (startCell[0]>=2 && startCell[1]<=6) {
                stepMaker(-2, +1)
            }//left down
            if (startCell[0]>=2 && startCell[1]>=1) {
                stepMaker(-2, -1)
            }
            
            queue.splice(0,1)
            let convertedIndex = [queue[0]%8, (queue[0]-queue[0]%8)/8] 
            return knightMoves(convertedIndex, endCell, queue, steps)
        }
    } else {
        alert('out of board !')
    }
}

console.log(knightMoves([1,1], [0,7]))
console.log(chessBoard)

