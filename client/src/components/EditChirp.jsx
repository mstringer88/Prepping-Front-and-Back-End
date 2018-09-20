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




    render() {
        return (
            <Fragment>
                <h1 className="container text-center">Edit Your Chirp, {this.state.postObject.Name}:</h1>
                <form>
                    <div className="container">
                        <div className="form-group">
                            <label className="font-weight-bold" for="formGroupExampleInput"><u>Name</u></label>
                        </div>
                        <div>
                            <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="font-weight-bold" for="formGroupExampleInput2"><u>Chirp</u></label>
                        </div>
                        <div>
                            <textarea value={this.state.chirp} onChange={(e) => this.setState({ chirp: e.target.value })} />
                        </div>
                    </div>
                </form>
                <button onClick={(e) => { this.handleEditClick(e); this.props.history.push('/') }} className="btn btn-primary container">Save Edit</button>
            </Fragment>
        )
    }
}

export default EditChirp;