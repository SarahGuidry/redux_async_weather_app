import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import SearchForm from './components/SearchForm'
import CurrentConditions from './components/CurrentConditions'
import FiveDayForecast from './components/FiveDayForecast'

const App = props => {
  return (
    <div>
      <SearchForm />
    </div>
  )
}
export default App;