import React, { useContext } from "react";

export default function GameTable() {
    return (
        <Wrapper> 
            <Players />        
            <Trump />
            <GameInfo />   
        </Wrapper>
    )
}