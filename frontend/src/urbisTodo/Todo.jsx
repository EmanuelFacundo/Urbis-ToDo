import React from 'react'

import PagerHeader from '../components/templates/PagerHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Todo(props){


    return(
        <div className="container">
            <PagerHeader title = "Lista" small="Tarefas" />
            <TodoForm />
            <TodoList />
        </div>
    )

}