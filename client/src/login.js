import React, { Component } from 'react';
import logo from './Assets/doctor.jpg';
import Header  from './components/Header';
import LoginForm from './components/loginForm';
class login extends Component {
        render() {
            return(
                <div>
                    <Header/>
                    <br/>
                    <LoginForm/>

                </div>
            );
    }
}
export default login;