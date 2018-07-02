import React, { Component } from 'react';
import './join.css';
import { i18n, Language } from './i18n'
import Clipboard from 'clipboard';
import { Link, withRouter } from 'react-router-dom';
import { TELEGRAM_LINK } from './consts';
import postars from './star'
import axios from 'axios'

class Join extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inviteCode: null,
            telegramCode: null,
            inviteCount: null,
            verifiedCount: null,
            tokens: null
        };

        if (!this.props.location.state ) {
            this.props.history.push({
                pathname: '/airdrop',
            })
        } else {
            $(document).ready(() => {
                let myPoststar = new postars($(this.canvas)[0]);
                myPoststar.init();
            });
            new Clipboard('.btn');
        }

    }

    componentDidMount() {
        if (localStorage.walletAddress) {
            axios.post('/account/airdrop_info/', {
                address: localStorage.walletAddress,
            }, {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }).then((res) => {
                if (res && res.data) {
                    if (res.data.success) {

                        const { invite_code, telegram_code, invite_count, invite_telegram_verified_count, tokens } = res.data;
                        this.setState({
                            inviteCode: invite_code,
                            telegramCode: telegram_code,
                            inviteCount: invite_count,
                            verifiedCount: invite_telegram_verified_count,
                            tokens: tokens
                        })
                    } else {
                        this.props.history.push({
                            pathname: '/airdrop',
                        })
                    }
                }
            })
        } else {
            this.props.history.push({
                pathname: '/airdrop',
            })
        }
    }

    render() {
        return (
            <div className="root d-flex w-100" >
                <div style={{ position: 'absolute' }} >
                    <canvas className="d-block" ref={(o) => {this.canvas = o;}} />
                </div>
                <div
                    className="content-root d-flex w-100 flex-column align-items-center justify-content-center text-white px-3" >
                    <Link to="/" >
                        <img className="logo" src="../image/logo.png" />
                    </Link>
                    <div className="mt-3 px-4 body-text" >{i18n.get(Language.NOVA_INTRO_1)}</div>
                    <div className="px-4 body-text" >{i18n.get(Language.NOVA_INTRO_2)}</div>
                    <div className="px-4 body-text" >{i18n.get(Language.NOVA_INTRO_3)}</div>

                    <div className="d-inline-flex flex-column align-items-start p-3 text-left body-text" >

                        <div className="mt-5" >{i18n.get(Language.JOIN_TELEGRAM_PART1)}
                            <a className="external-link" href='#' onClick={() => {
                                const win = window.open(TELEGRAM_LINK);
                                win.focus();
                            }} ><span
                                className="color-main" >{i18n.get(Language.JOIN_TELEGRAM_PART2)}
                            </span>
                            </a>
                        </div>
                        <div className="mt-2" >{i18n.get(Language.SEND_TELEGRAM_CODE_HINT_PART1)}<span
                            className="color-main" >88{i18n.get(Language.NOVA)}</span></div>
                        <div className="mt-3 d-flex flex-row justify-content-center align-self-stretch" >
                            <input
                                id='telegram_code'
                                className="input-main form-control w-80"
                                readOnly={true}
                                placeholder={i18n.get(Language.TELEGRAM_CODE_HINT)}
                                value={'/airdrop ' + this.state.telegramCode} />
                            <button
                                type="button"
                                className="main-button btn ml-3"
                                data-clipboard-target="#telegram_code"
                                style={{ width: '15vh' }} >{i18n.get(Language.COPY)}</button>
                        </div>
                        <div className="mt-2" >{i18n.get(Language.SHARE_LINK)}<span
                            className="color-main" >66{i18n.get(Language.NOVA)}</span></div>
                        <div className="mt-3 d-flex flex-row justify-content-center align-self-stretch" >
                            <input
                                id='share_link'
                                className="input-main form-control"
                                readOnly={true}
                                placeholder={i18n.get(Language.SHARE_LINK_HINT)}
                                value={'http://eontoken.io/airdrop?invite_code=' + this.state.inviteCode} />
                            <button
                                className="main-button btn ml-3"
                                data-clipboard-target="#share_link"
                                style={{ width: '15vh' }} >{i18n.get(Language.COPY)}</button>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-around align-self-stretch mt-5 body-text" >
                        <div>
                            <img src="/image/people.png" className="personal-icon" />
                            <div className="text-center" >{i18n.get(Language.SUCCESS_INVITE_PART1)} <span
                                className="personal-data" >{this.state.verifiedCount}</span> {i18n.get(Language.SUCCESS_INVITE_PART2)}
                            </div>
                        </div>

                        <div>
                            <img src="/image/people.png" className="personal-icon" />
                            <div className="text-center" >{i18n.get(Language.EARN_NOVA_PART1)}<span
                                className="personal-data" >{this.state.tokens}</span> {i18n.get(Language.EARN_NOVA_PART2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Join);
