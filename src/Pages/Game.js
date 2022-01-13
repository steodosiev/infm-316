import React, {useState} from "react";
import Board from "../Components/Board";
import {calculateWinner} from "../gameHelper";
import {useParams} from "react-router-dom";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";
    let params = useParams();

    const players = {
        X: params.player1,
        O: params.player2
    }

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current]


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

    const winnerTitle = <div className="winner-title">The Winner is: {players[winner]}!!!</div>
    const nextPlayer = stepNumber === 9 ? <h3>The Game is Draw</h3> : <h3>{"Next Player: " + players[xO]}</h3>

    return (
        <div className="game">
            {!!winner ? winnerTitle : nextPlayer}
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div className="info-wrapper">
                <div className="history-section">
                    <h3>History</h3>
                    <div className="history-wrapper">{renderMoves()}</div>

                </div>
            </div>
        </div>
    );
};

export default Game;