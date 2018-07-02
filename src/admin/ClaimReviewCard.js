import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n, Language } from '../i18n';
import { BountyTaskType, BountyClaimType, BountyClaimStatusUpdateType } from '../enums';
import FormError from '../bounty/FormError';
import { postApproveBountyClaim, postRejectBountyClaim } from '../actions';

class ClaimReviewCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            error: null,
        };

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleApproveClick = this.handleApproveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
    }

    handleApproveClick(event) {
        event.preventDefault();
        postApproveBountyClaim(
            {
                'bounty_claim_record': this.props.claim.id,
            },
            (res) => {
                const result = res.data;
                if (result.success) {
                    this.props.getPendingBountyClaims();
                }
                else {
                    this.setState({...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
                }
            },
            (err) => {
                this.setState({ ...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
            }
        );
    }

    handleRejectClick(event) {
        event.preventDefault();
        if (!this.state.message)
        {
            this.setState({...this.state, error: "Please fill message!"});
            return;
        }
        postRejectBountyClaim(
            {
                'bounty_claim_record': this.props.claim.id,
                'message': this.state.message
            },
            (res) => {
                const result = res.data;
                if (result.success) {
                    this.props.getPendingBountyClaims();
                }
                else {
                    this.setState({...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
                }
            },
            (err) => {
                this.setState({ ...this.state, error: i18n.get(Language.UNEXPECTED_ERROR) });
            }
        );
    }

    handleMessageChange(event) {
        this.setState({ ...this.state, message: event.target.value });
    }

    renderClaimReview() {
        const claim = this.props.claim;
        return (
            <form>
                <div className="form-group col-md-12">
                    <input type="text"
                        className="form-control"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}/>
                </div>
                <div className="form">
                    <button
                        className="offset-md-2 mt-2 col-md-3 btn-shadow btn-shadow-success"
                        style={{fontWeight: "400"}}
                        onClick={this.handleApproveClick}>
                        Approve
                    </button>
                    <button
                        className="offset-md-2 mt-2 col-md-3 btn-shadow btn-shadow-danger"
                        style={{fontWeight: "400"}}
                        onClick={this.handleRejectClick}>
                        Reject
                    </button>
                </div>
            </form>
        );
    }

    renderClaimBody() {
        const { user, bounty_task, extra_info } = this.props.claim;
        const eon_reward = parseInt(bounty_task.eon_reward);
        if (bounty_task.task_type == BountyTaskType.BitcointalkPost) {
            return (
                <div className="card-body">
                    <h5 className="card-title">#{this.props.claim.id} {i18n.get(Language.BOUNTY_BITCOINTALKS_POST_TASK_TITLE)}</h5>
                    <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>Bitcointalk Username: {user.account_profile.bct_username}</p></b>
                    <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>Application Post Number: {extra_info}</p></b>
                    <hr/>
                    <FormError error={this.state.error} />
                    {this.renderClaimReview()}
                </div>
            );
        }
        return (
            <div className="card-body">
                <h5 className="card-title">#TODO</h5>
                <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>{i18n.get(Language.BOUNTY_REWARD)}: {eon_reward} EON</p></b>
                <hr/>
                <FormError error={this.state.error} />
                {this.renderClaimReview()}
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                {this.renderClaimBody()}
            </div>
        );
    }
}

ClaimReviewCard.propTypes = {
    claim: PropTypes.object,
    getPendingBountyClaims: PropTypes.func,
};

export default ClaimReviewCard;
