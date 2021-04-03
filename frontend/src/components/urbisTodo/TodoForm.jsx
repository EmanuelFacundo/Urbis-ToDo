import React, { Component } from 'react'
import Grid from '../templates/Grid'


class TodoForm extends Component{

    render(){
        return(
            <div role='form' className="todoForm">
                <Grid cols='12 9 10'>
                    <input id='description' className="form-control"
                        placeholder="Adicione uma tarefa" />
                </Grid>
            </div> 
        )
    }
}

export default TodoForm