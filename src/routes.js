import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Rebus from './components/rebus'

export default function Routes() { 
    return (
            <Switch>
                <Route 
                    exact path="/" 
                    render={() => <App/>}>
                </Route>
                <Route 
                    exact path="/rebus"
                    render={() => <Rebus/>}>
                </Route>
            </Switch>
        )
}

