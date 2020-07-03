import React from 'react';
import FieldFunction from './FieldFunction';
import { Input } from './FormsControls';
import { Field, reduxForm } from 'redux-form'

 


const Captcha=(props)=>{

    return(
    <div>
    <img src={props.url}/>
    {FieldFunction("captcha",Input,"","text",[])}
    {/* <button>Submit</button> */}


    </div>
        )
}

export default Captcha