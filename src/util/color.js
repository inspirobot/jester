function hextorgb(hex)
{
    const rgb = parseInt(hex.substring(1), 16);
    const r = (rgb & 0xff0000) >> 16;
    const g = (rgb & 0x00ff00) >> 8;
    const b = rgb & 0x0000ff;

    return {r, g, b};
}

function hextoluminance(hex)
{
    const {r, g, b} = hextorgb(hex);
    return ( 0.299 * r + 0.587 * g + 0.114 * b)/255;
}

export function backgroundtotextcolor(hex)
{
    return hextoluminance(hex) > .5 ? '#000000' : '#ffffff';
}

