export default function Log({turns,player1,player2}){

    return (
       <>
        <ol id="log">
          {turns.map((turn)=> {
          let finalPlayer = 'X';
          turn.player==='X' ? finalPlayer=player1 : finalPlayer = player2;
          return <li key={turn.square}>{finalPlayer} played at row {turn.square.row}, column {turn.square.col}</li>

          } )}
            </ol>
       </>
    )
}