import React from "react";
import styled from "styled-components";
import PlayingCard from "./Card" 
import {Suits} from "../../shared/constants";

export default function Trump(props) {
    return (
        <TrumpWrapper>
            <span>{Suits[props.card.suit].symbol}</span>
            <PlayingCard width={75} visible='true' suit={props.card.suit} rank={props.card.rank} />     
        </TrumpWrapper>
    );
};

const TrumpWrapper = styled.div`
`