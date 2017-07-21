import React from 'react';
import PropTypes from 'prop-types';

require('./LinkButton.css');

const propTypes = {
    caption: PropTypes.string.isRequired,
    onClink: PropTypes.func,

};

const defaultProos = {
    onClink: Function.prototype,
};

/**
 * @param {{type: string, color: string, children[[]] }} propTypes
 */


function LinkButtun(props){
    const textClass = 'label- $(prop.type)' ;
    const style = {
        color: props.color,
    }    
    return (
        <span className={textClass} style={style}>
        <div>
            {props.children}
        </div>
        </span>
    );
}

LinkButtun.propTypes = propTypes;
LinkButtun.defaultProos = defaultProos;

export default LinkButtun;