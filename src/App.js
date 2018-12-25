import React, { Component } from 'react';

//by importing the BrowserRouter and wrapping other componets inside
//we will be able to use routing in all sub components
//in our case all other componets are wrapped directly or indirectly under the Blog
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
