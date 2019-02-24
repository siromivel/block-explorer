import initialState from './initialState';
import ActionTypes from '../actions/ActionTypes'

export default function query(state = initialState.query, action: any) {
    let freshState;

    switch(action.type) {
        case ActionTypes.SET_QUERY:
            return action;
        case ActionTypes.GET_QUERY:
            freshState = action.query;
            return freshState;
        default:
            return state;
    }
}
