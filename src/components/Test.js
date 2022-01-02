import React, { useRef, useLayoutEffect, useState } from "react";

import Styled from "styled-components";
import PlayingCard from "./Wizard/Card";
import Player from "./Wizard/Player";
import ScoreBoard from "./Wizard/ScoreBoard";
import Trump from "./Wizard/Trump"
import background_image from  '../assets/green_felt.jpg';
import CircleLayout from "./CircleLayout";

const players=['Snuffles', 'Mittens', 'Kitty', 'Sam', 'Bootsie', 'Cosimo', 'Oscar', 'Flinty', 'Candy', 'Tiger', "Oberon", "Fluffy", "Mr T", "Squirrel", "Mordred"]

export default function Test() {
    return (
        <Game>
            {<GameTable players={players}/>}
            {<Trump card={{suit:0, rank:0}}/>}
            <ScoreBoard/>
        </Game>
    )
}

function GameTable(props) {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        function updateSize() {
          if (targetRef.current) {
            setDimensions({
              width: targetRef.current.offsetWidth,
              height: targetRef.current.offsetHeight
            });
          }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    function renderPlayers(players) {
        return props.players.map((name, index) => {
            return <Player width={100} position={index} name={name} first={index===0} turn={index===4} image={`https://placekitten.com/110/110?image=${index}`}/>
        })
    }

    function renderCards(players, dimensions, count, width, x, y, radius) {
        let cards = [];
        for (let index=0;index<count;++index) {
            let rank=Math.floor(Math.random()*14)
            let suit=Math.floor(Math.random()*4)
            cards.push(
                <PlayingCard width={dimensions.height/8} center='false' visible='true' suit={suit} rank={rank} />     
            );   
        }
        return cards;
    }

    return (
        <TableWrapper ref={ targetRef }>
            <div id="center"></div>
            <div id="crosshair-x"></div>
            <div id="crosshair-y"></div>
            <CircleLayout x={dimensions.width/2} y={dimensions.height/2} radius={dimensions.height/2}>
                {renderPlayers(players)}
            </CircleLayout>
            <CircleLayout x={dimensions.width/2} y={dimensions.height/2} radius={dimensions.height/2 - 75} >
                {renderCards(players, dimensions, players.length, dimensions.width/8, dimensions.width/2, dimensions.width/2, dimensions.width/2 - 75)}
            </CircleLayout>
        </TableWrapper>
    )
}

const Game=Styled.div`
width: 100%;
height: 100%;
display: flex;
`

const TableWrapper=Styled.div`
height: 85%;
aspect-ratio: 1 / 1;
position: relative;
border: 1px solid #000;
background-image: url(${background_image});

> #center { 
    width: 10px; 
    height: 10px; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    background: #000; 
    transform: translate(-50%, -50%); 
}
> #crosshair-x { width: 100%; height: 1px; background: #000; position: absolute; left: 0; top: 50%; }
> #crosshair-y { width: 1px; height: 100%; background: #000; position: absolute; left: 50%; top: 0; }

`
