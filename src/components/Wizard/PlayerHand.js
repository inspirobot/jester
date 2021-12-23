import "./PlayerHand.sass"
import React from "react";
import Hand from "./Hand";
import Card from "./Card";

const SUIT = Object.freeze({"SPADES":0, "HEARTS":1, "DIAMONDS":2, "CLUBS":3 });

const hand = [[11, 2], [12, 1], [13, 3], [1, 0]];
const spread = [[1, 3], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1]];
const grid = [[1,SUIT.SPADES],[1,SUIT.DIAMONDS],[1,SUIT.HEARTS],[1,SUIT.CLUBS],[2,SUIT.DIAMONDS],[3, SUIT.CLUBS],[4, SUIT.HEARTS],[5,0],[6,2],[7,1],[8,3],[9,0],[10,2],[11,1],[12,3],[13,0],[]]

function hand_render(hand, type) {
    return hand.map((card, index) => {
        return (
            <Card key={index} visible={!!card.length} suit={card[1]} rank={card[0]} />
        )
    })
};

export default function GameTable() {
    return ( <> 
                <div className="header"/> 
                <Hand key="1" type="hand" hand={hand}>{hand_render(hand)}</Hand> 
                <Hand key="2" type="spread" hand={spread}>{hand_render(spread)}</Hand>
                <Hand key="3" type="grid" hand={grid}>{hand_render(grid)}</Hand>
            </>
    )
}
