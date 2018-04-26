import React, {Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">MyClinic</div>
                    <Router exact path="/"className="pt-button pt-minimal" >Home</Router>
                </div>
                
                <div className="pt-navbar-group pt-align-right">
                    <Router path="/login" className="pt-button pt-minimal" >Login</Router>
                    <span className="pt-navbar-divider"/>
                    <Router path="/login" className="pt-button pt-minimal" >Register</Router>
                </div>
            </nav>

        );
    }
}
export default Header;