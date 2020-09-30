import { GET_TEAMS, DELETE_TEAMS, ADD_TEAMS } from '../actions/types.js'

const initialState = {
    teams: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        case DELETE_TEAMS:
            return {
                ...state,
                teams: state.teams.filter(teams => teams.id !== action.payload)
            };
        case ADD_TEAMS:
            return {
                ...state,
                teams: [...state.teams, action.payload],
            };
            default:
                return state;
    }
}