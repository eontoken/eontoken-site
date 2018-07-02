import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormError extends Component {
    render() {
        return (
            this.props.error ?
            <p className="text-danger mt-3" style={{fontSize: '16px'}}>
                {this.props.error}
            </p>
            :
            null
        );
    }
}

FormError.propTypes = {
    error: PropTypes.string,
};

export default FormError;
