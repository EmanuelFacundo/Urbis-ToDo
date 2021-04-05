import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import Menu from '../components/menu/Menu'
import Routes from './Routes'
import Notification from '../components/notification/Notification'

export default function App(props) {
    

    return (
        <div className="app">

            <Menu />
            <Notification />
            <Routes />
        </div>
    )
}