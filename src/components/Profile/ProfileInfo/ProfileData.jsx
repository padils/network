import React from 'react';
import { reduxForm } from 'redux-form';
import FieldFunction from '../../../parts/FieldFunction';
import { Input } from '../../../parts/FormsControls';
import style from './ProfileData.module.css'




export const InfoUser = (props) => {


  return (
    <div>{props.isOwner &&
      <button onClick={props.setEditMode}>edit</button>
}
      <div>
        <b>fullName:</b> {props.profile.fullName}
      </div>
      <div>
        <b>lookingForAJob: </b>{props.profile.lookingForAJob ? `YES` : `NO`}
      </div>
      <div>
        <b>lookingForAJobDescription: </b>{props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>AboutMe: </b>{props.profile.aboutMe}
      </div>
      <div>
        <b>contacts: </b>{
          Object.keys(props.profile.contacts).map(contact => {
            return <Contact key={contact} contactTitle={contact} contactValue={props.profile.contacts[contact]} />
          })

        }
      </div>


    </div>

  )
}

export let InfoUserForm = (props) => {


  return (
    <div >
      <form onSubmit={props.handleSubmit}>
      {props.error && <div >
                {props.error}
            </div>}
      <div>
          <button >save</button>
        </div>

        <div>
          <b>fullName:</b> {FieldFunction("fullName", Input, '', 'text', null)}
        </div>
        <div>
          <b>lookingForAJob: </b>
          {FieldFunction("lookingForAJob", Input, null, 'checkbox', null)}
        </div>
        <div>
          <b>lookingForAJobDescription: </b>
          {FieldFunction("lookingForAJobDescription", Input, '', 'text', null)}
        </div>
        <div>
          <b>aboutMe: </b>
          {FieldFunction("aboutMe", Input, '', 'text', null)}
        </div>
        <div>
          <b>contacts: </b>
          {
            Object.keys(props.profile.contacts).map(contact => {
              return <div key={contact} className={style.contact} > 
              <b>{contact}:</b>{FieldFunction(`contacts.${contact}`, Input, '', 'text', null)}
              </div>
            })

          }
        </div>

        
      </form>

    </div>
  )
}
InfoUserForm = reduxForm({

  form: 'InfoForm'
})(InfoUserForm)



const Contact = ({ contactTitle, contactValue }) => {

  return (<div className={style.contact} >
    <b>{contactTitle}</b>:<b>{contactValue}</b>
  </div>)
}