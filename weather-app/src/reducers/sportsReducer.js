import {INITIATE_API_CALL_UPCOMING_EVENTS,FETCHING_DATA, SET_UPCOMING_EVENTS, GENERATE_ERROR} from '../actions/sportsActions'

const initialState={
     upcomingEvents:{
          cricket:[],
          football:[],
          golf:[],
     },
     fetching:false,
     err:''
}

const sportsReducer = (state=initialState, action)=>{
     const nextState = {...state};
     if(action.type === INITIATE_API_CALL_UPCOMING_EVENTS){
          nextState.fetching = true;
     }
     if(action.type===SET_UPCOMING_EVENTS){
          nextState.fetching = false;
          nextState.upcomingEvents = 
          action.upcomingEvents;
     }
     if(action.type === GENERATE_ERROR){
          nextState.fetching=false;
          nextState.err = action.err
     }
   
     if(action.type === FETCHING_DATA){
          nextState.fetching= 
          !state.cetching
     }
     return nextState;
}
export default sportsReducer;