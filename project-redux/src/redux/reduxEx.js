import React, { Component } from 'react';
import reducer from "./reducers";
import {changeText, incrementNumber, decrementNumber} from "./actions";
import {createStore, applyMiddleware  } from 'redux';
// import thunk  from 'redux-thunk';


const store = createStore(reducer);



 class ReduxEx extends Component{
    state = {
            store:store.getState()
        };

    hello = store.subscribe(() => this.setState({store: store.getState()}));
   
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
    //    console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
                <p>{state.changeName}</p>
                <button onClick={this.changeText}>Change text</button>
                <p>{state.counter}</p>
                <button onClick={this.incriment}>Incriment</button>
                <button onClick={this.decrement}>Decrement</button>
           </div>
        );
    }
}
export default ReduxEx;