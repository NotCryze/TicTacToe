import Square from './Square'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function Board({ player, squares, onPlay, onRestart, onUndo }) {

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = [...squares]
        nextSquares[i] = player
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        status = winner + ' wins!'
    }
    else if (squares.every(square => square != null)) {
        status = "It's a draw!"
    }
    else {
        status = player + "'s turn"
    }


    return (
        <div className='board'>
            <div className='d-flex flex-column align-items-center mb-5'>
                <div className='status'>{status}</div>
                <div>
                    <button className={`restart-button me-3 ${winner || squares.every(square => square != null) ? 'pulse-info' : ""}`} onClick={onRestart}>RESTART</button>
                    <button className='revert-button me-3' onClick={onUndo}><FontAwesomeIcon icon={faArrowRotateLeft} /></button>
                </div>
            </div>
            <div className='playing-field'>
                {[0, 1, 2].map((row) => (
                    <div className='row' key={row}>
                        {[0, 1, 2].map((col) => {
                            const index = row * 3 + col;
                            return (
                                <Square value={squares[index]} onSquareClick={() => handleClick(index)} nr={(row * 3 + col + 1).toString()} key={index} />
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )

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
}

