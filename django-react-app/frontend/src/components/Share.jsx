import React from 'react'
import "../styles/share.css"
import { TextFields, Landscape, PlayCircle} from "@mui/icons-material"

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <input placeholder="Spread your knowledge" className='shareInput'/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <TextFields className="shareIcon"/>
                    <span className="shareOptionText">Text</span>
                    <Landscape className="shareIcon"/>
                    <span className="shareOptionImage">Image</span>
                    <PlayCircle className="shareIcon"/>
                    <span className="shareOptionVideo">Video</span>
                </div>
            </div>
            <button className="shareButton">Post</button>
        </div>
    </div>
  )
}

export default Share