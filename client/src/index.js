import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import { Provider } from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

render(
<Provider store={store}>
 <App />
 </Provider>
 , document.getElementById('root')
);
