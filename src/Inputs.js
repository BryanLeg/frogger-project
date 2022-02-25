import React from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil'

const Inputs = () => {
    const frogState = atom({
        key: "frogState",
        default: {
            x: 4,
            y: 8,
            dir: "up",
            dead: false
        }
    })
    const [frog, setFrog] = useRecoilState(frogState);
    const allowInputState = atom({
        key: 'allowInoutState',
        default: true
    })
    const [allowInput, setAllowInput] = useRecoilState(allowInputState)
    const gameOver = useRecoilValue(atom({ key: 'gameOverState', default: false }))

    let timer = useRef(false)
    useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [timer])

    const keyPressHandler = useCallback((e) => {
        e.preventDefault();
        if (gameOver || !allowInput) {
            return;
        }
        if (e.keyCode === 37) {
            setFrog({
                y: frog.y,
                x: frog.x > 0 ? frog.x - 1 : frog.x,
                dir: 'left'
            })
        } else if (e.keyCode === 38) {
            setFrog({
                x: frog.x,
                y: frog.y >= 0 ? frog.y - 1 : frog.y,
                dir: 'up'
            })
        } if (e.keyCode === 39) {
            setFrog({
                y: frog.y,
                x: frog.x < 8 ? frog.x + 1 : frog.x,
                dir: 'right'
            })
        } else if (e.keyCode === 40) {
            setFrog({
                x: frog.x,
                y: frog.y < 8 ? frog.y + 1 : frog.y,
                dir: 'down'
            })
        }
        setAllowInput(false);
        timer.current = setTimeout(() => {
            setAllowInput(true);
        }, 350)
    });


    useEffect(() => {
        window.addEventListener("keydown", keyPressHandler)
        return () => {
            window.removeEventListener('keydown', keyPressHandler)
        }
    }, [keyPressHandler])

    return ""
}

export default Inputs