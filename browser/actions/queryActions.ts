import ActionTypes from './ActionTypes';

export function getQuery(query: string) {
    console.log("HERE")
    console.log(query)
    return (dispatch: Function) => {
        console.log("THERE")
        dispatch(getQuery(query))
    }
}

export function setQuery(query: string) {
    console.log("HIP")
    console.log(query)
    return { type: ActionTypes.GET_QUERY, query: query }
}
