import React from 'react';
import { withRouter } from 'react-router-dom';
//withRouter = higher order component for inheriting the routing props 
//from the container component to the child component -> in our case from Posts to Post

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default withRouter(post);