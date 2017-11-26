import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';

const Content = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/create-account' component={CreateAccount}/>
            </Switch>
        </div>
    )


};

export default Content;