import { START_SEARCH, FETCHING_DATA, SHOW_RESULTS, ERROR_GENERATED, SET_WEATHER_CONDITIONS } from '../actions/currentWeatherActions'

const initialState = {
     searchQuery: '',
     searchResults: [],
     weatherLocation: {
          locName: '',
          region: '',
          country: '',
          lat: '',
          lon: '',
          tz_id: '',
          localtime_epoch: '',
          localtime: ''
     },
     currentWeather: {
          temp_f: '0',
          wind_dir: '0',
          wind_mph: '0',
          cloud: '',
          condition: {
               code: '0',
               icon: '',
               text: '',
          },
          humidity: '0',
          feelslike_f: '0',
          is_day: '0',
          last_updated: ''
     },
     fetching: false,
     appTitle: `Current Conditions in New Orleans, LA, USA`,
     err: '',
}


const currentWeatherReducer = function (state = initialState, action) {
     const nextState = { ...state };
          if(action.type === START_SEARCH){
               console.log(action)
               console.log('start_search from reducer, set fetching and searchQuery state to store')
               nextState.fetching = true
               nextState.searchQuery = action.searchQuery
          }
          if(action.type === SHOW_RESULTS){
               console.log(action)
               nextState.searchResults = action.searchResults;
               nextState.weatherLocation = action.weatherLocation
               nextState.currentWeather = action.currentWeather
               nextState.fetching = false
          }
          if(action.type===ERROR_GENERATED){
               console.log(action)
               nextState.err = action.err
               nextState.fetching = false
          }
          if(action.type === FETCHING_DATA){
               console.log(action)
               console.log('fetching data switched from reducer ' + action.type)
               nextState.fetching = action.payload;
          }
          if(action.type=== SET_WEATHER_CONDITIONS){
               console.log('called from setWeatherConditions in reducer ' + action)
               console.log('setWeatherConditions called in reducer, ' + action.payload)
               nextState.currentWeather.temp_f = action.currentWeather.current.temp_f;
               nextState.currentWeather.wind_dir = action.currentWeather.current.wind_dir;
               nextState.currentWeather.wind_mph = action.currentWeather.current.wind_mph;
               nextState.currentWeather.lastUpdated = action.currentWeather.current.lastUpdated;
               nextState.currentWeather.cloud = action.data.current.cloud;
               nextState.currentWeather.condition.code =action.data.current.condition.code;
               nextState.currentWeather.condition.icon = action.data.current.condition.icon;
               nextState.currentWeather.condition.text = action.data.current.condition.text;
               nextState.currentWeather.humidity = action.data.current.humidity;
               nextState.currentWeather.feelslike_f=action.data.current.feelslike_f;
               nextState.currentWeather.is_day = action.data.current.is_day;
               nextState.currentWeather.last_updated =action.data.current.last_updated;
               nextState.weatherLocation.locName = action.data.location.name;           nextState.weatherLocation.country = action.data.location.country;
               nextState.currentWeather.lat = action.data.location.lat;
               nextState.currentWeather.lon = action.data.location.lon;
               nextState.currentWeather.tz_id = action.data.location.tz_id;
               nextState.currentWeather.localtime_epoch = action.data.location.localtime_epoch;
               nextState.currentWeather.localtime = action.data.location.localtime
          }
               return nextState;
     }

export default currentWeatherReducer;