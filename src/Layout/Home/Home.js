import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from "react-router-dom";
import { listDecks } from "../../utils/api/index";


function Home ({ decks }) {
const history = useHistory();
return (
    <div>
        <button onClick={() => history.push("/decks/new")}>Create Deck</button>
        <>
        {decks.map((deck, index) => {
            return (
                <>
                <h2>{deck.name}</h2>
                <p>{deck.description}</p>
                <button onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
                <button onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
                </>
            );
        })}
        </>
    </div>
);
}

export default Home;