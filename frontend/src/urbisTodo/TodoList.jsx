import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPencilAlt, faTrashAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

import { markAsDone, markAsPeding, remove, edit } from './TodoAction'

function TodoList(props) {

    const renderRows = () => {
        const list = props.list || []

        const { markAsDone, markAsPeding, remove, edit } = props

        return list.map(todo => (
            <tr key={todo._id} className={ todo.done ? 'markAsDone':''}>
                <th className="maxW">
                    {todo.description}
                </th>
                <th>
                    {todo.createdAt.substring(0, 10)}
                </th>
                <th>
                    <button className="btn btn-success" 
                        hidden={todo.done}
                        onClick={() => markAsDone(todo)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="btn btn-warning" 
                        hidden={todo.done}
                        onClick={() => edit(todo, props.description)}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button className="btn btn-danger" 
                        hidden={!todo.done}
                        onClick={() => remove(todo)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button className="btn btn-warning" 
                        hidden={!todo.done}
                        onClick={() => markAsPeding(todo)}>
                        <FontAwesomeIcon icon={faUndoAlt} />
                    </button>
                </th>
            </tr>
        ))
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>

            </table>
        </div>
    )
}


const mapStateToProps = state => ({ list: state.todo.list, description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPeding, remove, edit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

