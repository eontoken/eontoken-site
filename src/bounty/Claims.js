import _ from 'lodash';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { i18n, Language } from '../i18n';
import Navbar from './Navbar';
import NavTabs from './NavTabs';
import { getAccountDetail, getBountyClaims } from '../actions';
import ClaimCard from './ClaimCard';
import { authentication } from '../authentication';

class Claims extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        authentication.requireAuth();
    }

    componentDidMount() {
        this.props.getAccountDetail();
        this.props.getBountyClaims();
    }

    renderClaims() {
        if (!this.props.bounty_claims)
            return null;
        return _.map(this.props.bounty_claims, claim => {
            return (
                <div key={claim.id}>
                    <div className="mt-4 mb-4" />
                    <ClaimCard claim={claim}/>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="mb-4">
                <Navbar account={this.props.account} />
                <div className="container">
                    <div className="mt-4 mb-4"></div>
                    <NavTabs navItem="claims" />
                    <div className="mt-4 mb-4"></div>
                    {this.renderClaims()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        bounty_claims: state.bounty.claims,
    };
}

export default connect(mapStateToProps, { getAccountDetail, getBountyClaims })(withRouter(Claims));
