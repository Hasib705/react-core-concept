import { useState } from "react";

export default function Team(){

    const[team, setTeam]= useState(0 );

    const addPlayer=()=>{
        setTeam(team+1);
    }
    const removePlayer=()=>{
        setTeam(team-1);
    }
    const teamStyle={
        border:"2px solid red",
        margin:"15px",
        borderRadius:'5px',
        padding:'15px'
    }

    return(
        <>
        <div style={teamStyle}>
            <h1>Player:{team}</h1>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
        </>
    )
}

