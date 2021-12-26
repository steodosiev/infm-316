import React, {useState} from "react";
import Board from "../Components/Board";
import {calculateWinner} from "../gameHelper";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Restart Game";
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });

    const winnerTitle = <h1 className="winner-title">The Winner is: {winner}!!!</h1>
    const nextPlayer = stepNumber === 9 ? <h3>The Game is Draw</h3> : <h3>{"Next Player: " + xO}</h3>

    return (
        <div className="game">
            {!!winner ? winnerTitle : nextPlayer}
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div className="info-wrapper">
                <div className="history-section">
                    <h3>History</h3>
                    {renderMoves()}
                </div>
            </div>
        </div>
    );
};

export default Game;