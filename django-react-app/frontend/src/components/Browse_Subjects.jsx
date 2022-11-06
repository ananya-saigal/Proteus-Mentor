import React, { useState, useEffect } from 'react'
import "../styles/browse_subjects.css"
import data from "../mock-db.json"

const Browse_Subjects = () => {
    const [resources] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = resources.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index>lastIndex){
            setIndex(0);
        }
    }, [index, resources]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return() => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <section className="section">
        <div className="title">
            <h2>Resources</h2>
        </div>
        <div className="section-center">
            {resources.map((item, indexResource) => {
                const {id, title, description } = item;
                let position = "nextSlide";
                if(indexResource === index){
                    position = "activeSlide"
                } 
                if(indexResource === index - 1 || (index === 0 && indexResource === resources.length -1 )){
                    position = "lastSlide"
                }
                return (
                    <article className={position} key = {id}>
                        <h4>{title}</h4>
                        <p className="text">{description}</p>
                    </article>
                )
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
                <i className="fas fa-arrow-right"/>
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
            <i className="fas fa-arrow-left"/>
            </button>
        </div>
    </section>
  )
}

export default Browse_Subjects