import Board from "./Board";
import { useState } from 'react'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [moveNr, setMoveNr] = useState(0)
    const player = moveNr % 2 === 0 ? 'X' : 'O'
    const currentSquares = history[moveNr]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, moveNr + 1), nextSquares]
        setHistory(nextHistory)
        setMoveNr(nextHistory.length - 1)
    }

    function handleRestart() {
        setHistory([Array(9).fill(null)]);
        setMoveNr(0);
    }

    function undoMove() {
        if (moveNr > 0) {
            setMoveNr(moveNr - 1)
        }
    }

    return (
        <div className="game">
            <h1 className='text-center fw-bold'>Tic Tac Toe</h1>
            <Board player={player} squares={currentSquares} onPlay={handlePlay} onRestart={handleRestart} onUndo={undoMove} />
            <div className='footer'>&copy; cryze.dev - 2023</div>
        </div>
    );
}

