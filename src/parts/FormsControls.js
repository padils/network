import React from 'react';
import s from "./FormsControls.module.css"



export const Textarea = ({ input, label, type, meta: { touched, error } }) => {
    
    
    return (
        <div className={touched && error? s.form:undefined}>
           <div > <textarea {...input} placeholder={label} type={type}/></div>
            {touched && error && <span>{error}</span> }


        </div>
    )

}
export const Input = ({ input, label, type, meta: { touched, error } }) => {
    
    return (
        <div >
            <div className={touched && error? s.form:undefined}>
               <div > <input className={s.input} {...input} placeholder={label} type={type}/></div>
                {touched && error && <span>{error}</span> }
    
    
            </div>
        </div>
    )

}