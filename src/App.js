import React from "react";
import "./App.css";
import Index from "./Components/Layout/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import {Provider} from "./context";
import Lyrics from "../src/Components/tracks/Lyrics"
/* 7d1d942dd2093bd695099b6ff11b4606 */

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
