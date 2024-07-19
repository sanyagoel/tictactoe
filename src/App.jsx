import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";



function App() {

  const [currentPlayer, setCurrentPlayer] = useState('X');

  function chooseCurrentPlayer(){
    setCurrentPlayer((currentPlayer)=>{return (currentPlayer==='X') ? 'O' : 'X'});
  }
  //console.log('from func',currentPlayer);
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player player="PlAYER 1" symbol="X" isActive={currentPlayer==='X'}/>
            <Player player="PLAYER 2" symbol="O" isActive={currentPlayer==='O'} />
          </ol>
          <Gameboard onSelect={chooseCurrentPlayer} currentPlayer = {currentPlayer}/>
        </div>
      </main>
    </>
  );
}

export default App;
