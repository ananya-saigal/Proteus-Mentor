import React, { useState, useEffect } from 'react';
import user_logo from '../assests/user_logo.png'
import tutor from '../assests/tutor.png'
import my_tutor from '../assests/my_tutor.png'

import '../styles/Browse_Tutors.css'
const User_profile = () => {
    <>
    <img src={user_logo}/>
    <dev>
        Mark Anandroid
    </dev>
    <p>
        I am an MChem Chemistry graduate from Oxford, 
        and a current graduate entry medical student. 
        I am friendly, and patient and I find it extremely 
        rewarding to help students achieve their potential and 
        inspire them to engage with and even enjoy learning!
    </p>
    <img src={tutor}/>
    <dev>
        Sophia Bloom
    </dev>
    <p>
     I have always been a foodie, and have always had a soft corner for desserts.
     Having a sweet tooth doesn't mean that I have to be unhealthy, I make nutritious 
     desserts that are naturally sugar-free. I begin class by highlighting the natural sweetness and 
     textures of each ingredient in a bright and fruity açaí bowl, followed by creamy 
     chocolate mousse. Next up, learn to craft sugar-free banana ice cream before 
     finishing with sensational vegan brownies.
    </p>
    <img src={my_tutor}/>
    <dev>
        Dev Chopra
    </dev>
    <p>
    My parents have always struggled with the slangs and abbreviations we commonly use.
    I am always teaching them and have come to realise that I am very patient and good
    at teaching the older generation. In my sessions, you will easily pick up on all the slangs
    the youth uses.
    </p>
    </>
}