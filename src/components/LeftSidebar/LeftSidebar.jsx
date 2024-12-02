import React,{useState} from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'

const LeftSidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(prevShowMenu=>!prevShowMenu);
    }
    
  return (
      <div className='ls'>
          <div className="ls-top">
              <div className="ls-nav">
                  <img src={assets.logo} alt="logo" className="logo" />
                  <div className="menu">
                      <img src={assets.menu_icon} alt="menu" className="menu-icon" onClick={handleMenu} />
                      { showMenu && (<div className="sub-menu">
                          <p>Edit profile</p>
                          <hr />
                          <p>Logout</p>
                       </div>) }
                  </div>
              </div>
              <div className="ls-search">
                  <img src={assets.search_icon} alt="search" className="search-icon" />
                  <input type="text" placeholder="Search here..." />
              </div>
          </div>
          <div className="ls-list">
              {Array(12).fill("").map((item,index) => (
                  <div key={index} className="friends">
                      <img src={assets.profile_img} alt="" />
                  <div>
                      <p>Dipa Ghosh</p>
                      <span>Hello, how are you?</span>
                      </div>
                  </div>
                  ))}
              
          </div>
    </div>
  )
}

export default LeftSidebar;