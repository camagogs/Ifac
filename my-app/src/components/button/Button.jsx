import React from 'react';
import PropTypes from 'prop-types';

require('./Button.css');

const propTypes = {
    type: PropTypes.oneOf(['info', 'danger' , 'sucess']),
    caption: PropTypes.string.isRequired,

};

const defaultProos = {
    type: 'info',
    onClick: Function.prototype, 
};



function Button(props){
    
    const textClass = 'button- $(prop.type)' ;
    /**
     * 
     * @param  e {Event}
     */  
    const handleClick = function (e){
        e.preventDefault();
        props.onClick();
    }
    return (
        <button className = {textClass} onClick={handleClick} >
            {props.children}
        </button>
        
    );
}
/**function SaveButton (props){
    return(
        <Button {...props}
            caption="Salvar"
            type = "sucess"
        />
    )
}

function CancelButton (props){
    return(
        <Button {...props}
            caption="Cancelar"
            type = "sucess"
        />
    )
}*/

Button.propTypes = propTypes;
Button.defaultProos = defaultProos;

export default Button;