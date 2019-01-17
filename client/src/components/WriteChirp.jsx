import React, { Component } from 'react';
import * as chirpServices from '../services/chirps';

class WriteChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            location
        };
    }

    handleBlogSubmit(e) {
        //fetch post
        e.preventDefault();

        chirpServices.insert(this.state)
            .then(response => this.props.history.replace(`/allchirps`))
            .catch(err => console.log(`You fucked up: ${err}`))
    }

    render() {
        return (
            <main className="main py-5 bg-light" role="main">

                <div className="container">

                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="text-center">
                                <h2>Write a new Chirp!</h2>
                                <hr />
                            </div>
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" className="form-control form-control-lg" id="title" placeholder="Enter a title" />
                            </div>
                            <div className="form-group">
                                <label for="title">Message</label>
                                <textarea className="form-control form-control-lg" aria-label="With textarea" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} style={{ height: '20em' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })} type="text" className="form-control form-control-lg" />
                            </div>
                            <button onClick={(e) => this.handleBlogSubmit(e)} className="btn btn-success">Publish</button>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
};

export default WriteChirp;