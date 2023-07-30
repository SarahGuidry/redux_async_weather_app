import axios from 'axios'

export const INITIATE_API_CALL_UPCOMING_EVENTS = 'INITIATE_API_CALL_UPCOMING_EVENTS'
export const FETCHING_DATA = 'FETCHING_DATA'
export const SET_UPCOMING_EVENTS = 'SET_UPCOMING_EVENTS'
export const GENERATE_ERROR = 'GENERATE_ERROR'

export const initiateApiCallUpcomingEvents = () => {
     return dispatch => {
          dispatch({ type: FETCHING_DATA, fetching: true })
          getSomeAsyncData(dispatch)
     }
}

const getSomeAsyncData = async (dispatch) => {
     const options = {
          params: { q: 'New Orleans' },
          headers: {
               'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
               'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
     }
     try {
          await axios.get('https://weatherapi-com.p.rapidapi.com/sports.json', options)
               .then(resp => {
                    return resp.json();
               })
               .then(data => {
                    dispatch(setUpcomingEvents(data))
               })
     } catch (err) {
          console.log(err.message)
          dispatch({ type: generateError, payload: err.message })
     }
     dispatch({
          type: FETCHING_DATA,
          fetching: false
     })
}
export const generateError = error => {
     return (error.message)
}

export const setUpcomingEvents = (dispatch, data) => {
    return dispatch =>
     dispatch({type:SET_UPCOMING_EVENTS, payload:data})
}