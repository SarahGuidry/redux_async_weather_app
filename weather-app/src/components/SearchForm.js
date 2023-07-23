import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'


import { startSearch, errorGenerated } from '../actions/currentWeatherActions'


const SearchForm = props => {
    const [searchQuery, setSearchQuery] = useState('')
    const{ push} = useHistory()

    const handleChange = e => {
        e.preventDefault()
        console.log(e.target.value + ' typed into search box')
        setSearchQuery(e.target.value)
       // console.log('searchQuery set: ' + searchQuery)
    }

    const handleSearch = (e) => {
        console.log('submit button clicked')
        e.preventDefault();
       startSearch(searchQuery)
        
        console.log(props)
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
                <Row className='justify-content-md-center' xs="2" md='4' lg='6'>
                    <Col>
                        <Form onSubmit={handleSearch}>
                            <Form.Group controlId='searchForm'>
                                <Form.Control type='text'
                                    placeholder='Search for Location'
                                    aria-label='search for location'
                                    aria-describedby='basic add-on'
                                    onChange={handleChange} />
                                  

                                <Col>
                                
                                <Form.Control as='select'
                                 defaultValue='Unit of Measure'>
                                    <option value='imperial'>Imperial</option>
                                    <option value='metric'>Metric</option>
                                </Form.Control>
                                </Col>
                                <Col>
                                    <Button type='submit'>Get Weather</Button>
                                </Col>
                                </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div >

        </div >
    )
}
const mapStateToProps =(state)=>{
    return{
        searchQuery: state.currentWeather.searchQuery,
        location:state.currentWeather.location,
        searchResults:state.currentWeather.searchResults,
        currentWeather:state.currentWeather.currentWeather,
        fetching:state.currentWeather.fetching,
        err:state.currentWeather.err
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        startSearch: (searchQuery) => {
            dispatch(startSearch(searchQuery))
        },
        errorGenerated:()=>dispatch(errorGenerated)
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);