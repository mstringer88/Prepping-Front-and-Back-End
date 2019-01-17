import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';

const DisplayChirp = (props) => {
    const { id, title, text, location, _created } = props.chirp
    return (
        <Fragment>
            <br></br>
            <article className="card mb-4">
                <header className="card-header">
                    <div className="card border-dark mb-3" /*style={{ maxwidth: '18rem' }}*/>
                        <div className="card-body text-dark">
                            <div className="card-meta">
                                <time className="timeago">{moment(_created).format("dddd, MMM Do YYYY, h:mm a")}</time>
                            </div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-body">{text}</p>
                            <p className="card-body">{location}</p>
                            <Link className="btn btn-primary mx-auto" to={`/chirp/${id}`}>See Details</Link>
                        </div>
                    </div>
                </header>
            </article>
        </Fragment>
    );
};


export default DisplayChirp;