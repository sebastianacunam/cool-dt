import { GET_DESTINIES, GET_DETAIL, DELETE_DESTINY, POST_CREATE, PUT_DESTINY } from "../utils/constants"

const initialState = {
    destinies: [],
    allDestinies: [],
    detail: {},
    delete: [],
    put: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DESTINIES:
            return {
                ...state,
                destinies: action.payload,
                allDestinies: action.payload,
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        case DELETE_DESTINY:
            return {
                ...state,
                delete: action.payload
            }
        case PUT_DESTINY:
            return {
                ...state, 
                put: action.payload
            }
        case POST_CREATE:
            return {
                ...state,
            }
        
        default:
            return state
    }
}

