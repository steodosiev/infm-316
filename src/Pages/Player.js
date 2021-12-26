import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Player = () => {
    const [user, setUser] = useState({})
    let {id} = useParams();
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://reqres.in/api/users/${id}`)
        const items = await data.json();
        setUser(items.data)
    }
    const maxGamesPlayed = 1000;
    const minGamesPlayed = 100;
    const playedGames = Math.floor(Math.random() * (maxGamesPlayed - minGamesPlayed + 1)) + minGamesPlayed;
    const gamesWon = playedGames - 87;


    return (
        <div className="player-details-wrapper">
            <img className="player-details-avatar" src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
            <div className="player-details-name">{user.first_name} {user.last_name}</div>
            <div className="player-details-email">Email: {user.email}</div>
            <div className="player-details-games-played">Games Played: {playedGames}</div>
            <div className="player-details-games-won">Games Won: {gamesWon}</div>
        </div>
    );
};

export default Player;