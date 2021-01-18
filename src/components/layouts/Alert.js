import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
    return (
        alert && (<div className={`alert alert-${alert.className}`}>
            <i className='fas fa-info-circle'> {alert.msg}</i>
        </div>)
    )
}

Alert.propType = {
    alert: PropTypes.object.isRequired,
    showAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    alert: state.alert
})

export default connect(mapStateToProps)(Alert)
