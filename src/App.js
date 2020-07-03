import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initialApp } from './redux/app_reducer';
import Preloader from './parts/Preloader';
import { WithSuspense } from './hoc/withSuspense';
import store from './redux/redux_store';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/login/login'));



const App =(props)=> {

  useEffect(()=> {


    props.initialApp()

  },[props.initial])

    if (!props.initial) {
      return Preloader()
    }

    return (
      <div>
        <div className='app-wrapper'>

          <HeaderContainer />

        
            <Navbar />
            
            <div className='app-wrapper-content'>
            

            <Switch>

              <Route exact path='/' render={() =><Redirect to={'/profile'}/> } />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/profile/:userId?' render={() =>  WithSuspense(ProfileContainer)} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => WithSuspense(Login)} />
              
              
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='*' render={() => <h1>404</h1>} />
              
              
              </Switch>
              
  
            </div>
         


        </div>
      </div>

    );
  
}


let mapStateToProps = (state) => {


  return {
    initial: state.App.initial
  }

};


let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialApp })
)(App);

const PadilsApp = (props)=>{
  
return <BrowserRouter>
            <Provider store = {store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
} 

export default PadilsApp

