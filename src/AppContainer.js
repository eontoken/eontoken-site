import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Homepage from './Homepage'
import Airdrop from './Airdrop'
import Join from './Join'
import Team from './Team';
import Bounty from './Bounty';
import BountySignin from './bounty/Signin';
import BountyRegister from './bounty/Register';
import BountyTasks from './bounty/Tasks';
import BountyClaims from './bounty/Claims';
import BountyTaskDetail from './bounty/TaskDetail';
import ClaimReview from './admin/ClaimReview';

export default class AppContainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/team" component={Team} />
                    <Route path='/bounty/signin' component={BountySignin} />
                    <Route path='/bounty/register' component={BountyRegister} />
                    <Route path='/bounty/tasks/:id' component={BountyTaskDetail}/>
                    <Route path='/bounty/tasks' component={BountyTasks} />
                    <Route path='/bounty/claims' component={BountyClaims} />
                    <Route path="/bounty" component={Bounty} />
                    <Route path="/admin/claimreview" component={ClaimReview} />
                    {/*<Route path="/airdrop" component={Airdrop} />*/}
                    {/*<Route path="/join" component={Join} />*/}
                    <Route path="/" component={Homepage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
