import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from './../../parts/validations';
import { Textarea } from './../../parts/FormsControls';

let maxLength20 = maxLength(20);



const Dialogs = (props) => {



    let addMessage = (Message) => {

        props.addMessage(Message.addMessage)
    }



    let dialogsElem = props.DialogsPage.Dialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        icon={dialog.icon}
        key={dialog.id}
    />);

    let messagesElem = props.DialogsPage.Messages.map(m => <Message
        message={m.message}
        align={m.my ? 'right' : 'left'}
        key={m.id}
    />);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElem}
                </div>
                <div className={s.messages}>
                    {messagesElem}
                    <DialogForm onSubmit={addMessage} />
                </div>



            </div>
        </div>
    )
}


let DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="addMessage" label='Enter message' validate={[required, maxLength20]} />
            </div>
            <div>
                <button >Message</button>
            </div>

        </form>
    )
}
DialogForm = reduxForm({ form: 'addMessage' })(DialogForm)
export default Dialogs;