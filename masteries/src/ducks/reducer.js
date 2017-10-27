const initailState = {
    submittedText: 'Default Value'
}

const UPDATE_SUBMITTED_TEXT = 'UPDATE_SUBMITTED_TEXT';

export function updateText(text){
    return {
        type: UPDATE_SUBMITTED_TEXT,
        payload: text
    }
}

export default function reducer(state = initailState, action){
    switch(action.type){
        case UPDATE_SUBMITTED_TEXT:
            return Object.assign({}, state, {submittedText: action.payload});
        default: 
            return state;
    }
}