import React from 'react';
import { SetAuthUserProfile, AuthMe ,Log_out} from './../../redux/auth_reducer';
import { connect } from 'react-redux';
import Header from './Header';

let HeaderCon =(props)=>{

  
    return <Header {...props}/>
  
}
let mapStateToProps = (state) => {


  return {
     Auth:state.Auth
  }

};




const HeaderContainer = connect(mapStateToProps, {SetAuthUserProfile,Log_out})(HeaderCon)

export default HeaderContainer

