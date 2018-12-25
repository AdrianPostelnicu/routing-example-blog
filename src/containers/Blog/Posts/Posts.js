import React, {Component} from 'react';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';
import './Posts.css';
// import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        //axios.get needs at least one argument - the url
        //we need promises because the get request happens asynchroniously
        //JS executes the code sinchronously and it will not store the posts
        //axios.get returns a promise, so we can use .then
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4); //take just 4
                const updatedPosts = posts.map(post => {
                    return { ...post,
                             author: 'Adi'};
                }); //modify the data received by adding a new field
                this.setState( { posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState( { error: true } );
            });
    }

    postSelectedHandler = (id) => {
        //programatically navigate
        //an alternative to using the Link component from rect-router-dom
        //.history.push('String' or Object); leverage the stack functionality of the browser
        //this.props.history.push({pathname: '/' + id});
        //alternative to the above:
        this.props.history.push('/posts/' + id);
    }    

    render () {
        let posts = <p style={{textAlign: "center"}}>Something went wrong :(((</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id} >
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* This is a nested Route from Blog to Posts 
                Dinamically resolve the route to the nested route*/}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;