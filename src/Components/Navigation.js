import React from "react";
import {Link} from "react-router-dom"

const Navigation = () => {
    return (<nav>
        <ul className="nav-links">
            <Link to="/">
                <li>Game</li>
            </Link>
            <Link to="/players">
                <li>Players</li>
            </Link>
        </ul>
    </nav>)
}

export default Navigation