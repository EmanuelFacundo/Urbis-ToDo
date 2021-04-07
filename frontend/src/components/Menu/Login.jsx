import React from 'react'
import { connect } from 'react-redux'
import userIcon from '../../imagens/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import If from '../operator/If'

function Login(props) {

    const { validToken, user } = props.auth

    return (
        <div className="col-md-3 text-end">
            <If test={!validToken}>
                <a href="/" className="btn btn-primary">Login/Sign-up</a>
            </If>
            <If test={validToken}>
                <div>
                    <img src={userIcon} width={50} alt="user"/>
                    <b className="col-md-3 text-white">Olá {user.name}</b>
                </div>
            </If>
        </div>
    )
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Login)