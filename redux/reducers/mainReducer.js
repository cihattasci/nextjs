import * as type from '../types';
const initialState = {
    formData: {
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
    },
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SET_FORM_DATA:
            return {
                ...state,
                formData: action.data,
            }
        default:
            return state;
    }
}