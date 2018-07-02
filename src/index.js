import React from 'react';;
import ReactDOM from 'react-dom';;
import { Provider } from 'react-redux';
import store from './stores';
import AppContainer from './AppContainer';
import axios from 'axios';

axios.defaults.baseURL = 'http://api.eontoken.io/';
axios.defaults.headers.post['Content-Type'] = 'application/form-data';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root'));
