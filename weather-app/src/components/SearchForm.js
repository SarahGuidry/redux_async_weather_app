import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//import Col from 'react-bootstrap/Col'

import { startSearch } from '../actions/weatherActions'


const SearchForm = props => {
    const [zipCode, setZipCode] = useState('');


    const handleChange = e => {
        setZipCode(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        startSearch(zipCode);
    }

    return (
        <div>
            <div className='form-wrapper container'>

                <form onSubmit={handleSearch}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <input type='text' placeholder='Zip Code' onChange={handleChange} />
                        </div>
                        <div className='col-sm-4'>

                            <select defaultValue='Unit of Measure'>
                                <option value='imperial'>Imperial</option>
                                <option value='metric'>Metric</option>
                            </select>
                        </div>
                        <div className='col-sm-4'>
                            <button type='submit'>Get Weather</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SearchForm;