import React from "react";
import { getCurvePoints } from "../../util/Curve";
import Styled from "styled-components";



function getCardTransform(count, type) {
    if (type === "spread") {
        let start_angle = -((count-1)*6/2);
        let curve = getCurvePoints({x:0, y:0}, {x:count*1.6, y:0}, 11, count);
        return curve.map((point, index)=>{return {x: point.x, y:point.y, angle:start_angle + 6 * index}})
    } else if (type === "hand") {
        let curve = getCurvePoints({x:0, y:0}, {x:0, y:0}, 11, count);
        let start_angle = -count/2;
        return curve.map((point, index)=>{return {x: point.x, y:point.y, angle:start_angle + 3 * index}})
    } else {
        let curve = getCurvePoints({x:0, y:0}, {x:count*5, y:0}, 11, count);
        let start_angle = 0;
        return curve.map((point, index)=>{return {x: point.x, y:point.y, angle:start_angle}})
    }
}

function getCardHoverTransform(count, type) {
        let curve = getCurvePoints({x:0, y:0}, {x:count*5, y:50}, 11, count);
        let start_angle = 0;
        return curve.map((point, index)=>{return {x: point.x, y:point.y, angle:start_angle}})
}

function getCardTableMarking(type) {
    if (type === "spread") {
        return []
    } else if (type === "hand") {

    } else if (type === "grid") {

    }   
}


export default function Hand(props) {
    function renderChildren(children) {
        let transform = getCardTransform(React.Children.count(children), props.type);
        let hover_transform = getCardHoverTransform(React.Children.count(children), props.type);

        return React.Children.map(children, (child, index) => {
            return (
                <CardWrapper 
                    transform={`translate(${transform[index].x}em, ${transform[index].y}px) rotate(${transform[index].angle}deg)`}
                    hovertransform={`translate(${transform[index].x}em, ${transform[index].y-30}px)`}>
                { child }                
                </CardWrapper>
            )            
        })
    }

    return(
        <HandWrapper className="playing-hand" id={props.type}>
            {renderChildren(props.children, props.type)}
        </HandWrapper>
    )
}

const HandWrapper=Styled.ul`
    width: 450px;
    height: 250px;
`

const CardWrapper=Styled.div`
display: inline-block;

> LI {
    transition: top 0.5s ease 0.1s, left 0.5s ease 0.2s, transform 0.5s ease 0.2s;
    transform: ${props => props.transform};
}
&:hover {
    > LI {
        cursor: pointer;
        box-shadow: inset 0 0 80px rgba(150, 100, 50, 0.3), 0 0 30px rgba(255, 255, 200, 0.8);
        transform: ${props => props.hovertransform};
        z-index:1;
    }
}
`