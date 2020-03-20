import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './component/header';
import Home from './component/home';
import CreateGossip from './component/createGossip';
import PostDetails from './component/postDetails';
function App() {
  return (
    <Router>
        <div className="container-fluid">
          <div>
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/create-gossip" exact component={CreateGossip} />
            <Route path="/gossip/:id" match component={PostDetails} />

          </div>
        </div>

      </Router>
  );
}

export default App;
