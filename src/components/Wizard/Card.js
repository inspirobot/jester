import React from "react";
import { Ranks, Suits } from "../../shared/constants";
import Styled from "styled-components";


export default function Card(props) {
    if (props.visible) {
        return (        
            <PlayingCard 
                width={12}
                style={{
                    color: `${Suits[props.suit].colour}`,
                }} data-value={`${Ranks[props.rank].symbol} ${Suits[props.suit].symbol}`}>
                <p data-suit={`${Suits[props.suit].symbol}`}><span>{Ranks[props.rank].symbol}</span><span>{Suits[props.suit].symbol}</span></p>
            </PlayingCard>
        )
    } else {
        return (
            <li>
                <p data-suit=""><span></span><span></span></p>
            </li>
        )
    }
}


//width: ${props => props.width}rem;
//height: ${props => props.width*1.4}rem;
const cardwidth = 192;
const cardheight = (cardwidth * 1.4); // poker card 

const PlayingCard = Styled.li`
    font: 100% 'Arial';
    width: ${cardwidth}px;
    height: ${cardheight}px;
    top: 0px;
    left: 0px;
    list-style: none;
    background-color: #fff;
    background-image: url('../../assets/whitey.png');
    border-radius: 15px;
    box-shadow: inset 0 0 80px rgba(150, 100, 50, 0.5), 0 0 3px #966432;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    perspective: 1000;
    transform: translateZ(0deg);
    overflow: hidden;
`
