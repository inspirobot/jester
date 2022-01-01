import React, { useRef, useLayoutEffect, useState } from "react";

import Styled from "styled-components";
import { Card} from "react-bootstrap";
import PlayingCard from "./Wizard/Card";
import ScoreBoard from "./Wizard/ScoreBoard";
import Trump from "./Wizard/Trump"
import background_image from  '../assets/green_felt.jpg';
import { PlayerColours } from "../shared/constants";
import {backgroundtotextcolor} from "../util/color";

const players=['Snuffles', 'Mittens', 'Kitty', 'Sam', 'Bootsie', 'Cosimo', 'Oscar', 'Flinty', 'Candy', 'Tiger', "Oberon", "Fluffy", "Mr T", "Squirrel", "Mordred"]

export default function Test() {
    return (
        <Game>
            <Table players={players}/>
            <Trump card={{suit:0, rank:0}}/>
            <ScoreBoard/>
        </Game>
    )
}

function pt_on_circle(center, radius, angle) {
    let x = Math.round(center.x + radius * Math.cos(angle));
    let y = Math.round(center.y + radius * Math.sin(angle));
    return {x, y}
}

function Table(props) {
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

    const firstPlayer = (render) => {
        if (render) {
            return (
                <Card.ImgOverlay className="text-black d-flex flex-column justify-content-start p-0"> 
                    <Card.Text className="first-player">First Player</Card.Text>
                </Card.ImgOverlay>
            )
        }
    };

    const step = (2*Math.PI) / props.players.length;
    return (
        <TableWrapper ref={ targetRef }>
            <div id="center"></div>
            <div id="crosshair-x"></div>
            <div id="crosshair-y"></div>
            {   
                props.players.map((name, index) => {
                    const radius = dimensions.height/2;
                    const card_radius = radius - 75;
                    let {x, y} = pt_on_circle({x: dimensions.width/2, y: dimensions.width/2}, radius, index * step)
                    let {x: card_x1, y: card_y1} = pt_on_circle({x: dimensions.width/2, y: dimensions.width/2}, card_radius, index * step)
                    return (
                        <>
                        <Card style={{width: "100px", top:`${y}px`, left:`${x}px`, position: "absolute"}} className="text-center field" >
                            <Card.Img src={`https://placekitten.com/110/110?image=${index}`}/>
                            {firstPlayer(index == 0)}
                            <Card.ImgOverlay className="text-white d-flex flex-column justify-content-end p-0"> 
                            <Card.Text style={{background: `${PlayerColours[index]}`, opacity: '75%', color: `${backgroundtotextcolor(PlayerColours[index])}`}}>{name}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <div style={{ position: 'absolute', 
                            transform: 'translate(-50%, -50%)', 
                            top:`${card_y1}px`, left:`${card_x1}px`}} >
                            <PlayingCard width={dimensions.height/8} visible='true' suit='0' rank={index} />     
                        </div>
                        </> 
                    );   
                })
            };
        </TableWrapper>
    )
}

const Game=Styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
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
.first-player {
    background: rgba(192, 192, 0, 0.6);
}
.field { 
    position: absolute; 
    transform: translate(-50%, -50%); 
}
> #crosshair-x { width: 100%; height: 1px; background: #000; position: absolute; left: 0; top: 50%; }
> #crosshair-y { width: 1px; height: 100%; background: #000; position: absolute; left: 50%; top: 0; }

`
