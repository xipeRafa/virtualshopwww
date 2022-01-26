import React from 'react';
import App from './App';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import userReducer from './ducks/user';
import rolesReducer from './ducks/role_grants';

import productsData from './data/products';
import usersData from './data/users'
import rolesData from './data/role_grants';

import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    role_grants: rolesReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData, // initial store values
        user: usersData,
        role_grants: rolesData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
