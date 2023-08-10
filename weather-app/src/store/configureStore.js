import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import { Immutable} from 'immutable'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
     stateTransformer: (state) =>{
          let newState = {};

          for (var i of Object.keys(state)){
               if(Immutable.Iterable.isIterable(state[i])){
                    newState[i] = state[i].toJS();
               }else{
                    newState[i] = state[i]
               }
          }
          return newState;
     }
})

const enhancer = composeEnhancers(applyMiddleware({thunk, logger}))


export default function configureStore(initialState) {
    const store = createStore(rootReducer,initialState, enhancer)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(
                require('../reducers')
            )

        })
    }
    return store
}
