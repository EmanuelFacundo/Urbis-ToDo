import './InputAuth.css'
import React from 'react'
import If from '../components/operator/If'

export default function InputAuth(props) {
    return (
        <If test={ props.hiden }>
            <input {...props.input} type={props.type}
                className='input'
                placeholder={props.placeholder}
                readOnly={props.readOnly} />
        </If>
    )
}
