import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import Notification from '../components/notification/Notification'

import Todo from '../urbisTodo/Todo'

export default function App(props) {
    return (
        <div className="app">
            <Notification />
            <Todo/>
        </div>
    )
}