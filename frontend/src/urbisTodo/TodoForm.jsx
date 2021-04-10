import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSearchMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { changeToDoDescription, search, add, clear, getList } from './TodoAction'

import Grid from '../components/templates/Grid'

class TodoForm extends Component {

    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    // componentDidMount() {
    //     this.props.getList(this.props.user)
    // }

    keyHandler(event) {

        const { user, description, clear, todo, getList } = this.props

        if(event.key === 'Enter') {
            event.shiftKey ? this.addDescription(description, todo) : getList(user)
        } else if(event.key === 'Escape') {
            clear() 
        }

    }

    addDescription(description, todo){
        todo.list.push({description: description})

        this.props.add(todo)
    }

    render() {
        const { getList, description, clear, todo, user } = this.props

        return (
            <div role='form' className=" todoForm nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 white">
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className="form-control"
                        placeholder="Adicione uma tarefa."
                        onChange={this.props.changeToDoDescription}
                        value={this.props.description}
                        onKeyUp={this.keyHandler} />
                </Grid>
                <Grid cols='12 3 2'>
                    <button className="btn btn-primary"
                        onClick={getList(user)}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn btn-outline-danger"
                        onClick={clear}>
                        <FontAwesomeIcon icon={faSearchMinus} />
                    </button>
                    <button className="btn btn-success"
                        onClick={() => this.addDescription(description, todo)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    description: state.todo.description, 
    todo: state.todo.user,
    user: state.auth.user
})
const mapDispatchToProps = dispatch => bindActionCreators({ changeToDoDescription, search, add, clear, getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)