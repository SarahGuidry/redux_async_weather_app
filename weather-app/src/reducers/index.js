import { combineReducers } from 'redux';

import currentWeatherReducer from './currentWeatherReducer'

const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
})

export default rootReducer;