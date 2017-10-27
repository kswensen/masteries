import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import ReduxMastery from './Components/ReduxMastery/ReduxMastery';

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/redux' component={ReduxMastery} />
    </Switch>
)