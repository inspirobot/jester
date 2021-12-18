import React from "react";

export default function Hand(props) {
    function renderChildren(children) {
        let start_angle = -40
        let X = 0
        let Y = 16
        let adjust= 5
    
        return React.Children.map(children, (child, index) => {
            let angle = start_angle + 6 * index;
            X = 1.6*index;
            Y = Y - adjust;
            adjust = adjust - 1;
    
            return React.cloneElement(child, {
                transform : `translate(${X}em, ${Y}px) rotate(${angle}deg)` 
            })
        })
    }

    return(
        <ul className="playing-hand" id={props.type}>
            {renderChildren(props.children)}
        </ul>
    )
}