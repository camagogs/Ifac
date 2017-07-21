import React from 'react';
import PropTypes from 'prop-types';

require('./Label.css');

const propTypes = {
    type: PropTypes.oneOf(['regular', 'title']),
    color: PropTypes.string,

};

const defaultProos = {
    type: 'regular',
    color: '#aaa'
};

/**
 * @param {{type: string, color: string, children[[]] }} propTypes
 */


function Label(props){
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

Label.propTypes = propTypes;
Label.defaultProos = defaultProos;

export default Label;