import React from "react";
import styled from "styled-components";
import PlayingCard from "./Card" 
import {Suits} from "../../shared/constants";

export default function Trump(props) {
    return (
        <TrumpWrapper>
            <span>{Suits[props.card.suit].symbol}</span>
            <PlayingCard center={false} width={75} visible={true} suit={props.card.suit} rank={props.card.rank} />     
        </TrumpWrapper>
    );
};

const TrumpWrapper = styled.div`
height: 160px;
width 100px;
display: inline-block;
> SPAN {
    top: 0;
    left: 0;
    width: 50px;
    height: auto;    
    font: 100% 'Arial';
    font-size: 50px;
    border: 1px solid black;
}
`