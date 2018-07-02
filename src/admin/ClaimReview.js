import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getAccountDetail, getPendingBountyClaims } from '../actions';
import { authentication } from '../authentication';
import ClaimReviewCard from './ClaimReviewCard';

class ClaimReview extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        authentication.requireAdmin();
    }

    componentDidMount() {
        this.props.getAccountDetail();
        this.props.getPendingBountyClaims();
    }

    renderClaimReviews() {
        if (!this.props.pending_claims)
            return null;
        return _.map(this.props.pending_claims, claim => {
            return (
                <div key={claim.id}>
                    <div className="mt-4 mb-4" />
                    <ClaimReviewCard claim={claim}
                        getPendingBountyClaims={this.props.getPendingBountyClaims}/>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="container">
                {this.renderClaimReviews()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        pending_claims: state.bounty.pending_claims,
    };
}

export default connect(mapStateToProps, { getAccountDetail, getPendingBountyClaims })(withRouter(ClaimReview));
