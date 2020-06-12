import Types from './types';

const increment = (value) => {
    return {
        type: Types.ADD,
        value
    }
}

const decrement = (value) => {
    return {
        type: Types.MINUS,
        value
    }
}

export default {
    increment, decrement
}