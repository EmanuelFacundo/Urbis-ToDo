import{ combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

import todoList from '../urbisTodo/TodoReducer'
import authReducer from '../auth/AuthReducer'

const rootReducer = combineReducers({
    todo: todoList,
    toastr: toastrReducer,
    form: formReducer,
    auth: authReducer
})

export default rootReducer