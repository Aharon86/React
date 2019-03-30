import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import Form from './forms/Form';
import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './reducers/rootReducer.js';
import reducers from './forms/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(rootReducer);
const store = createStore(reducers);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            {/* <App /> */}
            <Form />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
