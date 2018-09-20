import React, { Component, Fragment } from 'react';

class EditChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postObject: {},
            name: '',
            chirp: ''
        }
    }

    componentDidMount() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                postObject: data,
                name: data.Name,
                chirp: data.Chirp
            }))
    }

    handleEditClick(e) {
        let editChirpPost = {
            Name: this.state.name,
            Chirp: this.state.chirp
        };

        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(editChirpPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({
                postObject: data
            }))

            .catch(err => console.log(`Didn't update it: ${err}`))
    };

    handleDeleteClick(e) {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE',
        })
        .catch(err => (console.log(`I'm not deleted: ${err}`)))
    }


    render() {
        return (
            <Fragment>
                <h1>Edit Your Chirp, {this.state.postObject.Name}:</h1>
                <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input value={this.state.chirp} onChange={(e) => this.setState({ chirp: e.target.value })} />
                <button onClick={(e) => { this.handleEditClick(e); this.props.history.push('/') }} className="btn btn-secondary">Save Edit</button>
                <button onClick={(e) => { this.handleDeleteClick(e); this.props.history.push('/') }} className="btn btn-danger">Delete Chirp</button>
            </Fragment>
        )
    }
}

export default EditChirp;