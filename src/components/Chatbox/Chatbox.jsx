import React from 'react'
import './Chatbox.css'
import assets from '../../assets/assets'

const Chatbox = () => {
  return (
      <div className='chat-box'>
          <div className="chat-user">
              <img src={assets.profile_img} alt="profile" />
              <p>Dipa Ghosh <img className='dot' src={assets.green_dot} alt="green dot" /></p>
              <img src={assets.help_icon} alt="help icon" className='help'/>
          </div>

          <div className="chat-msg">
              <div className="s-msg">
                  <p className="msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, et!</p>
                  <div>
                      <img src={assets.profile_img} alt="" />
                      <p>2:30 PM</p>
                  </div>
              </div>
              <div className="s-msg">
                  <img className='msg-img' src={assets.pic1} alt="" />
                  <div>
                      <img src={assets.profile_img} alt="" />
                      <p>2:30 PM</p>
                  </div>
              </div>
              <div className="r-msg">
                  <p className="msg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, et!</p>
                  <div>
                      <img src={assets.profile_img} alt="" />
                      <p>2:30 PM</p>
                  </div>
              </div>
          </div>

          <div className="chat-input">
              <input type="text" placeholder='Send a message' />
              <input type="file" id='image' accept='image/*' hidden />
              <label htmlFor="image">
                  <img src={assets.gallery_icon} alt="gallery icon" />
              </label>
              <img src={assets.send_button} alt="send icon" />
        </div>
    </div>
  )
}

export default Chatbox