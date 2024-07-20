import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningCombinations";
import Gameover from "./components/GameOver";


const gameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function helperActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let winner = null;
  const [playername, setPlayerName] = useState(["player 1","player 2"]);
  // const [playername2, setPlayerName2] = useState(["player 2"]);

  function handleRestart(){
    setGameTurns([]);
  }


  let gameBoard = [...gameboard.map((array)=> [...array])];
  for(let turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for(let combinations of WINNING_COMBINATIONS){
    let comb1 = gameBoard[combinations[0].row][combinations[0].column];
    let comb2 = gameBoard[combinations[1].row][combinations[1].column];
    let comb3 = gameBoard[combinations[2].row][combinations[2].column];
    if(comb1 && (comb1 === comb2) && (comb2 === comb3)){
        if(comb1==='X'){
          winner = playername[0]
        }
        else{
          winner = playername[1]
        }
        break;
    }
    
  }

  function handleNameChange(symbol, name) {
      setPlayerName((prevNames)=>{
          if(symbol==='X'){
            return [name,prevNames[1]];
          }else{
            return [prevNames[0],name];
          }
      });
    
  }

  // const [currentPlayer, setCurrentPlayer] = useState('X');
  const currentPlayer = helperActivePlayer(gameTurns);
  function chooseCurrentPlayer(row, col) {
    // setCurrentPlayer((currentPlayer)=>{return (currentPlayer==='X') ? 'O' : 'X'});
    setGameTurns((turns) => {
      const currentplayer = helperActivePlayer(turns);
      let currentGameTurns = [
        { square: { row: row, col: col }, player: currentplayer },
        ...gameTurns,
      ];
      return currentGameTurns;
    });
  }
  //console.log('from func',currentPlayer);
  return (
    <>
      <main id="mainCon">
        <div id="game-container">
          <ol id="players">
            <Player
              player={playername[0]}
              symbol="X"
              isActive={currentPlayer === "X"}
              onChange={(name) => handleNameChange("X", name)}
            />
            <Player
              player={playername[1]}
              symbol="O"
              isActive={currentPlayer === "O"}
              onChange={(name) => handleNameChange("O", name)}
            />
          </ol>
          {/* <Gameboard onSelect={chooseCurrentPlayer} currentPlayer = {currentPlayer}/> */}
          <Gameboard onSelect={chooseCurrentPlayer} board={gameBoard} />
          {((!winner && gameTurns.length === 9 ) || winner) ? <Gameover winner = {winner} player1 = {playername[0]} player2 = {playername[1]} restart={handleRestart}/> : null}

        </div>

        <Log turns={gameTurns} player1={playername[0]} player2={playername[1]} />
        
      </main>

    </>
  );
}

export default App;
