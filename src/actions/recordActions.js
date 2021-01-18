import {
    GET_RECORD,
    SEARCH_RECORDS,
    RECORDS_ERROR,
    CLEAR_FILTER
} from './types';

export const getRecords = () => async dispatch => {
    try {
        const res = await fetch('https://api.enye.tech/v1/challenge/records')
        const data = await res.json()

        dispatch({
            type: GET_RECORD,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: RECORDS_ERROR,
            payload: err
        })
    }
}

export const searchRecords = (field = 'name', value) => dispatch => {
    // field = (typeof field !== 'undefined') ?  field : 'name'
    dispatch({
        type: SEARCH_RECORDS,
        payload: {
            field,
            value
        }
    })
}

export const clearFilter = () => dispatch => {
    dispatch({ type: CLEAR_FILTER })
}