import React, { Component } from 'react';
import FormError from './FormError';
import { Link, withRouter } from 'react-router-dom';
import { i18n, Language } from '../i18n';
import { validateUserName, validatePassword, validateEthAddress } from '../util';
import { accountRegister } from '../actions';
import { authentication } from '../authentication';
import { APIError } from '../actions/APIError';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            eth_address: '',
            error: null,
        };

        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEthAddressChange = this.handleEthAddressChange.bind(this);
    }

    handleRegisterClick(event) {
        event.preventDefault();
        // validate username
        let ret = validateUserName(this.state.username);
        if (!ret.result) {
            this.setState({ ...this.state, error: ret.msg });
            return;
        }
        // validate password
        ret = validatePassword(this.state.password);
        if (!ret.result) {
            this.setState({ ...this.state, error: ret.msg });
            return;
        }
        // validate eth address
        ret = validateEthAddress(this.state.eth_address);
        if (!ret.result) {
            this.setState({ ...this.state, error: ret.msg });
            return;
        }
        // start to register user
        accountRegister({
            username: this.state.username,
            password: this.state.password,
            eth_address: this.state.eth_address,
        }, (res) => {
            const result = res.data;
            if (result.success) {
                this.setState({ ...this.state, error: null });
                authentication.setToken(result.key);
                window.location = '/bounty/tasks';
            }
            else {
                this.setState({ ...this.state, error: APIError[result.code] });
            }
        }, (err) => {
            this.setState({ ...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
        });
    }

    handleUsernameChange(event) {
        this.setState({ ...this.state, username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ ...this.state, password: event.target.value });
    }

    handleEthAddressChange(event) {
        this.setState({ ...this.state, eth_address: event.target.value });
    }

    render() {
        return (
                <div className="container">
                    <div className="header">
                        <a href="/" className="logo">
                            <img src="/image/logo_icon.png" className="mr-3 mb-3 img-fluid" style={{width: 45}} />
                            <b style={{color: "#59bded"}}>EON</b>
                        </a>
                        <h4>{i18n.get(Language.BOUNTY_SIGNUP_ACCOUNT)}</h4>
                        <p style={{fontSize: "14px"}}>
                        {i18n.get(Language.BOUNTY_SIGNUP_FOR_BOUNTY)}
                        </p>
                    </div>

                    <div className="wrapper">
                        <div className="formy">
                            <form role="form">
                                <div className="form-group">
                                    <input id="wallet" type="text"
                                        className="form-control form-control-lg"
                                        placeholder={i18n.get(Language.BOUNTY_YOUR_WALLET_ADDRESS)}
                                        value={this.state.eth_address}
                                        onChange={this.handleEthAddressChange}
                                        required />
                                </div>
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
                                <div className="checkbox">
                                    <label>
                                        <b>
                                            <input type="checkbox"/> {i18n.get(Language.BOUNTY_CONFIRM_ALL_DETAIL_CORRECT)}
                                        </b>
                                    </label>
                                </div>
                                <div className="text-center mt-5">
                                    <button
                                        className={"submit btn-block btn-shadow btn-shadow-info"}
                                        style={{fontWeight: "400"}}
                                        onClick={this.handleRegisterClick}>
                                        {i18n.get(Language.BOUNTY_REGISTER_ACCOUNT)}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="already-account">
                        <b>
                            {i18n.get(Language.BOUNTY_ALREADY_HAVE_ACCOUNT)}
                            <a href="/bounty/signin" style={{color: "#459ce7"}}> {i18n.get(Language.BOUNTY_SIGNIN_ACCOUNT)}</a>
                        </b>
                    </div>
                </div>
        );
    }
}

export default withRouter(Register);
