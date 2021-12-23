// points = new Curve({x: 0, y: 0}, {x: 100, y: 0}, 5, 10);

function *CurveGenerator(start, end, radius, count) {
    yield start;

    count -= 1;
    const dx = (end.x - start.x)/count;
    const dy = (end.y - start.y)/count;    
    let cur = {...start};

    while(--count > 0) {
        cur.x += dx;
        cur.y += dy;
        yield {x: cur.x, y: cur.y }
    }

    yield end;
}

export function getCurvePoints(start, end, radius, count) { return [...CurveGenerator(start, end, radius, count)]; }

