import React from 'react'

import PagerHeader from '../templates/PagerHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default function Todo(props){

    return(
        <div className="container">
            <PagerHeader title = "Cadastro" small="Tarefas" />
            <TodoForm />
            <TodoList />
        </div>
    )

}