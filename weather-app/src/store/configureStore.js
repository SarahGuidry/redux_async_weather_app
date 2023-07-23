import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk))

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(
                require('../reducers')
            )

        })
    }
    return store
}
