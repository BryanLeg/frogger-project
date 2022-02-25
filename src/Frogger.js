import React, { useEffect } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import Inputs from './Inputs'
import World from './World'

const Frogger = () => {
    // Frog
    const frogState = atom({ key: 'frogSate', default: {} })
    const [frog, setFrog] = useRecoilState(frogState)

    // Trucks
    const trucks = useRecoilValue(atom({ key: 'trucksState', default: [] }))
    // Boats
    const boats = useRecoilValue(atom({ key: 'boatsSate', default: [] }))
    // GameOver
    const [gameOver, setGameOver] = useRecoilState(atom({
        key: 'gameOverState',
        default: false
    }))

    // Check for truck collision
    useEffect(() => {
        if (isTruckCollision(frog, trucks)) {
            setGameOver(true)
            setFrog({
                ...frog,
                dead: true
            })
        }
    })

    // 

    return (
        <>
            <World />
            <Inputs />
        </>
    )
}

export default Frogger