import Axios from 'axios'
import { toastr } from 'react-redux-toastr'

import consts from './TodoConsts'

const BASE_URL = process.env.REACT_APP_DATABASE_API


export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${BASE_URL}?sort=-createdAt${search}`)
            .then(resp =>{
                dispatch({ type: consts.TODO_SEARCH, payload: resp.data })
                // toastr.info('Sistema inicializado com sucesso!')
            }) 
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })

    }

}

export function getList() {
    return dispatch => {
        Axios.get(BASE_URL)
            .then(resp => dispatch({ type: consts.TODO_SEARCH, payload: resp.data }))
            .catch(e => e.response.data.errors.forEach(error => toastr.error('Error', error)))
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
            .then(resp =>{
                dispatch(clear())
                dispatch(search())
                toastr.success('Sucesso', 'Tarefa Adicionada com sucesso!')
                }
            )
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Necessario uma descrição', 'Adicione uma descrição e tente novamente!'))
            })
    }
}

export function markAsDone(todo){
    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => {
                dispatch(search())
                toastr.success('Sucesso', `Tarefa (${todo.description}) foi concluida.`)
                }
            )
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function markAsPeding(todo){
    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => {
                dispatch(search())
                toastr.info('Sucesso', `Tarefa (${todo.description}) foi restaurada.`)
                }
            )
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function edit(todo, description){
    const desA = todo.description

    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, { ...todo, description: description})
            .then(resp => {
                dispatch(search())
                dispatch(clear())
                toastr.success('Sucesso', `Tarefa (${desA}) foi atualizada para (${description})`)
            })
            .catch(e => {
                toastr.error('Necessario uma descrição', 'Adicione uma descrição e clique novamente')
            })
    }

}

export function remove(todo){
    return dispatch => {
        Axios.delete(`${BASE_URL}/${todo._id}`)
            .then(resp => {
                toastr.warning('Sucesso', `Tarefa (${todo.description}) foi excluida.`)
                dispatch(search())      
                } 
            )
        }
}

export function clear() {
    return [
        { type: consts.TODO_CLEAR },
        search()
    ]
}
