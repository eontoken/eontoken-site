import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { i18n, Language } from '../i18n';
import { authentication } from '../authentication';
import Navbar from './Navbar';
import NavTabs from './NavTabs';
import { getAccountDetail, getBountyTask, postBountyTaskClaim } from '../actions';
import { BountyTaskType } from '../enums';
import FormError from './FormError';
import { APIError } from '../actions/APIError';
import BitcointalkPostTask from './BitcointalkPostTask';

class TaskDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        authentication.requireAuth();
    }

    componentDidMount() {
        this.props.getAccountDetail();

        const { id } = this.props.match.params;
        this.props.getBountyTask(id);
    }

    renderTaskBody() {
        if (!this.props.task || !this.props.account)
            return null;
        const { account, task } = this.props;
        if (task.task_type == BountyTaskType.BitcointalkPost)
            return <BitcointalkPostTask task={task} account={account}/>
        return null;
    }

    render() {
        return (
            <div className="mb-5">
                <Navbar account={this.props.account} />
                <div className="container">
                    <div className="mt-4 mb-4"></div>
                    <NavTabs />
                    <div className="mt-4 mb-4"></div>
                    {this.renderTaskBody()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        task: state.bounty.task,
    };
}

export default connect(mapStateToProps, { getAccountDetail, getBountyTask })(withRouter(TaskDetail));
