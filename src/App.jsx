import Player from "./components/Player";
import GameBoard from "./components/GameBoard"
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function deriveActivePlayer(gameTurn){

  let currentPlayer = 'X';
  if(gameTurn.length > 0 && gameTurn[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {
    const [gameTurn, setGameTurn] = useState([]);
//  const [isActivePlayer, setisActivePlayer] = useState('X');

   let ActivePlayer = deriveActivePlayer(gameTurn);
    let gameboard = [...initialBoard.map(game => [...game])];

     for(let turn of gameTurn){
        const { square, player } = turn;
        const { rowIndex, colIndex } = square;
        gameboard[rowIndex][colIndex] = player;
     }
     let winner;

     for(let combination of WINNING_COMBINATIONS){
      const first = gameboard[combination[0].row][combination[0].column];
      const second = gameboard[combination[1].row][combination[1].column];
      const third = gameboard[combination[2].row][combination[2].column];
      if(first && first === second && first === third) {
        winner = first;
      }
     }
     const hasDraw = gameTurn.length === 9 && !winner;

  function selectSquare(row, col){
    //setisActivePlayer((prev) => prev === 'X' ? 'O' : 'X');
    setGameTurn((preTurn) => {
      let currentPlayer = deriveActivePlayer(gameTurn);
      let updatedTurn = [{square: { rowIndex: row, colIndex: col }, player: currentPlayer},...preTurn]
      return updatedTurn;
    })
  }
  function handleRestart(){
    setGameTurn([]);
  }

  return (
    <div id='game-container'>
            <ol id='players' className="highlight-player">
                 <Player name='Player 1' symbol='X' isActive={ActivePlayer === 'X'}/>
                 <Player name='Player 2' symbol='O' isActive={ActivePlayer === 'O'}/>
            </ol>
            {
              (winner || hasDraw) && <GameOver winner={winner} handleRestart = {handleRestart}/>
            }
            <GameBoard selectSquare ={selectSquare} board = { gameboard } />
            <Log  gameTurn={gameTurn} />
     </div>
  
  );
}

export default App
