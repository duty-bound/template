import { SET_NAME } from './action-types'

const initialState = {
    name: 'Audrey'
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME: 
            return ({ ...state, name: action.payload })
        default:
            return state
    }
}