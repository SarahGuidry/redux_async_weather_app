import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = props => {
    const appTitle = props.appTitle;

    return (
        <div>
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>{appTitle}</h2>
                </div>
            </div></div>
    )
}

const mapStateToProps = state => {
    return {
        appTitle: state.appTitle
    }
}
export default connect(mapStateToProps, {})(Header)