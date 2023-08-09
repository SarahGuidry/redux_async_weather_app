import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { errorGenerated, startSearch } from '../actions/currentWeatherActions'

const SearchForm = props => {
     const [searchQuery, setSearchQuery] = useState('')
     const [unitOfMeasurement, setUnitOfMeasurement] = useState('imperial')
     const { push } = useHistory()
     const dispatch = useDispatch()

     const handleChange = e => {
          e.preventDefault()
          console.log(e.target.value + ' typed into search box')
          setSearchQuery(e.target.value)
     }
     const handleSelect = e => {
          e.preventDefault()
          setUnitOfMeasurement(e)
     }

     const handleSearch = (e) => {
          console.log('submit button clicked')
          e.preventDefault();

          startSearch(searchQuery, unitOfMeasurement, dispatch)
          console.log(unitOfMeasurement)
          //console.log(props)
          console.log(searchQuery)
          /* setLocation({
               locName:results.location.name,
               region:results.location.region,
               country:results.location.country,
               lat: results.location.lat,
               lon: results.location.long,
               tz_id:results.location.tz_id,
               localtime_epoch: results.location.localtime_epoch,
               localtime:results.location.localtime
           })*/

          console.log(props)
          push('/current')
     }

     return (
          <div>
               <div className='form-wrapper container'>
                    <h4>Search for Location</h4>
                    <form onSubmit={handleSearch}>
                         <div controlId='searchForm'>
                              <div>
                                   <input type='text'
                                        className='form-control'
                                        placeholder='Search for Location'
                                        aria-label='search for location'
                                        aria-describedby='basic add-on'
                                        onChange={handleChange} />
                              </div>
                              <div className='input-field'>
                                   <select onChange={handleSelect}>
                                        <option
                                             value=''
                                             disabled
                                             selected>
                                             Unit of Measure
                                        </option>
                                        <option value='imperial'>Imperial</option>
                                        <option value='metric'>Metric</option>
                                   </select>
                              </div>
                              <button className='modal-close' type='submit'>
                                   Get Weather
                              </button>
                         </div>
                    </form>
               </div>
          </div >
     )
}

const mapStateToProps = (state) => {
     return {
          searchQuery: state.currentWeather.searchQuery,
          weatherLocation: state.currentWeather.weatherLocation,
          searchResults: state.currentWeather.searchResults,
          currentWeather: state.currentWeather.currentWeather,
          fetching: state.currentWeather.fetching,
          err: state.currentWeather.err,
          unitOfMeasurement: state.currentWeather.unitOfMeasurement
     }
};

const mapDispatchToProps = (dispatch) => {
     return {
          startSearch: (searchQuery, unitOfMeasurement) => {
               dispatch(startSearch(searchQuery, unitOfMeasurement, dispatch))
          },
          errorGenerated: () => dispatch(errorGenerated)
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);