import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';


import CurrentConditions from './components/CurrentConditions'
import FiveDayForecast from './components/FiveDayForecast'
import Header from './components/Header'


const App = (props) => {
     useEffect(() => {
          M.AutoInit();
     }, [])

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
               temp_c: resp.data.current.temp_c,
               wind_dir: resp.data.current.wind_dir,
               wind_mph: resp.data.current.wind_mph,
               wind_km: resp.data.current.wind_km,
               cloud: resp.data.current.cloud,
               condition: {
                    code: resp.data.current.condition.code,
                    icon: resp.data.current.condition.icon,
                    text: resp.data.current.condition.text,
               },
               humidity: resp.data.current.humidity,
               feelslike_f: resp.data.current.feelslike_f,
               feelslike_c: resp.data.current.feelslike_c,
               is_day: resp.data.current.is_day,
               last_updated: resp.data.current.last_updated,
               wind_degree: resp.data.current.wind_degree,
               pressure_mb: resp.data.current.pressure_mb,
               precip_in: resp.data.current.precip_in,
               precip_mm: resp.data.current.precip_mm,
               vis_km: resp.data.current.vis_km,
               vis_miles: resp.data.current.vis_miles,
               uv: resp.data.current.uv,
               gust_mph: resp.data.current.gust_mph,
               gust_km: resp.data.current.gust_km
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
          <React.Fragment>
               <div className='Container fluid'>
                    <div className='row'>
                         <div className='col s12'>
                              <Header />
                         </div>
                    </div>
                    <div className='row' id='header searchform'>
                         <div className='col' id='spacer column'>
                         </div>
                         <div id='data column' xs={8}></div>
                         <div xs={4}>
                              <h1>{props.appTitle}</h1>
                              <CurrentConditions currentWeather={currentWeather} weatherLocation={weatherLocation} />
                         </div>
                    </div>
                    <div>
                    </div>
               </div>

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

          </React.Fragment>

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