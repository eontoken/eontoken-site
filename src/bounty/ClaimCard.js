import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n, Language } from '../i18n';
import { BountyTaskType, BountyClaimType, BountyClaimStatusUpdateType } from '../enums';
import { getTimeString } from '../util';

class ClaimCard extends Component {

    renderClaimBodyContent() {
        const claim = this.props.claim;
        let content = null;
        const task = claim.bounty_task;
        if (task.task_type == BountyTaskType.BitcointalkPost)
        {
            content = (
                <h5 className="card-title">{i18n.get(Language.BOUNTY_BITCOINTALKS_POST_TASK_TITLE)}</h5>
            );
        }
        return content;
    }

    renderClaimStatusUpdates() {
        const claim = this.props.claim;
        const { status_updates } = claim;
        const list_items = [];
        _.map(status_updates, update => {
            let status = "";
            const { create_time } = update;
            if (update.status == BountyClaimStatusUpdateType.Submitted) {
                status = "Submitted";
            }
            else if (update.status == BountyClaimStatusUpdateType.Rejected) {
                status = "Rejected";
            }
            else if (update.status == BountyClaimStatusUpdateType.Success) {
                status = "Approved";
            }
            list_items.push(
                <li key={create_time} style={{color: "#717171"}}>{status} - {getTimeString(create_time)}</li>
            );
            if (update.status == BountyClaimStatusUpdateType.Rejected) {
                list_items.push(
                    <li key={create_time + ".0"} style={{color: "#717171"}}>Reason:</li>
                );
                list_items.push(
                    <pre key={create_time + ".1"} className="bg-light p-2 mt-1" style={{color: "#717171"}}>{update.message}</pre>
                );
            }
        });
        if (claim.status == BountyClaimType.Verifying) {
            list_items.push(
                <li key={claim.claim_time} style={{color: "#717171"}}>Awaiting approval</li>
            );
        }
        return (
            <ul className="list-group ml-4 mr-4" style={{fontSize: "15px"}}>
                {list_items}
            </ul>
        );
    }

    renderReSubmitButton() {
        const claim = this.props.claim;
        const { bounty_task } = claim;
        const href = "/bounty/tasks/" + bounty_task.id;
        if (claim.status == BountyClaimType.Rejected) {
            return (
                <a className="btn-shadow btn-shadow-info"
                    href={href}
                    style={{color: "white", fontWeight: "400"}}>
                    Re-Submit
                </a>
            );
        }
        return null;
    }

    renderClaimBody() {
        const { bounty_task } = this.props.claim;
        const eon_reward = parseInt(bounty_task.eon_reward);
        return (
            <div className="card-body">
                {this.renderClaimBodyContent()}
                <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>{i18n.get(Language.BOUNTY_REWARD)}: {eon_reward} EON</p></b>
                <hr/>
                {this.renderClaimStatusUpdates()}
                {this.renderReSubmitButton()}
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

ClaimCard.propTypes = {
    claim: PropTypes.object,
};

export default ClaimCard;
