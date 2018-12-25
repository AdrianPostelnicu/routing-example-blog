import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        error: false
    }

    componentDidMount () {
        // console.log(this.props);
        this.loadData();
    }

    componentDidUpdate () {
        console.log("FullPost [DID UPDATE]", this.state.loadedPost);
        this.loadData();
    }

    loadData () {
        if (this.props.match.params.id){
            //only fetch data of there is no loadedPost 
            //            or (there is a loadePost and the user clicked a new one, so we need to load that one)
            if(!this.state.loadedPost || 
                (this.state.loadedPost && 
                    //the id in state is number != id in match.params is string; to convert it to number added the + sign in front
                    this.state.loadedPost.id !== +this.props.match.params.id
                )
            )
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                        //console.log(response);
                    })
                    .catch(error => {
                        if(!this.state.error) {
                            this.setState( { error: true});
                        }
                    });
        }
    }

    deleteDataHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.error) {
            post = <p style={{textAlign: 'center'}}>Something went wrong :(</p>;
        }
        //User selected a post (So, I have the id), but the GET is not finished
        //so, I will only render the JSX in the moment that the GET is finished
        //and I have a loadedPost saved in state
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteDataHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;