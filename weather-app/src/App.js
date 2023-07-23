import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import Header from './components/Header'
import SearchForm from './components/SearchForm'
import CurrentConditions from './components/CurrentConditions'
import FiveDayForecast from './components/FiveDayForecast'

const App = props => {
  const location = props.location
  return (
    <div>
      <Container fluid>

        <Row className='justify-content-md-center'>
          <Col>     <nav className='navbar navbar-dark bg-dark'>
            <span className='navbar-brand'><img width='120px' alt='Open Weather Logo' src='./OpenWeather-Logo.jpg' />Brought to you by OpenWeatherAPI</span></nav>      </Col>
        </Row>
        <Row>
          <Col md="1">
            <Header />
          </Col>
          <Col md="4">
            
          </Col>
        </Row>
      </Container>
      <Switch>
      <Route exact path='/search'>
      <SearchForm />
      </Route>
        <Route path={'/current'}>
          <CurrentConditions />
        </Route>
        <Route path={'/5dayforecast'}>
          <FiveDayForecast />
        </Route>
        <Route path="/">
          <Redirect to='/search'/>
        </Route>
      </Switch>
    </div>
  )
}
const mapStateToProps=(state) =>{
  return{
    location:state.currentWeather.location,
  }
}


export default connect(mapStateToProps, {})(App);