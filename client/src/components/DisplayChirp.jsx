import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const DisplayChirp = (props) => {
    return (
        <Fragment>
            <br></br>
            <div className="card border-dark mb-3" /*style={{ maxwidth: '18rem' }}*/>
                <div className="card-body text-dark">
                    <h5 className="chirp-title">{props.chirp.Name}</h5>
                    <p className="chirp-text">{props.chirp.Chirp}</p>
                    <Link className="btn btn-primary mx-auto" to={`/chirp/${props.chirp.id}`}>See Details</Link>
                </div>
            </div>
        </Fragment>
    );
};


export default DisplayChirp;