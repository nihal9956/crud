import React from 'react';
import { useSelector } from 'react-redux';
import AllPost from './AllPost';
import './App.css';
import PostForm from './PostForm';

function App() {

  const post = useSelector(state => state.post)
  return (
    <div className="App">
     <PostForm/>
     {console.log(post)}
     
     {post.length>0?<AllPost/>:null}
    </div>
  );
}

export default App;
