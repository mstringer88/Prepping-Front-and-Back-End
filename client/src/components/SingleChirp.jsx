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

    handleDeleteClick(e) {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE'
        })
            .catch(err => (console.log(`I'm not deleted: ${err}`)))
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            Display Chirp Info
                    </div>
                        <div className="card-body">
                            <h1 className="card-title">{this.state.postObject.Name}</h1>
                            <p className="card-text">{this.state.postObject.Chirp}</p>
                            <Link to={`/chirp/${this.props.match.params.id}/edit`}>Edit Chirp</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button onClick={(e) => { this.handleDeleteClick(e); this.props.history.push('/') }} className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Chirp">X</button>
                </div>
            </Fragment>
        )
    }
}

export default SingleChirp;