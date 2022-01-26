import { getProduct } from '../ducks/products';

const CART_ADD   = 'cart/ADD'; // actions
const CART_REMOVE = 'cart/REMOVE';

const initialState = { // reducer
    items: [], // array of product ids
    currency: 'MEX'
};

export default function cart(state = initialState, action = {}) { //cart reducer
    switch (action.type) {
        case CART_ADD:   return handleCartAdd(state, action.payload);
        case CART_REMOVE:return handleCartRemove(state, action.payload);
        default:         return state;
    }
}

function handleCartAdd(state, payload) {
    return {...state, items: [ ...state.items, payload.productId ]};
}

function handleCartRemove(state, payload) {
    return {...state, items: state.items.filter(id => id !== payload.productId)};
}

export function addToCart(productId) { // action creators
    return {
        type: CART_ADD,
        payload: { productId }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: { productId }
    }
}

export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}// selectors

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
