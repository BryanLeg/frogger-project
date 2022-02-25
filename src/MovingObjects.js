import React from 'react'
import { truckDown, truckUp, boatDown, boatUp } from './images'
import { WORLD_SIZE, TILE_ASPECT_RATIO } from './constants'

const MovingObjects = ({ x, y, dir, type }) => {
    const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
    const yBase = yOffset * y + yOffset / 1.5;
    const xBase = 50 - (100 / 19) * y;
    const xAbs = xBase + (50 / 9) * x;
    const yAbs = yBase + yOffset * x;

    let src;
    if (type === 'boat' && dir === 'up') {
        src = boatUp
    } else if (type === 'boat' && dir === 'down') {
        src = boatDown
    } else if (type === 'truck' && dir === 'up') {
        src = truckUp
    } else if (type === 'truck' && dir === 'down') {
        src = truckDown
    }

    return <img
        className={type}
        src={src}
        alt={type}
        style={{
            left: `${xAbs}%`,
            top: `${yAbs}%`,
            opacity: x < 0 || x > 8 ? 0 : 1
        }} />
}

export default MovingObjects