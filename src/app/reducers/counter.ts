import {INCREMENT, DECREMENT, IncrementAction, DecrementAction} from '../actions/actions'
export const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + action.offset;
            
        case DECREMENT:
            return state - action.offset;           
        default:
            return state;
    }
}

export const counterReducer1 = (state = 0, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + action.offset;
            
        case DECREMENT:
            return state - action.offset;
            
        default:
            return state;
    }
}