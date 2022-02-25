import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { TILE_ASPECT_RATIO, WORLD_SIZE } from './constants';
import { frogDead, frogNE, frogNW, frogSE, frogSW } from './images';

const Frog = () => {
    const frogState = atom({
        key: 'frogState',
        default: {
            x: 4,
            y: 8,
            dir: 'up',
            dead: false
        }
    });
    const { x, y, dir } = useRecoilValue(frogState);
    const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
    const yBase = yOffset * y + yOffset / 1.5;
    const xBase = 50 - (100 / 19) * y;
    const xAbs = xBase + (50 / 9) * x;
    const yAbs = yBase + yOffset * x;

    let src;
    if (dir === 'up') {
        src = frogNE
    } else if (dir === 'down') {
        src = frogSW
    } else if (dir === 'right') {
        src = frogSE
    } else if (dir === 'left') {
        src = frogNW
    }
    return <img className='frog' src={src} alt='frog' style={{ left: `${xAbs}%`, top: `${yAbs}%` }} />
}

export default Frog