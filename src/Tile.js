import React from 'react'

const Tile = ({ src, z, x, y }) => {
    return <img
        alt='piece of landscape'
        src={src}
        className='tile'
        style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}
    />
}

export default Tile