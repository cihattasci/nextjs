import * as type from '../types';

export const setName = (value) => ({
    type: type.SET_NAME,
    payload: value,
});
export const setMail = (value) => ({
    type: type.SET_MAIL,
    payload: value,
});
export const setPhone = (value) => ({
    type: type.SET_PHONE,
    payload: value,
});
export const setInfo = (value) => ({
    type: type.SET_INFO,
    payload: value,
});
export const setCountry = (value) => ({
    type: type.SET_COUNTRY,
    payload: value,
});
export const setBody = (value) => ({
    type: type.SET_BODY,
    payload: value,
});
export const setIsProductUse = (value) => ({
    type: type.SET_IS_PRODUCT_USE,
    payload: value,
});
export const setIsProductUseNo = (value) => ({
    type: type.SET_IS_PRODUCT_USE_NO,
    payload: value,
});
export const setIsSigned = (value) => ({
    type: type.SET_IS_SIGNED,
    payload: value,
});
export const setIsSignedNo = (value) => ({
    type: type.SET_IS_SIGNED_NO,
    payload: value,
});
export const setInstagram = (value) => ({
    type: type.INSTAGRAM,
    payload: value,
});