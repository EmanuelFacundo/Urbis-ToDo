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

export function getList(value) {
    return dispatch => {
        Axios.get(BASE_URL)
            .then(resp =>{
                 dispatch({
                    type: consts.TODO_SEARCH, 
                    payload: resp.data.find(user => user.email === value.email) 
                })
            })
            .catch(e => e.response.data.errors.forEach(error => toastr.error('Error', error)))
    }
}

export function changeToDoDescription(event) {
    return {
        type: consts.TODO_DESCRIPTION_CHANGED,
        payload: event.target.value
    }
}

export function add(values) {
    return dispatch => {
        Axios.put(`${BASE_URL}/${values._id}`, values)
            .then(resp =>{
                dispatch(clear())
                dispatch(getList(values))
                toastr.success('Sucesso', 'Tarefa Adicionada com sucesso!')
                }
            )
            .catch(e => {
                toastr.error('Necessario uma descrição', 'Adicione uma descrição e tente novamente!')
            })
    }
}

export function markAsDone(todo, index){
    
    return dispatch => {
        todo.list[index] = {...todo.list[index], done: true}
        Axios.put(`${BASE_URL}/${todo._id}`, todo)
            .then(resp => {
                dispatch(getList(todo))
                toastr.success('Sucesso', `Tarefa (${todo.list[index].description}) foi concluida.`)
                }
            )
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function markAsPeding(todo, index){
    todo.list[index] = {...todo.list[index], done: false}
    
    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, todo)
            .then(resp => {
                dispatch(getList(todo))
                toastr.info('Sucesso', `Tarefa (${todo.list[index].description}) foi restaurada.`)
                }
            )
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function edit(todo, index, description){
    const des = todo.list[index].description
    todo.list[index] = {...todo.list[index], description: description}

    return dispatch => {
        Axios.put(`${BASE_URL}/${todo._id}`, todo)
            .then(resp => {
                dispatch(getList(todo))
                dispatch(clear())
                toastr.success('Sucesso', `Tarefa (${des}) foi atualizada para (${description})`)
            })
            .catch(e => {
                toastr.error('Necessario uma descrição', 'Adicione uma descrição e clique novamente')
            })
    }

}

export function remove(todo, index){
    return dispatch => {
        const des = todo.list[index].description
        todo.list.splice(index, 1)
        Axios.put(`${BASE_URL}/${todo._id}`, todo)
            .then(resp => {
                toastr.warning('Sucesso', `Tarefa (${des}) foi excluida.`)
                dispatch(getList(todo))      
                } 
            )
        }
}

export function clear() {
    return [
        { type: consts.TODO_CLEAR },
        // getList()
    ]
}
