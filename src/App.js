import Game from "./Pages/Game";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navigation from "./Components/Navigation";
import Players from "./Pages/Players";
import Player from "./Pages/Player";
import PageNotFound from "./Pages/PageNotFound";

function App() {
    return (
        <Router>
            <>
                <Navigation/>
                <Routes>
                    <Route path='/' exact element={<Game/>}/>
                    <Route path="/players" exact element={<Players/>}/>
                    <Route path="/players/:id" exact element={<Player/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </>
        </Router>
    );
}

export default App;
