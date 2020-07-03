import React from 'react';
import { reduxForm } from 'redux-form'
import { required, maxLength } from './../../parts/validations';
import { Input } from '../../parts/FormsControls';
import { connect } from 'react-redux';
import { Log_in } from './../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import style from '../../parts/FormsControls.module.css'
import FieldFunction from './../../parts/FieldFunction';


let maxLength15 = maxLength(30);

let Login = (props) => {
    let submit = (values) => {
        props.Log_in(values)

    }

    if (props.isAuth) return <Redirect to="/profile" />



    return (<div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={submit} captcha={props.captcha} />



    </div>)
}
let LoginForm = (props) => {

    return (<div>

        <form onSubmit={props.handleSubmit}>


            {FieldFunction("login", Input, "login", "text", [required, maxLength15])}


            {FieldFunction("password", Input, "password", "password", [required])}



            {FieldFunction("rememberMe", Input, "rememberMe", "checkbox", [], 'rememberMe')}



            {props.error && <div className={style.form}>
                {props.error}
            </div>}
            {props.captcha && <div>
                <img src={props.captcha} />
                {FieldFunction("captcha", Input, "", "text", [])}



            </div>}
            <div>
                <button > Log In</button>
            </div>



        </form>

    </div>)
}

LoginForm = reduxForm({

    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => {


    return {
        isAuth: state.Auth.isAuth,
        captcha: state.Auth.captcha
    }

};

export default connect(mapStateToProps, { Log_in })(Login)