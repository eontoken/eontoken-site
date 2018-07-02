import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { i18n, Language } from '../i18n';

class NavTabs extends Component {
    constructor(props) {
        super(props);
    }

    getNavLinkClass(item) {
        const { navItem } = this.props;
        if (navItem == item)
            return "nav-link active";
        return "nav-link";
    }

    render() {
        return (
            <ul className="nav nav-bordered">
                <li className="nav-item">
                    <a className={this.getNavLinkClass("tasks")} href="/bounty/tasks">{i18n.get(Language.BOUNTY_TASKS)}</a>
                </li>
                <li className="nav-item">
                    <a className={this.getNavLinkClass("claims")} href="/bounty/claims">{i18n.get(Language.BOUNTY_CLAIMS)}</a>
                </li>
            </ul>
        );
    }
}

export default withRouter(NavTabs);
