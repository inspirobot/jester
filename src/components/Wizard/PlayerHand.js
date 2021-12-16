import "./PlayerHand.css"
import React from "react";
import { Ranks, Suits } from "../../shared/constants";

const SUIT = Object.freeze({"SPADES":0, "HEARTS":1, "DIAMONDS":2, "CLUBS":3 });

const hand = [[11, 2], [12, 1], [13, 3], [1, 0]];
const spread = [[1, 3], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1]];
const grid = [[1,SUIT.SPADES],[2,SUIT.DIAMONDS],[3, SUIT.CLUBS],[4, SUIT.HEARTS],[5,0],[6,2],[7,1],[8,3],[9,0],[10,2],[11,1],[12,3],[13,0],[]]

function hand_render(hand) {
    return hand.map((card, index) => {
        if (card.length) {
            return (
                <li key={index} data-value={`${Ranks[card[0]].symbol} ${Suits[card[1]].symbol}`}>
                    <p data-suit={`${Suits[card[1]].symbol}`}><span>{Ranks[card[0]].symbol}</span><span>{Suits[card[1]].symbol}</span></p>
                </li>
            )
        } else {
            return (
                <li key={index}>
                    <p data-suit=""><span></span><span></span></p>
                </li>
            )
        } 
    })
};

export default function GameTable() {
    return ( <> 
                <div className="header"> 
                CSS Card Tricks -
                <a href="https://designshack.net/?p=38208">Click Here</a>
                to head to Design Shack article
                </div>
                <ul id="hand">
                    {hand_render(hand)}
                </ul>
                <ul id="spread">
                    {hand_render(spread)}
                </ul>
                <ul id="grid">
                    {hand_render(grid)}
                </ul>
            </>
    )
}

