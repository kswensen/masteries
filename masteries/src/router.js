import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import ReduxMastery from './Components/ReduxMastery/ReduxMastery';
import AxiosCalls from './Components/AxiosCalls/AxiosCalls';
import Parent from './Components/ParentChildren/Parent';

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/redux' component={ReduxMastery} />
        <Route path='/axios' component={AxiosCalls} />
        <Route path='/parent' component={Parent} />
    </Switch>
)