import { START_SEARCH, FETCHING_DATA, SHOW_RESULTS, ERROR_GENERATED } from '../actions/currentWeatherActions'

const initialState = {
    searchQuery:'',
    searchResults: [],
    location: {
        locName: '',
        region: '',
        country: '',
        lat: '',
        lon: '',
        tz_id: '',
        localtime_epoch: '',
        localtime: ''
    },
    currentWeather:{

    },
    fetching: false,
    appTitle: 'Get Current Weather',
    err:'',
}
/*export const fetching = (state=null, action)=>{
    switch(action.type){
        
        default:
            return state
    }
}*/
/*export const data = (state = null, action) => {
    switch (action.type) {

        default:
            return state
    }
}*/
/*const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SEARCH:
            const searchResults = action.payload
            return {
                ...state,
                searchResults: [...state.searchResults, searchResults]
            }
        case FETCHING_DATA:
            return action.fetching
        case SHOW_RESULTS:
            const results = action.payload
            return{
                ...state,
                location:[...state.location, results],
                currentWeather:[...state.currentWeather, results]
            } 
        default:
            return state;
    }
}
*/

const currentWeatherReducer = (state=initialState, action)=>{
    const nextState = {...state};
    if(action.type === START_SEARCH){
        nextState.fetching = true;
        nextState.searchResults = action.searchResults
    }
    if(action.type === SHOW_RESULTS){
        nextState.location = action.location
        nextState.currentWeather = action.currentWeather
        nextState.fetching = false
    }
    if(action.type === ERROR_GENERATED){
        nextState.err = action.err
        nextState.fetching = false
    }
    if(action.type === FETCHING_DATA){
        nextState.fetching = true
    }
    return nextState
}
export default currentWeatherReducer;