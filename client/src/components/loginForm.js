import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            <div class="pt-form-group">
            <label class="pt-label" for="username">
              Username
              <span class="pt-text-muted">(required)</span>
            </label>
            <div class="pt-form-content">
              <input id="username" class="pt-input" style="width: 300px;" placeholder="Placeholder text" type="text" dir="auto" />
              <div class="pt-form-helper-text">Enter Username</div>
            </div>
          </div>
          <div class="pt-form-group">
          <label class="pt-label" for="password">
            Password
            <span class="pt-text-muted">(required)</span>
          </label>
          <div class="pt-form-content">
            <input id="password" class="pt-input" style="width: 300px;" placeholder="Placeholder text" type="text" dir="auto" />
            <div class="pt-form-helper-text">Enter Password</div>
          </div>
        </div>
        </form>
    </div>
        );
    }
}
export default Header;