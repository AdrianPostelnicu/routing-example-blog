import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Setting default configuration for all requests by using the axios.default object
//helps to optimize the code a lot
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; //write it once, use it everywhere
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';//configure the request example
axios.defaults.headers.post['Content-Type'] = 'application/json';//configure the posts example


//interceptors will be executed globally for all requests leaving the app 
//and all responses coming back
//We put it in index.js because it is the "most global" file in the app.
axios.interceptors.request.use(request =>
    {
        //Here the configuration of the request can be edited
        //we need to ALWAYS return the req config, otherwise we block it.
        console.log(request);
        return request;
    }, error => {
        //we need to return it in order to handle it locally
        console.log(error);
        return Promise.reject(error);
    });

axios.interceptors.response.use(response =>
    {
        //Here the configuration of the request can be edited
        //we need to ALWAYS return the req config, otherwise we block it.
        console.log(response);
        return response;
    }, error => {
        //we need to return it in order to handle it locally
        console.log(error);
        return Promise.reject(error);
    });


// You learned how to add an interceptor, getting rid of one is also easy. 
//Simply store the reference to the interceptor in a variable and call eject  
//with that reference as an argument, to remove it 
//(more info: https://github.com/axios/axios#interceptors):

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
