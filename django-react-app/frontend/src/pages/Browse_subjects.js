import React from 'react'

const Browse_Subjects = () => {
  return (
    <section id='browse_subjects'>
        <h2>Subjects</h2>
        <div className='browse__subjects_container'>
            <div className='browse_subjects_content'>
                <article className='browse_subjects_card'></article>
            </div>
        </div>

        <h4>
            <ul>
                <li>Calculus</li>
                <hr></hr>
                <li>Foundations of Computer Science</li>
                <hr></hr>
                <li>Linear Algebra</li>
            </ul>
        </h4>
    </section>
  )
}

export default Browse_Subjects