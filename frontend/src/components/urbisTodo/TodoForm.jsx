import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

import Grid from '../templates/Grid'

class TodoForm extends Component {

    render() {
        return (
            <div role='form' className=" todoForm nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 white">
                <Grid cols='12 9 10'>
                    <input id='description' className="form-control"
                        placeholder="Adicione uma tarefa" />
                </Grid>
                <Grid cols='12 3 2'>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Grid>
            </div>
        )
    }
}

export default TodoForm