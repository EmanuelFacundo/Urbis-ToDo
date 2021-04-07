import React from 'react'
import { Route, BrowserRouter, Switch, } from 'react-router-dom'

import About from '../about/About'
import AuthOrApp from './AuthOrApp'



export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={AuthOrApp} exact />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}