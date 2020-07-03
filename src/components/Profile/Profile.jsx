import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile =   (props) => {

  return (
    <div >
      <ProfileInfo isOwner={props.isOwner}
       SavePhoto={props.SavePhoto} 
       profile={props.profile}
        status={props.status} 
        updateStatus={props.putProfileUserStatus}
        putProfileUser={props.putProfileUser}
        editMode={props.editMode}
        editModeSuccess={props.EditModeSuccess}
        />
      <MyPostContainer
       
        

      />
    </div>




  )
}
export default Profile
