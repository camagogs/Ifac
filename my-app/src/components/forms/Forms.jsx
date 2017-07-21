import React from 'react';

import Label from './Label';

const propTypes = {
    prop: React.propTypes.string,
};

const defaultProos = {
    prop: '',
};

function Form(props){
    const titleSize = 4 * 2;
    return (
        <form>
            <Label type="header" size ={4 * 2} >Titulo</Label>
            {props.children}
            {}
        </form>
    );
}

Form.propType = propTypes;
Form.defaultProos = defaultProos;

export default Form;
