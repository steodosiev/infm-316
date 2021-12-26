import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {
    const squaresMap = squares.map((square, i) =>
        <Square key={i} value={square} onClick={() => onClick(i)}/>
    )
    return <div className="board">{squaresMap}</div>
}

export default Board