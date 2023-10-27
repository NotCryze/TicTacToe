import { useState } from 'react'
import Square from './Square'
import 'bootstrap/dist/css/bootstrap.css'

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(index) {
        const nextSquares = [...squares]
        nextSquares[index] = 'X'
        setSquares(nextSquares)
    }

    return (
        <div className='board'>
            <div className='row'>
                <Square value={squares[0]} onSquareClick={handleClick} />
                <Square value={squares[1]} onSquareClick={handleClick} />
                <Square value={squares[2]} onSquareClick={handleClick} />
            </div>

            <div className='row'>
                <Square value={squares[3]} onSquareClick={handleClick} />
                <Square value={squares[4]} onSquareClick={handleClick} />
                <Square value={squares[5]} onSquareClick={handleClick} />
            </div>

            <div className='row'>
                <Square value={squares[6]} onSquareClick={handleClick} />
                <Square value={squares[7]} onSquareClick={handleClick} />
                <Square value={squares[8]} onSquareClick={handleClick} />
            </div>
        </div>
    )
}