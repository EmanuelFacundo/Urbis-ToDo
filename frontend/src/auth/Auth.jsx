import './Auth.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { reduxForm, Field } from 'redux-form'
import Grid from '../components/templates/Grid'
import Input from './InputAuth'

class Auth extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="wrapper fadeInDown">
                <div className="formContent col-form-label col-form-label-lg col-form-label-sm">
                    <div>
                        <img width={150} src="http://taylorehat.com/images/todo-cloud-hero.png"
                            />
                    </div>
                    <form action="">
                        <Field component={Input} type="input" name="Nome"
                            placeholder="Nome" icon="user" hiden={true}/>
                        <Field component={Input} type="input" name="email"
                            placeholder="Email" icon="user" hiden={true}/>
                        <Field component={Input} type="input" name="Password"
                            placeholder="Password" icon="user" hiden={true}/>
                        
                        <Grid cols="4">
                            <button type="submit"
                                className="btn btn-success btn-login">
                                    <FontAwesomeIcon icon={faUser}/>
                                    <b> Login</b> 
                                </button>
                            <button type="submit"
                                className="btn btn-primary btn-login">
                                    <FontAwesomeIcon icon={faUserPlus}/>
                                    <b> Sign-up</b> 
                                </button>
                        </Grid>

                    </form>
                    
                </div>
            </div>
        )
    }
}
Auth = reduxForm({ form: 'authForm' })(Auth)
export default Auth