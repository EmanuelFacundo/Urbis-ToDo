import React from 'react'
import { Route, BrowserRouter, Switch, } from 'react-router-dom'

import Todo from '../components/urbisTodo/Todo'
import About from '../components/about/About'



export default function Routes(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/todo' component={Todo} exact />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}