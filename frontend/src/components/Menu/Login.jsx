import React from 'react'
import { connect } from 'react-redux'
import userIcon from '../../imagens/user.png'
import Logout from '../logout/Logout'
import If from '../operator/If'

function Login(props) {

    const { user } = props.auth
    try {
        return (
            <div className="col-md-3 text-end">
                <If test={!user.name}>
                    <a href="/" className="btn btn-primary">Login/Sign-up</a>
                </If>
                <If test={user.name}>
                    <div className="">
                        <img src={userIcon} width={50} alt="user"/>
                        <b className="col-md-3 text-white">Olá {user.name}</b>
                        <Logout />
                    </div>
                </If>
            </div>
        )
        
    } catch (error) {
        return(
            <div className="col-md-3 text-end">
                <a href="/" className="btn btn-primary">Login/Sign-up</a>
            </div>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Login)