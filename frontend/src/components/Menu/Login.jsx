import React from 'react'
import { connect } from 'react-redux'
import userIcon from '../../imagens/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Login(props) {

    const { validToken, user } = props.auth

    return (
        <div className="col-md-3 text-end">
            <a href="/" className="btn btn-primary" hidden={validToken}>Login/Sign-up</a>
            <div>
                <img src={userIcon} width={50} alt="user"/>
                <b className="col-md-3 text-white">Olá {user.name}</b>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Login)