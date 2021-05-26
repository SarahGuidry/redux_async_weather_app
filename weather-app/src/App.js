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
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand'><img width='120px' alt='Open Weather Logo' src='./OpenWeather-Logo.jpg' />Brought to you by OpenWeatherAPI</span></nav>
      <div className='container'>
        <Header />
      </div>
      <SearchForm />
    </div>
  )
}
export default App;