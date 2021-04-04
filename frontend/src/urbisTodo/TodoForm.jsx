import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSearchMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { changeToDoDescription, search, add, clear } from './TodoAction'

import Grid from '../components/templates/Grid'

class TodoForm extends Component {

    componentDidMount(){
        this.props.search()
    }

    render() {

        const { add, search, description, clear } = this.props

        return (
            <div role='form' className=" todoForm nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 white">
                <Grid cols='12 9 10'>
                    <input type="text" id='description' className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeToDoDescription}
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    <button className="btn btn-primary" onClick={search}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn btn-outline-danger" onClick={clear}>
                        <FontAwesomeIcon icon={faSearchMinus} />
                    </button>
                    <button className="btn btn-success" onClick={() => add(description)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeToDoDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)