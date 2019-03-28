import React, { Component } from 'react';
import reducer from "./reducers";
import {changeText, incrementNumber, decrementNumber} from "./actions";
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));



 class ReduxEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            changeName:store.getState().changeName,
            count: store.getState().counter
        };
        store.subscribe(() => this.setState({
            changeName: store.getState().changeName, 
            count: store.getState().counter
        }));
    }
    changeText = () => {
        store.dispatch(changeText("Mamikonyan"))
    }
    incriment = () => {
        store.dispatch(incrementNumber())
    }
    decrement = () => {
        store.dispatch(decrementNumber())
    }
    render(){
       const state = store.getState();
       console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
                <p>{this.state.changeName}</p>
                <button onClick={this.changeText}>Change text</button>
                <p>{this.state.count}</p>
                <button onClick={this.incriment}>Incriment</button>
                <button onClick={this.decrement}>Decrement</button>
           </div>
        );
    }
}
export default ReduxEx;