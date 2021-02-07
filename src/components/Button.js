import React from 'react';
import PropTypes from 'prop-types'; 


const Button = (props) => {

    return <button  onClick={props.onClick} 
        style = { {backgroundColor: props.color}} 
        className = "btn">{props.text}</button>
}

export default Button

Button.defaultProps = {
    color: 'SteelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string, 
    onClick: PropTypes.func, 
}

