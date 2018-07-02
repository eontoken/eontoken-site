import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Bounty extends Component {
    constructor(props) {
        super(props);
        // TODO, use our own bounty system, redirect for now
        window.location = 'https://docs.google.com/forms/d/1EX4WAzsjYdmiebJ-Kg_5JFNzlwO_NQh5WNtaugR7FCA';
    }

    render() {
        return null;
    }
}

export default withRouter(Bounty);
