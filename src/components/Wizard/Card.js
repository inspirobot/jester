import React from "react";
import { Ranks, Suits } from "../../shared/constants";

export default function Card(props) {
    if (props.visible) {
        return (                 
            <li className="playing-card" 
                style={{
                    color: `${Suits[props.suit].colour}`,
                    transform: props.transform  
                }} data-value={`${Ranks[props.rank].symbol} ${Suits[props.suit].symbol}`}>
                <p data-suit={`${Suits[props.suit].symbol}`}><span>{Ranks[props.rank].symbol}</span><span>{Suits[props.suit].symbol}</span></p>
            </li>
        )
    } else {
        return (
            <li className="playing-card">
                <p data-suit=""><span></span><span></span></p>
            </li>
        )
    }
}

