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

const knightMoves = function (startCell, endCell) {
    //check for out of bound
    if (startCell[0]<=7 && startCell[1]<=7 && 
        endCell[0]<=7 && endCell[1]<=7) {

        // small math to convert x and y to a simple number that corresponds to index
        let currentSquare = startCell[0] + startCell[1]*8
        let startSquare = startCell[0] + startCell[1]*8
        let endSquare = endCell[0]+endCell[1]*8
        let queue = [currentSquare]
        let steps = []
        let previousSquares = []

        while (currentSquare!==endSquare) {
            //for loop that goes inside each item 
            for (let square of chessBoard[currentSquare]) {
                if (square===endSquare) {
                    steps.push(currentSquare)
                    steps.push(square)
                    let parentSquare = 100                   

                    //loop that goes back to origin to reconstruct path
                    while (steps[0]!==startSquare) {
                        chessBoard[steps[0]].forEach((square)=> {
                            //item must be in previousSquare if it is parent
                            if (previousSquares.includes(square)) {
                                //note the index in prev
                                let indexInPrevSquares = previousSquares.indexOf(square)
                                parentSquare = Math.min(indexInPrevSquares, parentSquare)
                            }
                        })
                        steps.splice(0,0, previousSquares[parentSquare])
                    }
                    //creating cordinates
                    steps.forEach((item, index)=> {
                        steps[index]= [item%8, (item-item%8)/8]
                    })

                    console.log(`you made it in ${steps.length-1} moves ! Here is the path:`) 
                    return steps.forEach(item=> console.log(item))
                } else if (!queue.includes(square) && !previousSquares.includes(square)) {
                    queue.push(square)
                } 
            }

            previousSquares.push(queue.splice(0,1)[0])
            currentSquare = queue[0]
        }

    } else {
        alert('out of board !')
    }
}

knightMoves([7,7], [5,4])



