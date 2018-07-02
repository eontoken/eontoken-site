import React, { Component } from 'react';
import './airdrop.css';
import { i18n, Language } from './i18n'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';
import postars from './star'
import { TELEGRAM_LINK } from './consts';

class Airdrop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMsg: null,
            address: localStorage.walletAddress ? localStorage.walletAddress : ''
        };

        const url = new URL(window.location.href);
        this.inviteCode = url.searchParams.get('invite_code');

        $(document).ready(() => {
            let myPoststar = new postars($(this.canvas)[0]);
            myPoststar.init();
        });
    }

    render() {
        return (
            <div className="root d-flex w-100" >
                <div style={{ position: 'absolute' }} >
                    <div>
                        <canvas className="d-block" ref={(o) => {this.canvas = o;}} />
                    </div>
                </div>
                <div
                    className="content-root w-100 d-flex align-self-stretch flex-column align-items-center  text-white px-3" >
                    <Link to="/" >
                        <img className="logo" src="../image/logo.png" />
                    </Link>
                    <a href='#' className="mt-5" onClick={() => {
                        const win = window.open(TELEGRAM_LINK);
                        win.focus();
                    }} >
                        <button className="btn main-button px-4" >{i18n.get(Language.JOIN_TELEGRAM)}</button>
                    </a>
                    <div className="mt-3 px-4 body-text" >{i18n.get(Language.NOVA_INTRO_1)}</div>
                    <div className="px-4 body-text" >{i18n.get(Language.NOVA_INTRO_2)}</div>
                    <div className="px-4 body-text" >{i18n.get(Language.NOVA_INTRO_3)}</div>

                    <div className="mt-5 body-text align-self-stretch" >{i18n.get(Language.INPUT_ADDRESS)}<span
                        className="color-main" >{i18n.get(Language.INPUT_ADDRESS_HIGHLIGHT)}</span></div>

                    <div className="mt-3 row d-flex flex-row justify-content-center body-text align-self-stretch p-3" >
                        <div className="col-auto" />
                        <input
                            className="input-main form-control col-sm-5 mb-3 "
                            placeholder={i18n.get(Language.INPUT_ADDRESS_HINT)}
                            // value={localStorage.walletAddress ? localStorage.walletAddress : null}
                            value={this.state.address}
                            onChange={(event) => {
                                this.setState({
                                    address : event.target.value
                                });
                            }} />
                        <div  className="col-sm-auto">
                            <button
                                className="main-button btn mr-auto mb-3 px-5"
                                onClick={this.postAddress} >{i18n.get(Language.SUBMIT)}
                            </button>

                        </div>
                        <div className="col-auto" />

                    </div>
                    <div className='error-msg mt-2' >{this.state.errorMsg}</div>
                </div>
            </div>
        );
    }

    postAddress = () => {
        // this.props.history.push('/join');
        // return;
        // this.address = '0x4d622f2ca6d7e40145d3fca232310e817ffd2043';
        if (this.state.address) {
            axios.post('/account/airdrop_info/', {
                address: this.state.address,
                invite_code: this.inviteCode
            }, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }).then((res) => {
                if (res && res.data) {
                    if (res.data.success) {
                        localStorage.walletAddress = this.state.address;
                        this.props.history.push({
                            pathname: '/join',
                            state: { data: res.data }
                        })
                    } else {
                        if (res.data.code === 1003) {
                            this.setState({
                                errorMsg: i18n.get(Language.ERROR_ADDRESS)
                            })
                        } else {
                            this.setState({
                                errorMsg: i18n.get(Language.ERROR) + res.data.code + ' msg: ' + res.data.msg
                            })
                        }
                    }
                }
            }).catch(e => {
                this.setState({
                    errorMsg: i18n.get(Language.ERROR_ADDRESS)
                })

            })
        } else {
            this.setState({
                errorMsg: i18n.get(Language.ERROR_ADDRESS)
            })
        }
    }
}

export default withRouter(Airdrop);
