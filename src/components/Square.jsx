import 'bootstrap/dist/css/bootstrap.css'
import '../styles.css'

export default function Square({ value, onSquareClick }) {
    return (
        <button className={'square'} onClick={onSquareClick}>
            {value}
        </button>
    )
}