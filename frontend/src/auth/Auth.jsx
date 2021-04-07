import './Auth.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './AuthActions'

import Grid from '../components/templates/Grid'
import Input from './InputAuth'
import Notfication from '../components/notification/Notification'
import Welcome from '../welcome/Welcome'

class Auth extends Component{
    constructor(props) {
        super(props)

        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode})
    }

    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)

    }

    render(){
        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return(
            <div className="wrapper fadeInDown">
                <div className="formContent col-form-label col-form-label-lg col-form-label-sm">
                    <div>
                        <img width={150} src="http://taylorehat.com/images/todo-cloud-hero.png"
                            alt=""/>
                    </div>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="name"
                            placeholder="Nome" icon="user" hiden={!loginMode}/>
                        <Field component={Input} type="input" name="email"
                            placeholder="Email" icon="user" hiden/>
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon="user" hiden/>
                        <Field component={Input} type="password" name="confirm_password"
                            placeholder="Confirme sua senha" icon="user" hiden={!loginMode}/>
                        
                        <Grid cols="4">
                            <button type="submit"
                                className={`${loginMode ? 'btn btn-success btn-login' :
                                            'btn btn-primary btn-login' }`}>
                                    { loginMode ? <FontAwesomeIcon icon={faUser}/> : <FontAwesomeIcon icon={faUserPlus}/> }
                                    <b> {loginMode ? ' Login' : ' Registra-se'}</b> 
                                </button>
                        </Grid>

                    </form>
                        <button className={`${!loginMode ? 'btn btn-success btn-login' :
                                'btn btn-primary btn-login' }`}
                                onClick={() => this.changeMode()}>
                            
                            { !loginMode ? <FontAwesomeIcon icon={faUser}/> : <FontAwesomeIcon icon={faUserPlus}/> }

                            <b> {!loginMode ? 'Já é cadastrado? Entrar aqui!' :
                                'Novo usuário? Registrar aqui!'} </b>
                        </button>
                </div>
                <Welcome />
                <Notfication />
            </div>
        )
    }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup}, dispatch)

export default connect(null, mapDispatchToProps)(Auth)