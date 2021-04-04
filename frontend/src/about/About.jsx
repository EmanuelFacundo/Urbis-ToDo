import React from 'react'
import PagerHeader from '../components/templates/PagerHeader'

export default function About(props) {
    return (
        <div className="container">
            <PagerHeader title="Sobre" small="Desafio Urbis" />
            <h5>Implementar um sistema de lista de tarefas
            (ToDo), onde o usuário possa criar, excluir ou
            concluir uma tarefa. As requisições deverão ser
            feitas por meio de uma api para cada ação.
            O usuário deverá fazer login na aplicação com
            um email e uma senha.</h5>
        </div>
    )
}