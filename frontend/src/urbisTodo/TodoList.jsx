import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { getList } from './TodoAction'



class TodoList extends Component {

    renderRows() {
        const list = this.props.todo || []

        return list.map(todo => (
            <tr key={todo._id}>
                <th>
                    {todo.description}
                </th>
                <th>
                    {todo.data}
                </th>
                <th>
                    <button className="btn btn-success" hidden={todo.done}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="btn btn-warning" hidden={todo.done}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button className="btn btn-danger" hidden={!todo.done}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </th>
            </tr>
        ))
    }


    render() {


        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>

                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ todo: state.todo.list })
const mapDispatchToProps = dispacth => bindActionCreators({ getList }, dispacth)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

