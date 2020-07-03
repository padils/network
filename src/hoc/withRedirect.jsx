import  React  from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToPropsRedirect = (state) => {


    return {
        
        isAuth:state.Auth.isAuth
        
    }
  
  };
 export const WithRedirect =(Component)=>{
     

    class ComponentContainer extends React.Component{

        render() {
            if(!this.props.isAuth)return <Redirect to = "/login"/>;
       
            return <Component{...this.props}/>      
        }

    }
    return connect(mapStateToPropsRedirect)(ComponentContainer);

    

}

  