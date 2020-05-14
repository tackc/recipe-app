import React from 'react';

const ErrorPanel = props => {
    let message = '';

    switch(props.error.type) {
        case 'auth_error':
            message = props.error.message
            break;
        case 'db_error':
            message = props.error.error.message
            break;
        case 'rate_error':
            message = props.error.message
            break;
        default:
        break
    }

    return (
        <div className='error-panel'>
            <p>{ message }</p>
        </div>
    )
}

export default ErrorPanel;
