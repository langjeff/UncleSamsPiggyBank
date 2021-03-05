import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import Save from "./pages/Save";
import "./App.css";
=======
import "./App.css";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
<<<<<<< HEAD
>>>>>>> 89338205800422898f26c709738526797636291e
=======
import Save from "./pages/Save";
>>>>>>> fe9968c8bfa0abf1822352aaf049af95f9a63b7e

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
