import React, {useState} from 'react'
import "./ProfileUpdate.css"
import assets from '../../assets/assets'
import { FaCamera } from "react-icons/fa";

const ProfileUpdate = () => {

  const [avatar, setAvatar] = useState(false);
  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
  }

  return (
    <div className='profile'>
      <div className="profile-container">
        <form action="">
          <h3>Profile Details</h3>
          <label htmlFor="avtar">
            <input type="file" onChange={handleAvatar} name="avtar" id="avtar" accept='.png, .jpg, .jpeg' hidden />
            <img src={avatar ? URL.createObjectURL(avatar) : assets.avatar_icon} alt="avatar" className="profile-img" />
            <FaCamera className='cam' />
            upload profile picture
          </label>
          <input type="text" placeholder="Your Name" className="name" required />
          <textarea placeholder='Write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className="profile-pic" src={avatar ? URL.createObjectURL(avatar) : assets.logo_icon} alt="logo" />
      </div>
    </div>
  )
}

export default ProfileUpdate