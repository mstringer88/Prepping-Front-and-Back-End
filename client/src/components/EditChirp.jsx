import React, { Component, Fragment } from 'react';
import * as chripServices from '../services/chirps';

class EditChirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postObject: {},
            title: '',
            text: ''
        }
    }

    componentDidMount() {

        chripServices.one(this.props.match.params.id)
            .then(data => this.setState({
                postObject: data,
                title: data.title,
                text: data.text
            }))
    }

    handleEditClick(e) {
        let editChirpPost = {
            Title: this.state.title,
            Text: this.state.text
        };
        chripServices.update(this.props.match.params.id, editChirpPost)
            .then(response => this.props.history.replace('/allchirps'))
            .catch(err => console.log(`Didn't work: ${err}`))

    };




    render() {
        return (
            <Fragment>
                <main className="main py-5 bg-light" role="main" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="text-center">
                                    <h1 className="container text-center">Edit Your Chirp...</h1>
                                </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" for="title"><u>Title</u></label>
                                    </div>
                                    <div>
                                        <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" className="form-control form-control-lg" id="title" placeholder="Enter a title" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label className="font-weight-bold" for="chirp"><u>Chirp</u></label>
                                    </div>
                                    <div>
                                        <textarea className="editor" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} style={{ height: '20em' }} />
                                    </div>
                                <div className="container">
                                    <button onClick={(e) => { this.handleEditClick(e); this.props.history.push('/allchirps') }} className="btn btn-primary container-fluid">Save Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default EditChirp;