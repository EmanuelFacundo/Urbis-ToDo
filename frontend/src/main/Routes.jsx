import React from 'react'
import { Route, BrowserRouter, Switch, } from 'react-router-dom'

import Todo from '../urbisTodo/Todo'
import About from '../about/About'
import Welcome from '../welcome/TodoWelcome'



export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Welcome} exact />
                <Route path='/todo' component={Todo}  />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}