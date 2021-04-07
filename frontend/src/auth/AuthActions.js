import { toastr } from 'react-redux-toastr'
import Axios from 'axios'

import { TOKEN_VALIDATED, USER_FETCHED } from './AuthConsts'


function _submit(values, url) {
    return dispatch => {
        Axios.post(url, values)
            .then(resp => {
                dispatch([
                    {type: USER_FETCHED, payload: resp.data} 
                ])
                toastr.success('Sucesso','')
            })
            .catch(e => {
                e.response.data.errors.forEach( error => toastr.error('Error', error))
            })
    }
}

export function login(values) {
    return _submit(values, `${process.env.REACT_APP_DATABASE_OAPI}/login`)
}

export function signup(values) {
    return _submit(values, `${process.env.REACT_APP_DATABASE_OAPI}/signup`)
}

export function logout() {
    return {
        type: TOKEN_VALIDATED, payload: false
    }
}

export function validateToken(token) {
    return dispatch => {
        if(token) {
            Axios.post(`${process.env.REACT_APP_DATABASE_OAPI}/validationToken`, { token })
                .then(resp => {
                    dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid })
                })
                .catch( e => {
                    dispatch({ type: TOKEN_VALIDATED, payload: false })
                })
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false })
        }
    }
}