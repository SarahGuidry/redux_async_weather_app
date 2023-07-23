import axios from 'axios'

export const START_SEARCH = 'START_SEARCH'
export const ERROR_GENERATED = 'ERROR_GENERATED'
export const FETCHING_DATA = 'FETCHING_DATA'
export const SHOW_RESULTS = 'SHOW_RESULTS'

/*export function startSearch(searchQuery) {
    return async dispatch => {

        const options = {
            params: {
                q: { searchQuery }
            },
            headers: {
                'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        function onSuccess(success) {
            console.log('request successful'+ success)
            dispatch({ type: START_SEARCH, payload: success })
            return success;
        }
        function onError(error) {
            console.log('request error'+error)
            dispatch({ type: ERROR_GENERATED, error })
            return error;
        }
        try {
            const success = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', options)
            return onSuccess(success);
        } catch (error) {
            return onError(error)
        }
    }
}*/

export const startSearch = searchQuery => {
    return dispatch => {
        dispatch({ type: FETCHING_DATA, fetching: true })
        getSomeAsyncData(dispatch, searchQuery)
    }
}

export const showResults = currentConditions => {
    return dispatch => {
        dispatch({
            type: SHOW_RESULTS,
            location:currentConditions.location,
            currentConditions:currentConditions.currentWeather
        })
    }
}

const getSomeAsyncData = async (dispatch, searchQuery) => {
    const options = {
        params: {
            q: { searchQuery }
        },
        headers: {
            'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    try {
        await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', options)
            .then(res => {
                return res.json();
            }).then(data => {
                dispatch(showResults(data))
            })
    } catch (err) {
        dispatch({ type: errorGenerated, payload: err.message })
    }
    dispatch({
        type: FETCHING_DATA,
        fetching: false
    })
}

export const errorGenerated = error => {
    return (error.message)
}