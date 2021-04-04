import{ combineReducers } from 'redux'

import todoList from '../urbisTodo/TodoReducer'

const rootReducer = combineReducers({
    todo:todoList 
})

export default rootReducer