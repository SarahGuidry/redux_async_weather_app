import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'

import 'materialize-css/dist/css/materialize.min.css'
import App from './App'
import rootReducer from './reducers/index.js'

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
