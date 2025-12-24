import React, {useState} from 'react'

function GameBoard({selectSquare, board}) {



    return (
        <ol id='game-board'>
            {
                board.map((row, rowIndex) => (
                     <li key={rowIndex}>
                       <ol>
                         {
                            row.map((payerSymbol, colIndex) => (
                                 <li key={colIndex}><button onClick={() => selectSquare(rowIndex, colIndex)} disabled={ payerSymbol !== null }>{payerSymbol}</button></li>
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
