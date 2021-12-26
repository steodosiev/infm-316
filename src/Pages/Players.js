import React, {useState, useEffect} from "react";
import PlayerCard from "../Components/PlayerCard";

const Players = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://reqres.in/api/users?page=1')
        const items = await data.json();
        setUsers(items.data)
    }

    const usersMap = users.map(user => (
        <PlayerCard key={user.id} firstName={user.first_name} lastName={user.last_name} avatarUrl={user.avatar}
                    userId={user.id}/>
    ))
    return (
        <div className="players-list">
            {usersMap}
        </div>
    );
};

export default Players;