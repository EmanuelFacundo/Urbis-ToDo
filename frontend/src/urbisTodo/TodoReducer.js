import consts from './TodoConsts'

const INITIAL_STATE = {
    description: '',
    list: [ ]   
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case consts.TODO_DESCRIPTION_CHANGED:
            return {...state, description: action.payload}
        case consts.TODO_SEARCH:
            return {...state, list: action.payload.data }
        case consts.TODO_CLEAR:
            return {...state, description: ''}
        default:
            return state
    }
}