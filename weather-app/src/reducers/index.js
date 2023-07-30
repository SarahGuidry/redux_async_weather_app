import { combineReducers } from 'redux';

import currentWeatherReducer from './currentWeatherReducer'

import sportsReducer from './sportsReducer'

const rootReducer = combineReducers({
      currentWeather: currentWeatherReducer,
      sports:sportsReducer
})

export default rootReducer;