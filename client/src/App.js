import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/auth" component={Auth} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
