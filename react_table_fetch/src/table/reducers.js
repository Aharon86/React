import { combineReducers } from 'redux';

function data(state = [], action) {
    switch (action.type) {
        case "SEND_DATA":
            return action.data;
        case "RELOAD_DATA":
            return [];
    
        default:
            return state;
    }
}

function changeBusy(state = true, action) {
    switch (action.type) {
        case "CHANGE_BUSY":
            return !state;

        default:
            return state;
    }
}

function changeAvailable(state = true, action) {
    switch (action.type) {
        case "CHANGE_AVAILABLE":
            return !state;

        default:
            return state;
    }
}

function changeStarted(state = true, action) {
    switch (action.type) {
        case "CHANGE_STARTED":
            return !state;
        
        default:
            return state;
    }
}

const reducer = combineReducers({data, changeBusy, changeAvailable, changeStarted});

export default reducer;