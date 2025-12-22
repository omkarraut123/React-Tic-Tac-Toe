import React, {useState} from 'react'
const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function GameBoard({selectSquare, activePlayerSymbol}) {
    const [gameboard, setGameBoard] = useState(initialBoard);

    function handleSelect(rowIndex, colIndex){
        setGameBoard((prevgameboard) => {
            const updatedgameboard = [...gameboard.map((item)=> [...item])];
            updatedgameboard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedgameboard;
        })
        selectSquare();

    }
    return (
        <ol id='game-board'>
            {
                gameboard.map((row, rowIndex) => (
                     <li key={rowIndex}>
                       <ol>
                         {
                            row.map((payerSymbol, colIndex) => (
                                 <li key={colIndex}><button onClick={() => handleSelect(rowIndex, colIndex)}>{payerSymbol}</button></li>
                            ))
                        }
                       </ol>
                    </li>
                ))
            }

        </ol>
    )
}

export default GameBoard
