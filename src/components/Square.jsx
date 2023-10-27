import 'bootstrap/dist/css/bootstrap.css'
import '../styles.css'

export default function Square({ value, onSquareClick, nr }) {
    let backgroundColor = ''
    if(value){
        backgroundColor = value === 'X' ? 'player-1' : 'player-2'
    }
    return (
        <button className={`square square-${nr} ${backgroundColor}`} onClick={onSquareClick}>
            {value}
        </button>
    )
}