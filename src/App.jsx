import Player from "./components/Player";
import GameBoard from "./components/GameBoard"
import { useState } from "react";
function App() {
  const [isActivePlayer, setisActivePlayer] = useState('X');
  function selectSquare(){
    setisActivePlayer((prev) => prev === 'X' ? 'O' : 'X');
  }

  return (
    <div id='game-container'>
            <ol id='players' className="highlight-player">
                 <Player name='omkar' symbol='X' isActive={isActivePlayer === 'X'}/>
                 <Player name='Nilesh' symbol='O' isActive={isActivePlayer === 'O'}/>
            </ol>
            <GameBoard selectSquare ={selectSquare} activePlayerSymbol = {isActivePlayer} />
     </div>
  
  );
}

export default App
