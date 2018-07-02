import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { i18n, Language } from '../i18n';
import PropTypes from 'prop-types';
import { accountLogout } from '../actions';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const email = this.props.account ? this.props.account.username : "...";
        const eon_hold = this.props.account ? parseInt(this.props.account.account_profile.eon_hold) : 0;
        const eon_approved = this.props.account ? parseInt(this.props.account.account_profile.eon) : 0;
        return (
            <nav className="navbar navbar-dark navbar-expand-sm" style={{backgroundImage: "linear-gradient(-45deg, #5F6190 0%, #525480 20%, #131b2e 100%)"}} role="navigation">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img src="/image/logo_icon.png" className="mr-3 img-fluid" style={{width: 35}} />
                <b><a className="navbar-brand" href="/">EON</a></b>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse" style={{fontSize: "80%"}}>
                    <span className="navbar-text ml-3" style={{color: "white"}}>
                        {i18n.get(Language.BOUNTY_EON_HOLD)} <b style={{fontSize: "14px"}}>{eon_hold} EON</b>. {i18n.get(Language.BOUNTY_EON_APPROVED)} <b style={{fontSize: "14px"}}>{eon_approved} EON</b>.
                    </span>
                    <span className="navbar-text ml-3" style={{color: "white", fontSize: "16px"}}>
                        <b>{email}</b>
                    </span>
                    <span className="ml-3" style={{color: "white", cursor: "pointer"}} onClick={accountLogout}>
                        <ion-icon name="exit"></ion-icon>
                    </span>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    account: PropTypes.object,
};

export default withRouter(Navbar);
