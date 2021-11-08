import * as type from '../types';
import {createWrapper} from 'next-redux-wrapper';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
const initialState = {
    name: '',
    mail: '',
    phone: '',
    instagram: '',
    country: 'Turkey',
    body: '',
    isProductUse: false,
    isProductUseNo: false,
    isSigned: false,
    isSignedNo: false,
    info: '',
}

const main = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case type.SET_NAME:
            return (newState = state.name + action.payload)
        case type.SET_PHONE:
            return (newState = state.phone + action.payload)
        case type.SET_MAIL:
            return (newState = state.email + action.payload)
        case type.SET_INSTAGRAM:
            return (newState = state.instagram + action.payload)
        case type.SET_BODY:
            return (newState = state.body + action.payload)
        case type.SET_PRODUCT_USE:
            return (newState = action.payload)
        case type.SET_PRODUCT_USE_NO:
            return (newState = action.payload)
        case type.SET_SIGNED:
            return (newState = action.payload)
        case type.SET_SIGNED_NO:
            return (newState = action.payload)
        case type.SET_INFO:
            return (newState = state.info + action.payload)
        case type.SET_COUNTRY:
            return (newState = action.payload)
        default:
            return state;
    }
}

const makeStore = () => createStore(main, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true});