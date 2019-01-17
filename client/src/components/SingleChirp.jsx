import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpServices from '../services/chirps';

class SingleChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleChirp: {}
        }
    }

    componentWillMount() {
        chirpServices.one(this.props.match.params.id)
            .then(chirp => {
                this.setState({
                    singleChirp: chirp
                });
            });
    }

    handleDeleteClick(e) {
        chirpServices.destroy(this.props.match.params.id)
            .catch(err => (console.log(`Not deleted: ${err}`)))
    }

    render() {
        const { id, title, text, location } = this.state.singleChirp;
        return (
            <Fragment>
                <article className="card mb-4">
                    <header className="card-header text-center">
                        <h1 className="card-title">{title}</h1>
                    </header>
                    <div className="card-body">
                        <p>{text}</p>
                        <p>{location}</p>
                    </div>
                </article>
                <div>
                    <Link to={`/chirp/${this.props.match.params.id}/edit`}>Edit Chirp </Link>
                    <button onClick={(e) => { this.handleDeleteClick(e); this.props.history.push('/allchirps') }} className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Chirp">X</button>
                </div>
            </Fragment>
        )
    }
}

export default SingleChirp;