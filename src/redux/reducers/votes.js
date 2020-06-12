import Types from '../types';

const initialState = {
    userID: '',
    username: '',
    votes: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case Types.ADD: {
            let {votes} = state;
            votes+=action.value
            return {
                ...state,
                votes
            }
        }
        case Types.MINUS: {
            let {votes} = state;
            votes-=action.value
            return {
                ...state,
                votes
            }
        }
        default: {
            return initialState;
        }
    }
}