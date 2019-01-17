import React, { Component} from "react";
import { Link } from 'react-router-dom';
import * as authservices from '../services/authors';

class CreateLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleSubmitButton(e) {
        e.preventDefault();

        authservices.insert(this.state)
        .then(response => this.props.history.replace(`/login`))
        .catch(err => console.log(`You fucked up: ${err}`))
    }

    render() {
        return (
            <main className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                        </div>
                    </div>
                    <form className="row" >
                        <div className="col-md-4 offset-md-4">
                            <div className="form-row">
                                <div className="col form-group">
                                <label for="Name">Name</label>
                                    <input id="name" type="text" className="form-control" placeholder="John Doe" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value})} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label for="email">Email Adress</label>
                                    <input id="email" type="text" className="form-control" placeholder="test@test.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                <label for="password">Password</label>
                                    <input id="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />     
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <button onClick={(e) => this.handleSubmitButton(e)} className="btn btn-primary btn-lg w-100">Register</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    Already have an account? <Link to="/login">Log in!</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default CreateLogin;