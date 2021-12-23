import React from "react";
import Styled from "styled-components";
import cardbackground from '../assets/whitey.png'

export default function Test() {
    return (
        <Wrapper>
            <ul className="test-hand">
                <li className="test-card" data-value="A ♣">
                    <p data-suit="♣">
                        <span>A</span><span>♣</span>
                    </p>
                </li>
            </ul>
        </Wrapper>   
    )
}


const Wrapper=Styled.div`
.test-hand {
    LI {
        width: 254px;
        height: 396px;
        padding: 1% 0 1% 0;
        top: 0px;
        left: 0px;
        list-style: none;
        position: absolute;
        text-align: left;
        border-radius: 15px;
        box-shadow: inset 0 0 80px rgba(150, 100, 50, 0.5), 0 0 3px #966432;
        background-image: url(${cardbackground});
        transform-style: preserve-3d;
        backface-visibility: hidden;
        perspective: 1000;
        transform: translateZ(0deg);
        overflow: hidden;
        &:before, &:after {
            content: attr(data-value);
            font-size: 48px;
            text-align: center;
            width: 48px;
            line-height: 36px;        
            position: absolute;        
        }
        &:after {
            right: -1px;
            bottom: 2.5%;
            transform: rotate(180deg);
        }
        > P {
            height: 100%;
            display: flex;
            justify-content: center;
            align-content: center;            
            flex-direction: column;
            text-align: center;
            font-size: 95px;
            padding-bottom: 20px;
            > SPAN:first-child {
              display: none;
            }
        }
        &[data-value^='A'] > P {
        }
        &[data-value='A ♠'] > P {
            font-size: 240px;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 -3px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
        }
        &[data-value^='2'] > P {
            &:after {
                content: attr(data-suit);
                transform: rotate(180deg);
            }
        }        
    }
}
.test-card {
}
`;