import React  from 'react';
import { Field } from 'redux-form';
import style from './FieldFunction.module.css'



const FieldFunction=(name,component,label,type,validate,text)=>{

   return<div >
  <div className={style.field}> {text}</div>
    <div >
     <Field name={name} component={component} label={label} type={type} validate={validate} />
       
    </div>
     
   </div>  
}
export default FieldFunction