import {
    GET_RECORD,
    SEARCH_RECORDS,
    RECORDS_ERROR,
    CLEAR_FILTER
} from '../actions/types';

const initialState = {
    profiles: null,
    loading: true,
    filtered: null,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RECORD:
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        case SEARCH_RECORDS:
            return {
                ...state,
                filtered: state.records.profiles.filter(profile => {
                    if (action.payload.field === 'E-mail') {
                        const dummyRegex = `${profile.Email}`.toLowerCase();
                        return dummyRegex.includes(action.payload.value);
                    } else {
                        const dummyRegex = `${profile.FirstName}${profile.LastName}`.toLowerCase();
                        return dummyRegex.includes(action.payload.value);
                    }
                })
            }

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }

        case RECORDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}