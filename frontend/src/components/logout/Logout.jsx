import './Logout.css'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout }from '../../auth/AuthActions'

function Logout(props){

    return (
        <div>
            <button className="btn-logout btn btn-outline-danger text-white" onClick={props.logout}>
                <b>Sair</b>
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(null, mapDispatchToProps)(Logout)