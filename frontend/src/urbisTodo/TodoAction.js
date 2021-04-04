import Axios from 'axios'

import consts from './TodoConsts'

const BASE_URL = 'http://localhost:4040/api/urbisTodos'

export function getList() {
    const request = Axios.get(BASE_URL)

    return {
        type: consts.TODO_SEARCH,
        payload: request
    }
}

export const changeToDoDescription = event => ({
    type: consts.TODO_DESCRIPTION_CHANGED,
    payload: event.target.value
})
