// Arrange the children in a circle

import React from "react";

function pt_on_circle(center, radius, angle) {
    let x = Math.round(center.x + radius * Math.cos(angle));
    let y = Math.round(center.y + radius * Math.sin(angle));
    return {x, y}
}

export default function CircleLayout(props) {
    const {x:center_x, y:center_y, radius} = props;
    const step = (2*Math.PI) / React.Children.count(props.children);

    return React.Children.map(props.children, (child, index) => {
        let {x, y} = pt_on_circle({x: center_x, y: center_y}, radius, index * step)
        return React.cloneElement(child, {x:x, y:y}, null)
    })
};   
