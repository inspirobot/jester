import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { PlayerColours } from "../../shared/constants";
import {backgroundtotextcolor} from "../../util/color";

export default function Player(props) {
    const playerColor = PlayerColours[props.position];
    const textColour = backgroundtotextcolor(playerColor);
    const borderColourStyle = props.turn ? "border-primary" : "border-light"; 
    return (
        <StyledCard {...props} className={`text-center border-5 ${borderColourStyle}`} >
            <Card.Img src={props.image}/>
            <Card.ImgOverlay className="text-black d-flex flex-column justify-content-start p-0"> 
                <Card.Text hidden={!props.first} style={{background: "rgba(192, 192, 0, 0.6)"}}>First Player</Card.Text>
            </Card.ImgOverlay>
            <Card.ImgOverlay className="text-white d-flex flex-column justify-content-end p-0"> 
                <Card.Text style={{background: `${playerColor}`, opacity: '75%', color: `${textColour}`}}>{props.name}</Card.Text>
            </Card.ImgOverlay>
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
        width: ${props => props.width}px;
        top: ${props => props.y}px;
        left: ${props => props.x}px;
        transform: translate(-50%, -50%);
        position: absolute;
        > IMG {
            border-radius: 0;
        }
    `
