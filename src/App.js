import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreatePost} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
