import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './component/header';
import Home from './component/home';
function App() {
  return (
    <Router>
        <div className="container-fluid">
          <Header/>
        <Route path="/" exact component={Home} />
        </div>

      </Router>
  );
}

export default App;
