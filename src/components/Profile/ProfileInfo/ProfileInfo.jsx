import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatusFunction from './ProfileStatusFunction';
import { InfoUser, InfoUserForm } from './ProfileData';
import nonePhoto from './../../../parts/nonePhoto';





const ProfileInfo = (props) => {


  
  let [changePhoto, setChangePhoto] = useState(false)
  let [editMode, setEditMode] = useState(false)
  

  let submit = (values) => {
    props.putProfileUser(values)
    setEditMode(false)
  }
  
 
  const mainPhoto = (e) => {
    props.SavePhoto(e.target.files[0]);
  }
  let setEditModeHook = () => {
    setEditMode(true)
  }
  return (
    <div className={s.content}>

      <div className={s.Photo}>

        <img
          onBlur={() => { setChangePhoto(false) }}
          onClick={() => { setChangePhoto(true) }}
          className={s.img} src={props.profile.photos.large ? props.profile.photos.large : nonePhoto()} />

        {changePhoto && <div>

          {props.isOwner && <div>
            <input className={s.inputFile} type='file' onChange={mainPhoto} />
            <button onClick={() => { setChangePhoto(false) }}> Close </button>

          </div>}

        </div>
        }
      </div>


      <div className={s.descriptionsBlock}>
        <b> status: </b>
        <ProfileStatusFunction
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner} />

        {!editMode
          ? <InfoUser {...props} setEditMode={setEditModeHook} />
          : <InfoUserForm onSubmit={submit}
            {...props}
            initialValues={props.profile}
            setEditMode={setEditModeHook} />}
        <div>


        </div>


      </div>



    </div>


  )
}
export default ProfileInfo