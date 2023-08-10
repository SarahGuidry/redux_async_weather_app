import axios from 'axios'

export const START_SEARCH = 'START_SEARCH'
export const ERROR_GENERATED = 'ERROR_GENERATED'
export const FETCHING_DATA = 'FETCHING_DATA'
export const SHOW_RESULTS = 'SHOW_RESULTS'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const SET_WEATHER_CONDITIONS = 'SET_WEATHER_CONDITIONS'

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


export const startSearch = (searchQuery, unitOfMeasurement) => {
     console.log('start_search action creator dispatched '+searchQuery)
     getSomeAsyncData(searchQuery, unitOfMeasurement)
     return dispatch =>(
          dispatch({ type: START_SEARCH, searchQuery: searchQuery, unitOfMeasurement:unitOfMeasurement })
     ) 
}

export const showResults = currentWeather => {
     return dispatch => {
          dispatch({
               type: SHOW_RESULTS,
               weatherLocation: currentWeather.weatherLocation,
               currentWeather: currentWeather.currentWeather
          })
     }
}

const getSomeAsyncData = async (dispatch, searchQuery) => {
     console.log('getAsyncData started')
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

                    console.log('results of async call: ' + res.data.current.temp_f)
                    return dispatch =>

                         dispatch({
                              type: SET_WEATHER_CONDITIONS,
                              payload: res
                         })
               }).catch(err => {
                    return dispatch=>
                    dispatch({ type: errorGenerated, payload: err.message })
               })

          dispatch({
               type: FETCHING_DATA,
               fetching: false
          })
     } catch (err) {
          return dispatch =>
          dispatch({ type: errorGenerated, payload: err })
     }
}
export const errorGenerated = error => {
     return (error.message)

}

export const setWeatherConditions = (resp) => {
     return dispatch =>
          dispatch({
               type: SET_WEATHER_CONDITIONS, payload: {
                    currentWeather: {
                         temp_f: resp.data.current.temp_f,
                         temp_c: resp.data.current.temp_c,
                         wind_dir: resp.data.current.wind_dir,
                         wind_degree: resp.data.current.wind_degree,
                         wind_mph: resp.data.current.wind_mph,
                         wind_kph: resp.data.current.wind_kph,
                         pressure_mb: resp.data.current.pressure_mb,
                         precip_in: resp.data.current.precip_in,
                         precip_mm: resp.data.current.precip_mm,
                         cloud: resp.data.current.cloud,
                         condition: {
                              code: resp.data.current.condition.code,
                              icon: resp.data.current.condition.icon,
                              text: resp.data.current.condition.text,
                         },
                         humidity: resp.data.current.humidity,
                         feelslike_f: resp.data.current.feelslike_f,
                         feelslike_c:resp.data.current.feelslike_c,
                         is_day: resp.data.current.is_day,
                         last_updated: resp.data.current.last_updated,
                         vis_km:resp.data.current.vis_km,
                         vis_miles:resp.data.current.vis_miles,
                         uv: resp.data.current.uv,
                         gust_mph:resp.data.current.gust_mph,
                         gust_km: resp.data.current.gust_km
                    },
                    weatherLocation: {
                         locName: resp.data.location.name,
                         region: resp.data.location.region,
                         country: resp.data.location.country,
                         lat: resp.data.location.lat,
                         lon: resp.data.location.lon,
                         tz_id: resp.data.location.tz_id,
                         localtime_epoch: resp.data.location.localtime_epoch,
                         localtime: resp.data.location.localtime
                    }
               }

          })
}