import React from 'react';
import './Login.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
const LoginForm = (props) => {
    return (
            <form className="form" onSubmit={props.handleSubmit}>
                <Field className="input"  placeholder="Email" name={'email'} component={Input}
                validate={[required]}/>
                    {/*<input className="input" type="email" placeholder="Ваш e-mail"/>*/}
                    {/*    <input className="input" type="tel" placeholder="Ваш телефон"/>*/}
                            <Field className="input" name="password" placeholder="Password" type={'password'} component={Input}
                                   validate={[required] }/>
                                {/*<input className="input" type="password" placeholder="Пароль еще раз"/>*/}
                                <div><Field  component={Input}  name={'rememberMe'} type={'checkbox'}/> Remember me</div>
                { props.error && <div className={'formSummaryError'}>
                                      {props.error}
                                  </div>}
                <div><button className="btn" type="submit">Login</button></div>
            </form>

    );
};

const LoginReduxForm = reduxForm({form:'Login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
       <div>
           <h1 className='login'>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>

    );
};

const mapStateToProps = (state) => ({
     isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);