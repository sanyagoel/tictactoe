export default function Gameover({winner , player1, player2,restart}){

    return (
         <div id="gameoverCon">
            <h2>Game Over!</h2>
        {winner ? <p>Congrats {winner} :3 </p> : null}
        {!winner ? <p>Sorry it is a tie between {player1} and {player2}!</p> : null}
        <button onClick={restart}>Rematch ?</button>
        </div>   
    )


}