import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { i18n, Language } from '../i18n';
import Navbar from './Navbar';
import NavTabs from './NavTabs';
import { getAccountDetail, getBountyTasks } from '../actions';
import TaskCard from './TaskCard';
import { authentication } from '../authentication';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        authentication.requireAuth();
    }

    componentDidMount() {
        this.props.getAccountDetail();
        this.props.getBountyTasks();
    }

    renderTasks() {
        if (!this.props.bounty_tasks)
            return null;
        return _.map(this.props.bounty_tasks, task => {
            return (
                <div key={task.id}>
                    <div className="mt-4 mb-4" />
                    <TaskCard task={task}/>
                </div>
            )
        });
    }

    renderIntro() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Bounty Campaign</h5>
                    <div style={{fontSize: "16px"}}>
                        <div className="card-text">We would like to build the EON network together with all our community members. All participants in the bounty program will be rewarded with EON tokens.</div>
                        <div className="mt-1 card-text">1.Period:</div>
                        <div className="card-text">7-week long, from June 07, 2018 to July 26, 2018(SGT). The campaign will be closed once all bouties are claimed.</div>
                        <div className="mt-1 card-text">2.Total Bounties:</div>
                        <div className="card-text">20,000,000 EON tokens, equal to $600,000 (converted based on ICO price).</div>
                        <div className="mt-1 card-text">3.Support:</div>
                        <div className="card-text">Replay below or join <a href="https://t.me/eontoken3">EON Token</a> (our official telegram group) if you got any questions</div>
                        <div className="mt-1 card-text">4.Bounty Distribution:</div>
                        <div className="card-text">All bounty tokens will be distributed in the following gampaigns</div>
                        <div className="mt-3 container row">
                            <table className="table table-bordered table-sm offset-md-3 col-md-6">
                                <tbody>
                                    <tr>
                                        <td>Bitcointalk</td>
                                        <td>20%</td>
                                        <td>4,000,000 EON</td>
                                    </tr>
                                    <tr>
                                        <td>Blog (Steemit, Medium, etc)</td>
                                        <td>20%</td>
                                        <td>4,000,000 EON</td>
                                    </tr>
                                    <tr>
                                        <td>Video (Youtube, Twitch)</td>
                                        <td>10%</td>
                                        <td>2,000,000 EON</td>
                                    </tr>
                                    <tr>
                                        <td>Reddit</td>
                                        <td>5%</td>
                                        <td>1,000,000 EON</td>
                                    </tr>
                                    <tr>
                                        <td>Telegram</td>
                                        <td>5%</td>
                                        <td>1,000,000 EON</td>
                                    </tr>
                                    <tr>
                                        <td>Social Media(FB, Twitter, etc)</td>
                                        <td>40%</td>
                                        <td>8,000,000 EON</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-1 card-text">5.EON Duke:</div>
                        <div className="card-text">We'll select winner of each campaign as ED (EON Duke). EDs are active contributors of the EON community. And as a result, they will enjoy previleges in the public sale (e.g., extra bonus, 10% max).</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="mb-4">
                <Navbar account={this.props.account} />
                <div className="container">
                    <div className="mt-4 mb-4" />
                    <NavTabs navItem="tasks" />
                    <div className="mt-4 mb-4" />
                    {this.renderIntro()}
                    <div className="mt-4 mb-4" />
                    {this.renderTasks()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        bounty_tasks: state.bounty.tasks,
    };
}

export default connect(mapStateToProps, { getAccountDetail, getBountyTasks })(withRouter(Tasks));
