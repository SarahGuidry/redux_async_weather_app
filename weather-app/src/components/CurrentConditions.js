import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
//import axios from 'axios'
//import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import FiveDayForecast from './FiveDayForecast'

const CurrentConditions = props => {
     const [weatherIcon, setWeatherIcon] = useState('')
     const code = props.currentWeather.condition.code;
   
     async function getIcon() {
               await axios.get('weatherapi.com/docs/werather_conditions.json')
     }
      


     return (
          <div>
               <Col md={6}></Col>
               <Col md={6}>
                    <Card style={{ width: '18rem' }}>
                         <Card.Body>
                              <Card.Title>Current Conditions</Card.Title>
                              <Card.Subtitle>{props.weatherLocation.locName} As of {new Date(props.weatherLocation.localtime).toLocaleTimeString()}</Card.Subtitle>
                              <Card.Subtitle>Current Temperature: {props.currentWeather.temp_f}</Card.Subtitle>
                              <Card.Subtitle>Feels Like: {props.currentWeather.feelslike_f}</Card.Subtitle>
                              <Card.Subtitle>{props.currentWeather.condition.text}</Card.Subtitle>
                              <Card.Text>Humidity: {props.currentWeather.humidity}%</Card.Text>
                              <Card.Text>Wind Direction: {props.currentWeather.wind_dir} {props.currentWeather.wind_mph} mph</Card.Text>
                         </Card.Body>
                         <Card.Footer>
                              <Link to='/5dayForecast'>
                                   5 Day Forecast
                              </Link>
                         </Card.Footer>
                    </Card>
               </Col>
          </div>
     )
}
const mapStateToProps = state => {
     return {
          //currentWeather: state.currentWeather.currentWeather,
          //  weatherLocation: state.currentWeather.weatherLocation
     }
}


export default connect(mapStateToProps, {})(CurrentConditions)