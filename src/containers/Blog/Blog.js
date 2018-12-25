import React, { Component } from 'react';

import { Route, /*Link,*/ NavLink, Switch, Redirect } from 'react-router-dom';
//Link = a component to navigate in the app and replace the anchor tags <a> and 
    //make it possible to not reload the app when we click on the links inside
    //prop to => can be a string and can also take JS code inside { { pathname: "/newpost", hash: "#submit", search: "?quick-submit=true"}}
//NavLink = similar to link but with enhancement => you can change navigation specific props for it.
//Switch = tells the router to load one route at a time even if there are more matching
//Redirect = a component that you can use in JSX, you can add it to Switch and you have to
    // specify from="wich route" to="which route" 
    //If you use it outside Switvh you just need to specify to="which route"; from can't be specified
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact>Posts</NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* Route Props: reserved words for this component
                path - a string, predefined prop that specifies the path that should be routed
                exact - by default it is false; if it is not mentioned it will be default
                        if we are not using it the router will decide that it will render
                        everything that starts with that in the same way - prefix
                        in order to make it go where it should use exact.
                render = you can write an anonymous function and inside 
                        you can return JSX and have logic directly; 
                        NOT a best practice */}
                {/*
                EXAMPLES of using the props of Route
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} />
                <Route path="/new-post" exact render={() => <h1>New Post</h1>} /> 
                
                component = pass a component to Route as prop; it is not a string; 
                    needs to be areference to the function or class we want to use
                */}
                <Switch> 
                    {/* Switch = helped us to not display the full post at fter the new post*/}
                    <Route path="/posts" component={Posts}/>
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route render={() => this.state.auth ? <h1>Page Not Found!</h1> : <h1>You are not Authenticated!</h1>}/>
                    <Redirect from="/" to="/posts"/>
                    {/* <Route path="/:id" exact component={FullPost}/>  */}
                </Switch>
            </div>
            );
    }
}

export default Blog;