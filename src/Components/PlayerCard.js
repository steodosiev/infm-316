import React from "react";
import {Link} from "react-router-dom";

const PlayerCard = ({firstName, lastName, avatarUrl, userId}) => {
    return <Link to={`/players/${userId}`}>
        <div className="player-card">
            <img className="card-avatar" src={avatarUrl} alt={`${firstName} ${lastName}`}/>
            <div className="card-name">{firstName} {lastName}</div>
        </div>
    </Link>
}

export default PlayerCard