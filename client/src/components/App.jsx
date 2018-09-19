import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllChirps from './AllChirps';
import DisplayChirp from './DisplayChirp';
import SingleChirp from './SingleChirp';
import EditChirp from './EditChirp';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={AllChirps} />
                        <Route exact path="/chirp/:id" component={SingleChirp} />
                        <Route exact path="/chirp/:id/edit" component={EditChirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;