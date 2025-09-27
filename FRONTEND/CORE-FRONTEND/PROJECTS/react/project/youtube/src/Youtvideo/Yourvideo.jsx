import React from 'react'
import "./Yourvide.css"
const Yourvideo = () => {
  return (
    <>
        <div className="upc">
            <div className="uploadv">
                  <h3>Upload video</h3>
                  <label className='cfinpt'>
                    <span className='icnu'>📥</span>
                    <span style={{marginBottom:"15px"}}> Drag or drop a file here</span>
                    🗁 Select files
                  <input id='fileinput' className='uploadopt' type='file' />
                </label>
            <div className="title">
              <div>
              <h4>title (required)</h4>
              <label htmlFor="titinput">
                <input type="text" name='titinput'/>
              </label>
              </div>
              <div>
              <h4>description</h4>
               <label htmlFor="desc">
                <textarea  rows="5" cols="19" placeholder='enter description' name='desc' />
               </label></div>
             </div>
          </div>
        </div>

    </>
  )
}

export default Yourvideo
