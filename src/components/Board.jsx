import { useState } from 'react'
import Square from './Square'
import 'bootstrap/dist/css/bootstrap.css'

export default function Board() {
    const [player, setPlayer] = useState('X')
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = [...squares]
        nextSquares[i] = player
        setSquares(nextSquares)
        setPlayer(player === 'X' ? 'O' : 'X')
    }

    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        status = winner + ' wins!'
    } else {
        status = player + "'s turn"
    }

    return (
        <div className='board'>
            <div className='status'>{status}</div>
            <div className='row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} nr="1" />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} nr="2" />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} nr="3" />
            </div>

            <div className='row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} nr="4" />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} nr="5" />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} nr="6" />
            </div>

            <div className='row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} nr="7" />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} nr="8" />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} nr="9" />
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal top left to bottom right
        [2, 4, 6]  // diagonal top right to bottom left
    ]
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}