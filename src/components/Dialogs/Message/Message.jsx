import React from 'react';
import s from './Message.module.css'



const Message = (props) => {
    return (
        <div className={s.message} align ={props.align}>{props.message}</div>

    )

}


export default Message;