import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import { Provider } from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index';

ReactDOM.render(
<Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>
 <App />
 </PersistGate>
 </Provider>
 , document.getElementById('root')
);
