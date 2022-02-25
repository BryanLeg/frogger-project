import React from 'react'
import Boats from './Boats'
import Frog from './Frog'
import Landscape from './Landscape'
import Trucks from './Trucks'

const World = () => {
    return (
        <div className='world'>
            <Landscape />
            <Trucks />
            <Boats />
            <Frog />
        </div>
    )
}

export default World