import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';

render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root')
);


