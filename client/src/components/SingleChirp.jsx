import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SingleChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postObject: {}
        }
    }

    componentDidMount() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            postObject: data
        }))
    }

    render() {
        return (
            <Fragment>
            <h1> Is this Working ? {this.state.postObject.Name}</h1 >
            <Link to={`/chirp/${this.props.match.params.id}/edit`}>Edit/Delete Chirp</Link>
            </Fragment>
        )
    }
}

export default SingleChirp;