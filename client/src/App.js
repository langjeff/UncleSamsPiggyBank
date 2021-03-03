import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import Save from "./pages/Save"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/save" component={Save} />
      </div>
    </Router>
  );
}

export default App;
