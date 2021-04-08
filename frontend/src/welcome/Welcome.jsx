import React from 'react'
import PagerHeader from '../components/templates/PagerHeader'

export default function About(props) {
    return (
        <div className="container mb-5">
            <PagerHeader title="Desafio Urbis" small="Implementação de uma lista de tarefas" />
            <h3>Faça o login para ter acesso ao sistema.</h3>
        </div>
    )
}