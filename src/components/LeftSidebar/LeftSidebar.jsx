import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'

const LeftSidebar = () => {
  return (
      <div className='ls'>
          <div className="ls-top">
              <div className="ls-nav">
                  <img src={assets.logo} alt="logo" className="logo" />
                  <div className="menu">
                      <img src={assets.menu_icon} alt="menu" className="menu-icon" />
                  </div>
              </div>
              <div className="ls-search">
                  <img src={assets.search_icon} alt="search" className="search-icon" />
                  <input type="text" placeholder="Search here..." />
              </div>
          </div>
          <div className="ls-list">
              <div className="friends">
                  <img src={assets.profile_img} alt="" />
                  <div>
                      <p>Dipa Ghosh</p>
                      <span>Hello, how are you?</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default LeftSidebar