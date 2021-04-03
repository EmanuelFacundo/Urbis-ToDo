import './PagerHeader.css'

import React from 'react'

export default function PagerHeader(props) {
    return (
        <header className='page-header'>
            <h2>{props.title} <small>{props.small}</small></h2>
        </header>
    )
}