import React, {useState} from "react";
import NameInput from "../Components/NameInput";
import {useNavigate, useParams} from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [hasError, setHasError] = useState(false);
    const errorText = "Please enter name for the two players"
    const headline = "Before you start please enter the names of the players"

    const onPlayer1Change = (e) => {
        setHasError(false)
        setPlayer1(e.target.value)
    };

    const onPlayer2Change = (e) => {
        setHasError(false)
        setPlayer2(e.target.value)
    };

    const onClick = () => {
        if (!!player1 && !!player2) {
            navigate(`/game/${player1}/${player2}`);
        } else {
            setHasError(true)
        }
    };


    return (
        <div className="landing-page">
            <div className={"landing-page-headline"}>{headline}</div>
            <NameInput key="player1" label="Player 1:" name={player1} onChange={onPlayer1Change}/>
            <NameInput key="player2" label="Player 2:" name={player2} onChange={onPlayer2Change}/>
            {hasError && <div className="error">{errorText}</div>}
            <button className="start-game-button" onClick={onClick}>Start Game</button>
        </div>
    );
};

export default LandingPage;