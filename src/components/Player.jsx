import {useState} from 'react';

export default function Player({player,symbol,isActive ,onChange}){
    const [isEditing,setIsEditing] = useState(false);
    const change = function(){
        setIsEditing((editing)=>!editing);
    }

    function editPlayer(event){
        console.log(event);
        onChange(event.target.value);
    }
       let target = (<><span  className='playerName'>{player}</span></>);
    // const confirm = function(){ setIsEditing(false) }
    if(isEditing){
        target =   (<><span><input type="text" value={player} onChange={editPlayer}></input></span>
                    </> )
    }

    // <span  className='playerName'>{player}</span>
    
    return(
        <>
         <li className={isActive ? "player active" : "player"}>
         <span><button onClick={change}>{isEditing ? "Confirm" : "Edit"}</button></span>
        {target}
      <span className='playerSymbol'>{symbol}</span>
    </li>
        </>
    )
}







