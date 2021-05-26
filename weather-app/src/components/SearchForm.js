import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { startSearch } from '../actions/weatherActions'


const SearchForm = props => {
    // const [zipCode, setZipCode] = useState('');

    /* const handleChange = e => {
        setZipCode({
            [e.target.name]: e.target.value
        })
    */
    const handleSearch = (e) => {
        e.preventDefault();
        startSearch(props.zipCode);
    }
    return (
        <div>
            <Form onSubmit={handleSearch}>
                <Form.Row>
                    <Col>
                        <Form.Control as='input' size='lg' placeholder='Zip Code' />
                    </Col>
                    <Col>
                        <Form.Control as='select' defaultValue='Unit of Measure'>
                            <option value='imperial'>Imperial</option>
                            <option value='metric'>Metric</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button as='input' type='submit' variant='info'>Get Weather</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}
export default SearchForm;