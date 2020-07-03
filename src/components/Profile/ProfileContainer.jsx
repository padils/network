import React from 'react';
import { EditModeSuccess, putProfileUser, SavePhoto, SetUserProfile, getProfileUser, getProfileUserStatus, putProfileUserStatus } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { WithRedirect } from '../../hoc/withRedirect';
import Preloader from '../../parts/Preloader';
import { useEffect } from 'react';

const ProfileUserContainer = (props) => {

  
  const refreshProfile = () => {
    
    let userId = props.match.params.userId; 
    if (!userId) {
      userId = props.myId;
    }
    props.getProfileUser(userId);
    props.getProfileUserStatus(userId)




  }

  useEffect(() => {
    refreshProfile()
  }, [props.match.params.userId,props.myId])

  if (props.downloadData) {

    return (<div>
      <Profile {...props}
        profile={props.profile}
        status={props.status}
        isOwner={!props.match.params.userId} />
    </div>
    )

  }
  return <Preloader />
}

let mapStateToProps = (state) => {


  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    myId: state.Auth.id,
    downloadData: state.ProfilePage.downloadData,



  }

};


export default compose(

  

  connect(mapStateToProps,
    {
      putProfileUser, SavePhoto, SetUserProfile,
      getProfileUser, getProfileUserStatus, putProfileUserStatus
    }),
    withRouter,
    WithRedirect



)(ProfileUserContainer)


