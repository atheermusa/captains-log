import { GET_REPORTS, DELETE_REPORTS, ADD_REPORTS } from '../actions/types.js'

const initialState = {
    reports: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REPORTS:
            return {
                ...state,
                reports: action.payload
            };
        case DELETE_REPORTS:
            return {
                ...state,
                reports: state.reports.filter(report => report.id !== action.payload)
            };
        case ADD_REPORTS:
            return {
                ...state,
                reports: [...state.reports, action.payload],
            };
            default:
                return state;
    }
}
