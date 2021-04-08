import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'

import App from './App'
import Auth from '../auth/Auth'
import { validateToken } from '../auth/AuthActions'

class AuthOrApp extends Component{

    componentDidMount(){
        if(this.props.auth.user){
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render(){
        const { user, validToken } = this.props.auth
        
        if(user && validToken) {
            Axios.defaults.headers.common["Authorization"] = user.token
            return <App>{this.props.children}</App>
        } else if(!user && !validToken) {
            return <Auth />
        } else {
            return false
        }

    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)