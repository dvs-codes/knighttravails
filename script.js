let chessBoard = [ 
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0] ]


const knightMoves = function (startCell, endCell, queue = [startCell], steps = [startCell]) {
    //check for out of bound
    if (startCell[0]<=7 && startCell[1]<=7 && 
        endCell[0]<=7 && endCell[1]<=7) {

        //check base case for recursion
        if (startCell[0]===endCell[0] &&
            startCell[1]===endCell[1]) {
            return steps
        } else {
            let xCordinate = startCell[0]
            let yCordinate = startCell[1]
            chessBoard[yCordinate][xCordinate] = 1
            
            const stepMaker = function (x, y) {
                let nextYCordinate = yCordinate+y
                let nextXCordinate = xCordinate+x
                //check if already visited
                if (chessBoard[nextYCordinate][nextXCordinate]===0) {
                    chessBoard[nextYCordinate][nextXCordinate]=1
                    //adding to queue    
                    steps.push([nextXCordinate, nextYCordinate])
                    queue.push([nextXCordinate, nextYCordinate])                
                } else {
                    steps.push([nextXCordinate, nextYCordinate])
                    return steps
                }
            }
            
            //up right, check for out of board
            if (xCordinate<=6 && yCordinate>=2) {
                stepMaker(+1, -2)
            } 
            //up left
            if (xCordinate>=1 && yCordinate>=2) {
                stepMaker(-1, -2)
            }
            //right top
            if (xCordinate<=5 && yCordinate>=1) {
                stepMaker(+2, -1)
            }
            //right down
            if (xCordinate<=5 && yCordinate<=6) {
                stepMaker(+2, +1)
            }
            //down right
            if (xCordinate<=6 && yCordinate<=5) {
                stepMaker(+1, +2)
            }
            //down left
            if (xCordinate>=1 && yCordinate<=5) {
                stepMaker(-1, +2)
            }
            //left up
            if (xCordinate>=2 && yCordinate>=1) {
                stepMaker(-2, -1)
            }//left down
            if (xCordinate>=2 && yCordinate<=6) {
                stepMaker(-2, +1)
            }
            queue.splice(0,1)
            return knightMoves(queue[0], endCell, queue, steps)
        }
    } else {
        alert('out of board !')
    }
}

console.log(knightMoves([3,3], [6,0]))

console.log(chessBoard)

