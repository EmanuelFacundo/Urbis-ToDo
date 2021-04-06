import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import Menu from '../components/menu/Menu'
import Routes from './Routes'
import Notification from '../components/notification/Notification'
import dotenv from 'dotenv'

import Auth from '../auth/Auth'

export default function App(props) {
    dotenv.config()
    
   console.log(process.env.DATABASE)

    return (
        <div className="app">

            <Menu />
            <Notification />
            <Auth />
            {/* <Routes /> */}
        </div>
    )
}