import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import DisplayChirp from "./DisplayChirp";
import fetch from 'isomorphic-fetch';
import * as chirpServices from '../services/chirps';
import AuthButton from '../components/auth/authButton';

class AllChirps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpList1: [],
            chirpList2: [],

        }
    };

    componentWillMount() {

        chirpServices.all()
            .then(res => {
                let chirpList1 = res.splice(0, (res.length / 2));
                let chirpList2 = res.splice((res.length / 2) - 1, res.length);
                this.setState({
                    chirpList1,
                    chirpList2
                });
            }).catch(derp => {
                console.log(derp);
            })
    }

    chirpList1() {
        return this.state.chirpList1.map(chirp => {
            return <DisplayChirp key={chirp.id} chirp={chirp} />
        });
    }

    chirpList2() {
        return this.state.chirpList2.map(chirp => {
            return <DisplayChirp key={chirp.id} chirp={chirp} />
        });
    }



    render() {
        return (
            <Fragment>
                <header>
                    <div class="jumbotron jumbotron-fluid font-weight-bold text-center">
                        <div class="container">
                            <AuthButton />
                            <h1 class="display-4">Welcome to Chirper!</h1>
                        </div>
                    </div>
                    <div className="container">
                        <Link to="/createchirp" className="btn btn-info text-center">Write New Chirp</Link>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">

                                        {this.chirpList1()}
                                    </div>

                                    <div class="col-md-6">
                                        {this.chirpList2()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    };
};

export default AllChirps;