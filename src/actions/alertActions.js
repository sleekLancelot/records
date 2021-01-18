import {
    SET_ALERT,
    REMOVE_ALERT
} from './types';

export const showAlert = (msg, className) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: { msg, className }
    })
    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT });
    }, 3000);
}