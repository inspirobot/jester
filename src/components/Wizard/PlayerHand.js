import React from "react";
import Hand from "./Hand";
import Card from "./Card";

const SUIT = Object.freeze({"SPADES":0, "HEARTS":1, "DIAMONDS":2, "CLUBS":3 , "KINGS":4, "QUEENS":5, "ROOKS":6, "BISHOPS":7, "KNIGHTS":8, "PAWNS":9 });

const hand = [[11, 2], [12, 1], [13, 3], [1, 0]];
const spread = [[1, 3], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [0, 1], [14, 8]];
const grid = [[],[1,SUIT.PAWNS],[1,SUIT.KINGS],[1,SUIT.QUEENS],[1,SUIT.ROOKS],[2,SUIT.BISHOPS],[3, SUIT.KNIGHTS],[4, SUIT.PAWNS],[5,SUIT.KNIGHTS],[6,2],[7,1],[8,SUIT.BISHOPS],[9,0],[10,2],[11,1],[12,3],[13,0],[]]

function hand_render(hand, type) {
    return hand.map((card, index) => {
        return (
            <Card width={128} key={index} visible={!!card.length} suit={card[1]} rank={card[0]} />
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
