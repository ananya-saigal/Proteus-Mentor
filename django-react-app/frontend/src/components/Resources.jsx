import React from 'react'
import "../styles/resources.css"

function Resources() {
  return (
    <div>
      <div className="resource">
        <div className="resourceWrapper">
          <div className="resourceTop">
            <div className="resourceTopLeft">
              <span className="resourceUsername">Sofia Bloom</span>
              <span className="resourceDate">1 hour ago</span>
            </div>
            <div className="resourceTopRight"></div>
          </div>
          <div className="resourceCenter">
            <span className="resourceBody">Check out this great explanation on epsilon-delta proofs!</span>

          </div>
          <div className="resourceBottom">
            <div className="resourceBottomLeft"></div>
            <div className="resourceBottomRight">
              <span className="resourceCommentText"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources

















// import React, { useState, useEffect } from 'react'


// const Resources = () => {
    
//     const [fake, setFake] = useState([]);
//     console.log(fake);
//     useEffect(() => {
//         fake_resources();
//     }, [])

//     const fake_resources = async() => {
//         const response = await fetch("url").json()
//         console.log(response);
//         setFake(response);
//     }
//     //fake_resources();

//   return (
//     <div>
//         <h1 className='browse_resources_container'>Browse Resources</h1>

//     </div>
//   )
// }

// export default Resources



























//response = fetch("url").json()
    // id = 123456 //response["id"]
    // title = "How to do epislon delta proofs" //response["title"]
    // type = "Video" //response["type"]
    // text_content = "This video explains how to complete epsilon delta proofs really well" //response["text_content"]
    // image_content = None //response["image_content"]
    // date_posted = "Nov 5 2022" //response["date_posted"]
    // video_content = <a href ="https://www.youtube.com/watch?v=AEIXlrLD2RY&ab_channel=TheMathSorcerer">https://www.youtube.com/watch?v=AEIXlrLD2RY&ab_channel=TheMathSorcerer</a>//response["video_content"]
    // author_username = "AN" //response["author_username"]
    // score = 1234 //response["score"]
    // subject_id = 456789 //response["subject_id"]