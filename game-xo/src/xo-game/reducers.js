import {combineReducers} from 'redux';

var winCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


const createData = (state = [], action) => {
    // console.log(state);
    switch (action.type) {
        case 'NEW_DATA':
            return action.data;
    
        default:
            return state;
    }
}

const changePlayer = (state = true, action) => {
    if (action.type === 'GET_PLAYER') {
        return !state;
    } else if (action.type === 'SET_PLAYER'){
        return action.player;
    }
    return state;
}


const check = (state = {X: 0, O: 0, winner: '', popup: false}, action) =>{
    
    if(action.type === 'CHECK') {
        for (let iterator of winCombination) {
            console.log(action.bloks);
            if (action.bloks[iterator[0]] && 
                action.bloks[iterator[0]] === action.bloks[iterator[1]] && action.bloks[iterator[1]] === action.bloks[iterator[2]]) {
                    console.log('WIN',action.bloks[iterator[0]]);
                    if (action.bloks[iterator[0]] === 'X') {
                        return Object.assign({}, state, {X: state.X + 1, winner: 'X', popup: true});
                    }else{
                        return Object.assign({}, state, {O: state.O + 1, winner: 'O', popup: true});
                    }
                    
            }
        }
        if (action.bloks.every(function(item){return !!item})) {
            return Object.assign({}, state, {winner: 'DRAW', popup: true});
        }
    } else if(action.type === 'CLEAR_POINT'){
        return {X: 0, O: 0, winner: '', popup: false}
    } else if(action.type === 'CONTINUE'){
        return Object.assign({}, state, { popup: false});
    }

    return state;
    
}

const reducers = combineReducers({createData, check, changePlayer});

export default reducers;