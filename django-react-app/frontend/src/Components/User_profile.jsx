import React, { useState, useEffect } from 'react';
import user_logo from '../assests/user_logo.png'
import '../styles/User_profile.css'
const User_profile = () => {
    response = fetch("url").json()
    username=response["username"]
    points=response["points"]
    rank=response["rank"]
  return (
    <div>
      <h1 className=''>Profile</h1>
      <img src={user_logo}/>
      <h1 className=''>Username: {username}</h1>
      <h1 className=''>Points: {points}</h1>
      <h1 className=''>Rank: {rank}</h1>
    </div>
  );
};
export default User_profile;

