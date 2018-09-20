import React, { Component, Fragment } from "react";
import DisplayChirp from "./DisplayChirp";
import fetch from 'isomorphic-fetch';

class AllChirps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            message: "",
            postArray: [],
        }
    };

    componentDidMount() {
        fetch('/api/chirps/')
            .then(res => res.json())
            .then(data => this.setState({
                postArray: data
            }))
    }

    handleUserNameChange(e) {
        this.setState({ userName: e.target.value });
    }

    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    handleButtonClick(e) {
        e.preventDefault();

        let newChirpPost = {
            Name: this.state.userName,
            Chirp: this.state.message
        };

        fetch(`/api/chirps/`, {
            method: 'POST',
            body: JSON.stringify(newChirpPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({
                postArray: data
            }))
            .catch(err => console.log(`You fucked up: ${err}`))
    }

    render() {
        return (
            <Fragment>
                <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input onChange={(e) => this.handleUserNameChange(e)} value={this.state.userName} className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Chirp Message</label>
                        <textarea onChange={(e) => this.handleMessageChange(e)} value={this.state.message} className="form-control" rows="3" placeholder="Insert Message"></textarea>
                    </div>
                    <button onClick={(e) => this.handleButtonClick(e)} type="submit" className="btn btn-primary">Create Chirp!</button>
                </form>
                {this.state.postArray.map((chirp) => {
                    return <DisplayChirp chirp={chirp} />
                })}
            </Fragment>
        )
    };
};

export default AllChirps;