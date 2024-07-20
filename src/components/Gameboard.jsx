import { useState } from "react";



export default function Gameboard({onSelect, board}){


    // let gameBoard = gameboard;
    // for(let turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }
    // for(let i=turns.length -1 ; i >=0 ; i--){
    //     const {square, player} = turns[i];
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }



    return (
        <>
        <ol id="gameBoard">
            {board.map((row, rowIndex) => (
              <li key={rowIndex}>
                <ol>{row.map((col, colIndex) => 
                  
                   <li key={colIndex}><button onClick={()=>onSelect(rowIndex,colIndex) } disabled = {col!==null} >{col}</button></li>

                )}</ol>
              </li>
            ))}
          </ol>
        
        </>
    )
}



// export default function Gameboard({onSelect,currentPlayer}){

//     // const [gameboard3,setgameboard] = useState(gameboard);


//     // function change(rowIndex,colIndex){
//     //     setgameboard((gameboard2)=>{
//     //         const updatedgameBoard = [...gameboard2.map((innerArray)=>[...innerArray])];
//     //        updatedgameBoard[rowIndex][colIndex] = currentPlayer;
//     //        return updatedgameBoard;
//     //     } )
//     //     console.log(currentPlayer);
//     //     onSelect();
//     // }
//     return (
//         <>
//         <ol id="gameBoard">
//             {gameboard3.map((row, rowIndex) => (
//               <li key={rowIndex}>
//                 <ol>{row.map((col, colIndex) => 
                  
//                    <li key={colIndex}><button onClick={()=>change(rowIndex,colIndex)}>{col}</button></li>

//                 )}</ol>
//               </li>
//             ))}
//           </ol>
        
//         </>
//     )
// }