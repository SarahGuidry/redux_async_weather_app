import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import { connect, useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

//import { startSearch } from './actions/currentWeatherActions'
import CurrentConditions from './components/CurrentConditions'
import FiveDayForecast from './components/FiveDayForecast'
import SearchForm from './components/SearchForm'


const App = (props) => {
     const [currentWeather, setCurrentWeather] = useState({
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
     })
     const [weatherLocation, setWeatherLocation] = useState({
          locName: '',
          region: '',
          country: '',
          lat: '',
          lon: '',
          tz_id: '',
          localtime_epoch: '',
          localtime: ''
     })
    
     const searchQuery = "70115"
     useEffect(() => {
          //console.log('dispatching start_search  from app component for landingPage current conditions')
          const options = {
               params: { q: searchQuery },
               headers: {
                    'X-RapidAPI-Key': 'b0aa06f1c1msh784ba5a3d741d16p108396jsn82164ffef512',
                    'X-RapidI-Host': 'weatherapi-com.p.rapidapi.com'
               }
          }
          async function getWeatherForLandingPage() {
               await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', options)
                    .then(resp => {
                         setStates(resp)
                    })
                    .catch(err => { console.log(err.message) })
          }
          getWeatherForLandingPage()
     }, [])

     const setStates = resp => {
          setCurrentWeather({
               temp_f: resp.data.current.temp_f,
               wind_dir: resp.data.current.wind_dir,
               wind_mph: resp.data.current.wind_mph,
               cloud: resp.data.current.cloud,
               condition: {
                    code: resp.data.current.condition.code,
                    icon: resp.data.current.condition.icon,
                    text: resp.data.current.condition.text,
               },
               humidity: resp.data.current.humidity,
               feelslike_f: resp.data.current.feelslike_f,
               is_day: resp.data.current.is_day,
               last_updated: resp.data.current.last_updated
          })
          setWeatherLocation({
               locName: resp.data.location.name,
               region: resp.data.location.region,
               country: resp.data.location.country,
               lat: resp.data.location.lat,
               lon: resp.data.location.lon,
               tz_id: resp.data.location.tz_id,
               localtime_epoch: resp.data.location.localtime_epoch,
               localtime: resp.data.location.localtime
          })
     }

     console.log(props)
     console.log(weatherLocation)
     console.log(currentWeather)
     return (
          <div>
               <Container fluid>
                    <Row id='navbar' className='justify-content-md-center'>
                         <Col>
                              <nav className='navbar navbar-dark bg-dark'>
                                   <span className='navbar-brand'>
                                        {/*<a href="https://www.weatherapi.com/" title="Free Weather API">
                                             <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
     </a>*/}
                                   </span>
                              </nav>
                         </Col>
                    </Row>
                    <Row id='header searchform'>
                         <Col id='spacer column'>
                         </Col>
                         <Col >
                              <Stack >
                                   <SearchForm />
                              </Stack>
                         </Col>
                    </Row>
                    <Row>
                         <Col id='data column' xs={8}></Col>
                         <Col xs={4}>
                              <h1>{props.appTitle}</h1>
                              <CurrentConditions currentWeather={currentWeather} weatherLocation={weatherLocation}/>
                         </Col>
                    </Row>
                    <Row>
                    </Row>
               </Container>

               <Switch>
                    <Route path={'/current'}>
                         <CurrentConditions currentWeather={currentWeather} weatherLocation={weatherLocation} />
                    </Route>
                    <Route exact path={'/5dayforecast'}>
                         <FiveDayForecast />
                    </Route>
                    <Route path="/">
                         <Redirect to='/current' />
                    </Route>
               </Switch>
          </div >
     )
}

const mapStateToProps = state => {
     return {
          currentWeather: state.currentWeather.currentWeather,
          weatherLocation: state.currentWeather.weatherLocation,
          query: state.currentWeather.query
     }
}
export default connect(mapStateToProps, {})(App)