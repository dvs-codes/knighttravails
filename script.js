let chessBoard = []

for (let i=0; i<64; i++) {
    chessBoard[i]=[]
}

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
                chessBoard[currenIndex].push(newIndex)
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

