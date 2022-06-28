export const SEARCH = 'search/SEARCH'
export const SET_RESULTS = 'search/SET_RESULTS'

export const search = (text) => {
    return {
        type: SEARCH,
        text,
    }
}

export const setResults = (results) => {
    return {
        type: SET_RESULTS,
        results
    }
}