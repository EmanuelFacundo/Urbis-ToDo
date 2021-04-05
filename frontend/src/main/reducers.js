import{ combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import todoList from '../urbisTodo/TodoReducer'

const rootReducer = combineReducers({
    todo:todoList,
    toastr: toastrReducer
})

export default rootReducer