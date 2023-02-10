import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import { useState, useEffect } from "react";
import { listDecks } from "../utils/api";


import { BrowserRouter as Route, Switch } from "react-router-dom";

function Layout() {
  const [decks, setDecks] = useState([]);
   
    useEffect(() => {
        async function loadDecks() {
            const response = listDecks();
            const decksFromAPI = await response;
            setDecks(decksFromAPI);
        }
        loadDecks()
    }, []);

    
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks}/>
          </Route>
      
      <Route>
        <NotFound />
      </Route>      
      </Switch>
      </div>
    </div>
  );
}

export default Layout;
