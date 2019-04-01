import {combineReducers} from 'redux';

const createData = (state = {name:'', surname:''}, action) => {
    let obj = Object.assign({}, state);
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'GET_DATA' :
            obj.name = action.name;
            obj.surname = action.surname;
            break;
    }
    return obj;
}

const reducers = combineReducers({createData});

export default reducers;