import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { i18n, Language } from '../i18n';
import FormError from './FormError';
import { accountLogin } from '../actions';
import { authentication } from '../authentication';
import { APIError } from '../actions/APIError';
import { validateUserName, validatePassword } from '../util';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null,
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
        $("#email").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#login-btn").click();
            }
        });

        $("#password").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#login-btn").click();
            }
        });
    }

    handleLoginClick(event) {
        event.preventDefault();
        // validate username
        let ret = validateUserName(this.state.username);
        if (!ret.result) {
            this.setState({...this.state, error: ret.msg});
            return;
        }
        // validate password
        ret = validatePassword(this.state.password);
        if(!ret.result){
            this.setState({...this.state, error: ret.msg});
            return;
        }
        // start to login user
        accountLogin({
            username: this.state.username,
            password: this.state.password,
        }, (res) => {
            const result = res.data;
            if (result.success) {
                this.setState({ ...this.state, error: null });
                authentication.setToken(result.key);
                window.location = '/bounty/tasks';
            }
            else {
                this.setState({ error: APIError[result.code] });
            }
        }, (err) => {
            this.setState({ ...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
        });
    }

    handleUsernameChange(event) {
        this.setState({...this.state, username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({...this.state, password: event.target.value});
    }

    render() {
        return (
                <div className="container">
                    <div className="header">
                        <a href="/" className="logo">
                            <img src="/image/logo_icon.png" className="mr-3 mb-3 img-fluid" style={{width: 45}} />
                            <b style={{color: "#59bded"}}>EON</b>
                        </a>
                        <h4>{i18n.get(Language.BOUNTY_SIGNIN_ACCOUNT)}</h4>
                    </div>

                    <div className="wrapper">
                        <div className="formy">
                            <form role="form">
                                <div className="form-group">
                                    <input id="email" type="email"
                                        className="form-control form-control-lg"
                                        placeholder={i18n.get(Language.BOUNTY_EMAIL_ADDRESS)}
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input id="password" type="password"
                                        className="form-control form-control-lg"
                                        placeholder={i18n.get(Language.BOUNTY_PASSWORD)}
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                        required />
                                </div>
                                <FormError error={this.state.error} />
                                <div className="text-center mt-4">
                                    <button id="login-btn" type="button"
                                        className="submit btn-block btn-shadow btn-shadow-info"
                                        style={{fontWeight: "400"}}
                                        onClick={this.handleLoginClick}>
                                        {i18n.get(Language.BOUNTY_SIGNIN)}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="already-account">
                        <b>
                            {i18n.get(Language.BOUNTY_DONT_HAVE_ACCOUNT)}
                            <a href="/bounty/register" style={{color: "#459ce7"}}> {i18n.get(Language.BOUNTY_CREATE_ACCOUNT)}</a>
                        </b>
                    </div>
                </div>
        );
    }
}

export default withRouter(Signin);
