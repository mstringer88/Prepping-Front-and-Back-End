import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import AllChirps from './AllChirps';
import DisplayChirp from './DisplayChirp';
import SingleChirp from './SingleChirp';
import EditChirp from './EditChirp';
import Home from './Home';
import CreateLogin from './CreateLogin';
import Login from './auth/login';
import Logout from './auth/logout';
import WriteChirp from './WriteChirp';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <PrivateRoute exact path="/createchirp" component={WriteChirp} />
                        <Route exact path="/register" component={CreateLogin} />
                        <Route exact path="/allchirps" component={AllChirps} />
                        <Route exact path="/chirp/:id" component={SingleChirp} />
                        <PrivateRoute exact path="/chirp/:id/edit" component={EditChirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;