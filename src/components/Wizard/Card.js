import React from "react";
import { Ranks, Suits } from "../../shared/constants";
import Styled from "styled-components";

import cardfinish from '../../assets/whitey.png';

export default function Card(props) {
    if (props.visible) {
        return (        
            <PlayingCard 
                cardwidth={props.width}
                background_image={props.rank === 0 ? Suits[props.suit].facecards[4] : Suits[props.suit].facecards[props.rank-11]}
                style={{
                    color: `${Suits[props.suit].colour}`,
                }} data-value={`${Ranks[props.rank].symbol} ${Ranks[props.rank].symbol !== 'W' && Ranks[props.rank].symbol !== 'JE' ? Suits[props.suit].symbol : ''}`}>
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



const PlayingCard = Styled.li( props => {
    const { cardwidth, background_image} = props;
    const cardheight = cardwidth * 1.4;
    const pip_right_xoff = 110/254 * cardwidth;
    const pip_bottom_yoff = cardheight/1.56;
    return `
{
    font: 100% 'Arial';
    transform: scale(1,1);
    background-image: url(${cardfinish});
    background-color: #fff;
    width: ${cardwidth}px;
    height: ${cardheight}px;
    list-style: none;
    box-shadow: inset 0 0 ${.25*cardwidth}px rgba(150, 100, 50, 0.25), 0 0 3px #966432;
    border-radius: ${.06*cardwidth}px;
    &:before, &:after {
        letter-spacing: ${-.03*cardwidth}px;
        margin-top: ${.02*cardwidth}px;
        content: attr(data-value);
        font-size: ${.2*cardwidth}px;
        text-align: center;
        width: ${.15*cardwidth}px;
        line-height: ${.13*cardheight}px;        
        position: absolute;        
    }
    &:after {
        right: -1px;
        bottom: 2.25%;
        transform: rotate(180deg);
    }
    > P {
        display: block;
        position: absolute;
        font-size: ${.375*cardwidth}px;
        width: 100%;
        height: 100%;
        > SPAN:first-child {
          display: none;
        }
    }
    &[data-value^='2'] > P, &[data-value^='3'] > P, &[data-value^='4'] > P, &[data-value^='5'] > P, &[data-value^='6'] > P, &[data-value^='7'] > P, &[data-value^='8'] > P, &[data-value^='9'] > P, &[data-value^='10'] > P {
        width: 0px;
        height: 0px;
        line-height: 0px;
        margin-top: ${.24*cardwidth}px;
        &:after {
            display: inline-block;
            content: attr(data-suit);
            transform: rotate(180deg);
            padding-bottom: ${.65*cardheight            }px;
        }
    }

    &[data-value^='A'] > P {
        margin-left: ${.38*cardwidth}px;
        margin-top: ${.35*cardheight}px;
    }        
    &[data-value='A ♠'] > P {
        margin-left: ${.23*cardwidth}px;
        margin-top: ${.05*cardheight}px;
        font-size: ${cardwidth}px;
        text-shadow: -1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff,0 -3px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000;
    }
    &[data-value^='2'] > P {
        margin-left: ${.38*cardwidth}px;
        &:after {
            margin-left: 0px;
        }
    }        
    &[data-value^='3'] > P {
        margin-left: ${.38*cardwidth}px;
        text-shadow: 0px ${pip_bottom_yoff/2}px;      
        &:after {
            margin-left: 0px;
            text-shadow: 0px 0px 0px transparent;      
        }
    }        
    &[data-value^='4'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px;      
        &:after {
            margin-left: ${.44*cardwidth}px;
        }
    }        
    &[data-value^='5'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/2}px ;      
        &:after {
            margin-left: ${.44*cardwidth}px;
            text-shadow: ${pip_right_xoff}px 0px;      
        }
    }        
    &[data-value^='6'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, 0px ${pip_bottom_yoff/2}px, ${pip_right_xoff}px ${pip_bottom_yoff/2}px ;      
        &:after {
            margin-left: ${.44*cardwidth}px;
            text-shadow: ${pip_right_xoff}px 0px;      
        }
    }        
    &[data-value^='7'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/4}px, 0px ${pip_bottom_yoff/2}px, ${pip_right_xoff}px ${pip_bottom_yoff/2}px ;      
        &:after {
            margin-left: ${.44*cardwidth}px;
            text-shadow: ${pip_right_xoff}px 0px;      
        }
    }        
    &[data-value^='8'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/4}px, 0px ${pip_bottom_yoff/2}px, ${pip_right_xoff}px ${pip_bottom_yoff/2}px ;      
        &:after {
            margin-left: ${.44*cardwidth}px;
            text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/4}px;      
        }
    }        
    &[data-value^='9'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/2}px, 0px ${pip_bottom_yoff/3}px, ${pip_right_xoff}px ${pip_bottom_yoff/3}px;      
        &:after {
            margin-left: ${.44*cardwidth}px;
            text-shadow: ${pip_right_xoff}px 0px, 0px ${pip_bottom_yoff/3}px, ${pip_right_xoff}px ${pip_bottom_yoff/3}px;      
        }
    }        
    &[data-value^='10'] > P {
        margin-left: ${.16*cardwidth}px;
        text-shadow: ${pip_right_xoff}px 0px, ${pip_right_xoff/2}px ${pip_bottom_yoff/6}px, 0px ${pip_bottom_yoff/3}px, ${pip_right_xoff}px ${pip_bottom_yoff/3}px;      
        &:after {
            margin-left: ${.44*cardwidth}px;
        }
    }
    &[data-value^='J'] > P,
    &[data-value^='Q'] > P,
    &[data-value^='K'] > P,
    &[data-value^='W'] > P,
    &[data-value^='JE'] > P {
        color: transparent;
        width: 65%;
        height: 80%;
        margin-left: ${.175*cardwidth}px;
        margin-top:  ${.14*cardwidth}px;
        border: 1px solid #000;        
        background-position: center;
        background-size: cover;
        background-image: url(${background_image});
    }        
    &[data-value^='W'], &[data-value^='JE'] {
        &:before, &:after {
            font-family: 'Brush Script MT', cursive;
            color: #0099FF;
        }
    }
}  
`});


