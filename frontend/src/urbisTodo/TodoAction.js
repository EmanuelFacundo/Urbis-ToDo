import Axios from 'axios'
import { toastr } from 'react-redux-toastr'

import consts from './TodoConsts'

const BASE_URL = 'http://localhost:4040/api/urbisTodos'


export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${BASE_URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: consts.TODO_SEARCH, payload: resp.data }))

    }

}

export function changeToDoDescription(event) {
    return {
        type: consts.TODO_DESCRIPTION_CHANGED,
        payload: event.target.value
    }
}

export function add(description) {
    return dispatch => {
        Axios.post(BASE_URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
            .then(resp => toastr.success('Sucesso', 'Tarefa Adicionada com sucesso!'))
    }
}

export function markAsDone(todo){
    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
            .then(resp => toastr.success('Sucesso', `Tarefa ${todo.description} concluida.`))
    }
}

export function markAsPeding(todo){
    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
            .then(resp => toastr.info('Sucesso', `Tarefa ${todo.description} restaurada.`))
    }
}

export function clear() {
    return [
        { type: consts.TODO_CLEAR },
        search()
    ]
}
