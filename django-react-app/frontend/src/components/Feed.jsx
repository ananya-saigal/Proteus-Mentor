import React from 'react'
import "../styles/feed.css"
import Share from "./Share.jsx"
import Resources from './Resources'

function Feed() {
  return (
    <div className='feed'>
      <h1>Feed</h1>
        <div className='feedWrapper'>
            <Share/>
            <Resources/>
            <Resources/>
            <Resources/>
            <Resources/>
        </div>
    </div>
  );
};

export default Feed