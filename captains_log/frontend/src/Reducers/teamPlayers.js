import { GET_TEAMPLAYERS, DELETE_TEAMPLAYERS, ADD_TEAMPLAYERS } from '../actions/types.js'

const initialState = {
    teamPlayers: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TEAMPLAYERS:
            return {
                ...state,
                teamPlayers: action.payload
            };
        case DELETE_TEAMPLAYERS:
            return {
                ...state,
                teamPlayers: state.teamPlayers.filter(teamPlayer => teamPlayer.id !== action.payload)
            };
        case ADD_TEAMPLAYERS:
            return {
                ...state,
                teamPlayers: [...state.teamPlayers, action.payload],
            };
            default:
                return state;
    }
}
