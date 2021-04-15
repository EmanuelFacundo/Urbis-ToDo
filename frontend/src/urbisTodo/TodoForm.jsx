import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

import { changeToDoDescription, add, clear, getList } from './TodoAction'

import Grid from '../components/templates/Grid'

class TodoForm extends Component {

    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(event) {

        const { description, clear, todo, getList } = this.props

        if(event.key === 'Enter') {
            event.shiftKey ? this.addDescription(description, todo) : getList(todo)
        } else if(event.key === 'Escape') {
            clear() 
        }

    }

    addDescription(description, todo){
        todo.list.push({description: description})

        this.props.add(todo)
    }

    render() {
        const { description, clear, todo } = this.props

        return (
            <div role='form' className=" todoForm nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 white">
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className="form-control"
                        placeholder="Adicione uma tarefa."
                        onChange={this.props.changeToDoDescription}
                        value={description}
                        onKeyUp={this.keyHandler} />
                </Grid>
                <Grid cols='12 3 2'>
                    <button className="btn btn-success mButton"
                        onClick={() => this.addDescription(description, todo)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className="btn btn-outline-danger"
                        onClick={clear}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    description: state.todo.description, 
    todo: state.todo.user
})
const mapDispatchToProps = dispatch => bindActionCreators({ changeToDoDescription, add, clear, getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)