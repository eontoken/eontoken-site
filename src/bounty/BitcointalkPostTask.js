import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { i18n, Language } from '../i18n';
import PropTypes from 'prop-types';
import FormError from './FormError';
import { APIError } from '../actions/APIError';
import { postBountyTaskClaim } from '../actions';

class BitcointalkPostTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post_number: '',
            bct_username: '',
            error: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostNumberChange = this.handlePostNumberChange.bind(this);
        this.handleBitcointalkUsernameChange = this.handleBitcointalkUsernameChange.bind(this);
    }

    handlePostNumberChange(event) {
        this.setState({ ...this.state, post_number: event.target.value });
    }

    handleBitcointalkUsernameChange(event) {
        this.setState({ ...this.state, bct_username: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const task = this.props.task;
        const request = { 'bounty_task': task.id };
        if (!this.state.post_number)
        {
            this.setState({...this.state, error: i18n.get(Language.POST_NUMBER_NOT_PROVIDE)});
            return;
        }
        if (!this.state.bct_username)
        {
            this.setState({...this.state, error: i18n.get(Language.BITCOINTALK_USERNAME_NOT_PROVIDE)});
            return;
        }
        request['post_number'] = this.state.post_number;
        request['bct_username'] = this.state.bct_username;

        this.setState({...this.state, error: null});
        postBountyTaskClaim(
            request,
            (res) => {
                const result = res.data;
                if (result.success) {
                    window.location = '/bounty/claims';
                }
                else {
                    this.setState({...this.state, error: APIError[result.code] });
                }
            },
            (err) => {
                this.setState({ ...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
            }
        );
    }

    render() {
        const txt1 = " to show your interest to the project, and you'll earn 100 EON!!! Notice only the first 500 will get this!";
        const txt2 = "You'll get rewards after your task is verified to be completed.";
        const eon_reward = parseInt(this.props.task.eon_reward);
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{i18n.get(Language.BOUNTY_BITCOINTALKS_POST_TASK_TITLE)}</h5>
                    <p style={{fontSize: "18px"}}>Post to the <a href="https://bitcointalk.org/index.php?topic=4432974">bounty thread</a>{txt1}</p>
                    <div className="bg-light p-2" style={{color: "#717171", fontSize: "16px"}}>
                        <div>Proof Of Interest</div>
                        <div>Telegram Id:</div>
                        <div>Twitter Profile Link:</div>
                        <div>Proof Of Interest (why do you want to support the project? At least 20 words to be valid):</div>
                        <div>Your Favorite Game:</div>
                        <div>Referrer's Bitcointalk Username (If there's no referr, just reply NO):</div>
                        <div>ETH Address:</div>
                    </div>
                    <form style={{marginTop: "8px"}}>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="applicationNumber" style={{fontSize: "16px"}}><b>Application Post Number</b></label>
                                <input id="applicationNumber" type="text"
                                    className="form-control"
                                    value={this.state.post_number}
                                    onChange={this.handlePostNumberChange}
                                    required/>
                                <div style={{fontSize: "13px", marginBottom: "8px"}}>This number is acquired by posting a "Proof of Interest" on Bitcointalk forum. (Detailed instructions here: <a href="https://steemit.com/eon/@eontoken/eon-bitcointalk-bounty-campaign">https://steemit.com/eon/@eontoken/eon-bitcointalk-bounty-campaign</a>)</div>
                            </div>
                            <div className="form-group col-md-5 offset-md-1">
                                <label htmlFor="bitcointalkUsername" style={{fontSize: "16px"}}><b>Bitcointalk Username</b></label>
                                <input id="bitcointalkUsername" type="text"
                                    className="form-control"
                                    value={this.state.bct_username}
                                    onChange={this.handleBitcointalkUsernameChange}
                                    required/>
                            </div>
                        </div>
                    </form>
                    <p className="card-text" style={{fontSize: "16px"}}>{txt2}</p>
                    <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>{i18n.get(Language.BOUNTY_REWARD)}: {eon_reward} EON</p></b>
                    <FormError error={this.state.error} />
                    <button className="btn-shadow btn-shadow-info mt-3"
                        style={{fontWeight: "400"}}
                        onClick={this.handleSubmit}>
                        {i18n.get(Language.BOUNTY_SUBMIT)}
                    </button>
                </div>
            </div>
        );
    }
}

BitcointalkPostTask.propTypes = {
    account: PropTypes.object,
    task: PropTypes.object,
};

export default BitcointalkPostTask;
