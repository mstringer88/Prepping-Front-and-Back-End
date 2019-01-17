import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import DisplayChirp from "./DisplayChirp";
import fetch from 'isomorphic-fetch';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="home bg-secondary">
                    <div className="container bg-secondary">
                        <div className="row">
                            <body className=" home py-5 container bg-secondary">
                                <div className="home-image text-center">
                                    <img className="home-img center-block" src="/public/images/bluebird.png" alt="" />
                                </div>
                                <div className='container text-center'>
                                    <h1 className="text-dark">CHIRPR</h1>
                                </div>
                                <div>
                                    <div className="btn1 text-center">
                                        <Link className="btn btn-primary" to="/login" >Enter</Link>
                                    </div>
                                </div>
                            </body>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}