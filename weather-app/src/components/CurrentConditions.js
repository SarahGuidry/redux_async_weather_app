import React, { /*useState*/ } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import axios from 'axios'

//import FiveDayForecast from './FiveDayForecast'

const CurrentConditions = props => {
     //const [weatherIcon, setWeatherIcon] = useState('')
   //  const code = props.currentWeather.condition.code;
   
  /*   async function getIcon(code) {
               await axios.get(`weatherapi.com/docs/weather_conditions.json`)
               .then(resp =>{
                    console.log(resp.data)
                    if(code === resp.data.code){
                         const iconId = resp.data.icon
                    setWeatherIcon(iconId)
     }})
     }*/
    // console.log(weatherIcon)
  //   getIcon(code);

     return (
          <div>
               <div className='col '></div>
               <div className='md6'>
              
                    <div className='card' style={{ width: '18rem' }}>
                         <div>
                              <div>Current Conditions</div>
                              <div>{props.weatherLocation.locName} As of {new Date(props.weatherLocation.localtime).toLocaleTimeString()}</div>
                              <div>Current Temperature: {props.currentWeather.temp_f}</div>
                              <div>Feels Like: {props.currentWeather.feelslike_f}</div>
                              <div>{props.currentWeather.condition.text}</div>
                              <div> {props.currentWeather.humidity}%</div>
                              <div>Wind Direction: {props.currentWeather.wind_dir} {props.currentWeather.wind_mph} mph</div>
                         </div>
                         <div className='footer'>
                              <Link to='/5dayForecast'>
                                   5 Day Forecast
                              </Link>
                         </div>
                    </div>
               </div>
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