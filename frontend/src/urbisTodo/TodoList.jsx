import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPencilAlt, faTrashAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

import { markAsDone, markAsPeding, remove, edit, getList } from './TodoAction'

class TodoList extends Component {

    componentDidMount() {
        this.props.getList(this.props.user)
    }

    renderRows(){
        const list = this.props.userTodo.list || []

        const { markAsDone, markAsPeding, remove, edit, userTodo } = this.props

        return list.map((todo, index) => (
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
                        onClick={() => markAsDone(userTodo, index)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="btn btn-warning" 
                        hidden={todo.done}
                        onClick={() => edit(userTodo, index, this.props.description)}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button className="btn btn-danger" 
                        hidden={!todo.done}
                        onClick={() => remove(userTodo, index)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button className="btn btn-warning" 
                        hidden={!todo.done}
                        onClick={() => markAsPeding(userTodo, index)}>
                        <FontAwesomeIcon icon={faUndoAlt} />
                    </button>
                </th>
            </tr>
        ))
    }
    
    render(){
        try {
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
                            {this.renderRows()}
                        </tbody>
        
                    </table>
                </div>
            )
        } catch (error) {
            return false
        }
        
    }  
        

}


const mapStateToProps = state => ({
    userTodo: state.todo.user, 
    description: state.todo.description,
    user: state.auth.user
})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPeding, remove, edit, getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

