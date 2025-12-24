import React from 'react'

function Log({ gameTurn }) {
    return (
        <>
        <ol id='log'>
            {
                gameTurn.map((turn) => (
                    <li key={`${turn.square.rowIndex}${turn.square.colIndex}`}>{turn.player} Selected {turn.square.rowIndex} , {turn.square.colIndex}</li>
                ))
            }

        </ol>
        </>
    )
}

export default Log
