import axios from 'axios';

const initailState = {
    submittedText: 'Default Value',
    user: {}
}

const UPDATE_SUBMITTED_TEXT = 'UPDATE_SUBMITTED_TEXT';
const GET_USER = 'GET_USER';

export function updateText(text){
    return {
        type: UPDATE_SUBMITTED_TEXT,
        payload: text
    }
}

export function getUser(){
    let user = axios.get('/auth/me').then(res => {
        if(res.data !== 'User not found'){
            return res.data[0];
        }
    });
    return {
        type: GET_USER,
        payload: user
    }
}

export default function reducer(state = initailState, action){
    switch(action.type){
        case UPDATE_SUBMITTED_TEXT:
            return Object.assign({}, state, {submittedText: action.payload});
        case GET_USER + "_FULFILLED":
            return Object.assign({}, state, {user: action.payload});
        default: 
            return state;
    }
}