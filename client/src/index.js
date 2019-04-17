import React from 'react';
import { render } from 'react-dom';
import './index.css';
import MoodHistory from './components/App';
import store from './store/index';
import { Provider } from 'react-redux';

render(
<Provider store={store}>
 <MoodHistory />
 </Provider>
 , document.getElementById('root')
);
