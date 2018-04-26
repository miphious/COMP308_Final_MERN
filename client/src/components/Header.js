import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">MyClinic</div>
                    <Link className="pt-button pt-minimal" to="/">Home</Link>
                </div>
                
                <div className="pt-navbar-group pt-align-right">
                    <Link className="pt-button pt-minimal" to="/login">Login</Link>
                    <span className="pt-navbar-divider"/>
                    <Link className="pt-button pt-minimal" to="/login">Register</Link>
                </div>
            </nav>

        );
    }
}
export default Header;