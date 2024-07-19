import { useState } from "react";

const gameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];



export default function Gameboard({onSelect,currentPlayer}){

    const [gameboard3,setgameboard] = useState(gameboard);


    function change(rowIndex,colIndex){
        setgameboard((gameboard2)=>{
            const updatedgameBoard = [...gameboard2.map((innerArray)=>[...innerArray])];
           updatedgameBoard[rowIndex][colIndex] = currentPlayer;
           return updatedgameBoard;
        } )
        console.log(currentPlayer);
        onSelect();
    }
    return (
        <>
        <ol id="gameBoard">
            {gameboard3.map((row, rowIndex) => (
              <li key={rowIndex}>
                <ol>{row.map((col, colIndex) => 
                  
                   <li key={colIndex}><button onClick={()=>change(rowIndex,colIndex)}>{col}</button></li>

                )}</ol>
              </li>
            ))}
          </ol>
        
        </>
    )
}