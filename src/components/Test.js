import React, { useRef, useLayoutEffect, useState } from "react";

import Styled from "styled-components";
import { Card} from "react-bootstrap";

const players=['Snuffles', 'Mittens', 'Kitty', 'Sam', 'Bootsie', 'Cosimo', 'Oscar', 'Flinty', 'Candy', 'Tiger', "Oberon", "Fluffy", "Mr T", "Squirrel", "Mordred"]

export default function Test() {
    return (
        <Game>
            <Table players={players}/>
        </Game>
    )
}

function Table(props) {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const step = (2*Math.PI) / props.players.length;

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

    return (
        <TableWrapper ref={ targetRef }>
            <div id="center"></div>
            <div id="crosshair-x"></div>
            <div id="crosshair-y"></div>
            {   
                props.players.map((name, index) => {
                    const radius = dimensions.height/2;
                    let x = Math.round(dimensions.width/2 + radius * Math.cos(index * step));
                    let y = Math.round(dimensions.height/2 + radius * Math.sin(index * step));
                    console.log(index, x, y);

                    return (
                    <Card style={{width: "75px", top:`${y}px`, left:`${x}px`, position: "absolute"}} className="text-center field" >
                        <Card.Img src={`https://placekitten.com/110/110?image=${index+4}`}/> 
                        <Card.Text>{name}</Card.Text>
                    </Card> 
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
height: 80%;
aspect-ratio: 1 / 1;
position: relative;
border: 1px solid #000;
> #center { 
    width: 10px; 
    height: 10px; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    background: #000; 
    transform: translate(-50%, -50%); 
}
.field { 
    position: absolute; 
    transform: translate(-50%, -50%); 
}
> #crosshair-x { width: 100%; height: 1px; background: #000; position: absolute; left: 0; top: 50%; }
> #crosshair-y { width: 1px; height: 100%; background: #000; position: absolute; left: 50%; top: 0; }

`
