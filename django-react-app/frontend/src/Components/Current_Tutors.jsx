import ReactStars from 'react-stars'
import React from 'react'

function Current_Tutors() {
   tutor = [{"name": "Maria Jackson", "rating": 3},{"name": "Cameron Dsin", "rating": 1},{"name": "Dwen James", "rating": 5}]
   return (
        tutor.map((tutor) => 
        <>
            <p>{tutor.name}</p>
            <StarRating count={tutor.rating} size={24} color2={'#ffd700'}/>

        </>
                    
        )
   )
}


   


