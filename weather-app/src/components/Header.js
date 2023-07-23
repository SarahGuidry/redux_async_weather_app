import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Header = props => {
    const appTitle = props.appTitle;

    return (
        <div>
            <Row className='row'>
                <Col>
                    <h2>{appTitle}</h2>
                </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        appTitle: state.appTitle
    }
}
export default connect(mapStateToProps, {})(Header)