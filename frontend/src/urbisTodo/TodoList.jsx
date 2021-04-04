import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function TodoList(props) {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <th>
                    {todo.description}
                </th>
                <th>
                    {todo.createdAt.substring(0, 10)}
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
                    {renderRows()}
                </tbody>

            </table>
        </div>
    )
}


const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)

