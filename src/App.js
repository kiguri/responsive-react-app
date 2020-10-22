import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import SigninPage from './pages/signin/signin.component';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={SigninPage}/>
            </Switch>
        </Router>
    );
}

export default App;
