import { GET_PLAYERS, DELETE_PLAYERS, ADD_PLAYERS } from '../actions/types.js'

const initialState = {
    players: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        case DELETE_PLAYERS:
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.payload)
            };
        case ADD_PLAYERS:
            return {
                ...state,
                players: [...state.players, action.payload],
            };
            default:
                return state;
    }
}