import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n, Language } from '../i18n';
import { BountyTaskType } from '../enums';

class TaskCard extends Component {

    renderTaskBodyContent(task) {
        let content = null;
        if (task.task_type == BountyTaskType.BitcointalkPost)
        {
            content = (
                <div>
                    <h5 className="card-title">{i18n.get(Language.BOUNTY_BITCOINTALKS_POST_TASK_TITLE)}</h5>
                </div>
            );
        }
        return content;
    }

    renderTaskBody() {
        const { bounty_task } = this.props.task;
        const href = "/bounty/tasks/" + bounty_task.id;
        const eon_reward = parseInt(bounty_task.eon_reward);
        return (
            <div className="card-body">
                {this.renderTaskBodyContent(bounty_task)}
                <b><p className="card-text" style={{fontSize: "16px", color: "#717171"}}>{i18n.get(Language.BOUNTY_REWARD)}: {eon_reward} EON</p></b>
                <a className="btn-shadow btn-shadow-info mt-3"
                    href={href}
                    style={{color: "white", fontWeight: "400"}}>
                    {i18n.get(Language.VIEW_DETAILS)}
                </a>
            </div>
        );
    }

    render() {
        return (
            <div className="card">
                {this.renderTaskBody()}
            </div>
        );
    }
}

TaskCard.propTypes = {
    task: PropTypes.object,
};

export default TaskCard;
