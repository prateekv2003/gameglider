import React from 'react'
import { MdOutlineMessage } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import './home.css'
import { Link } from 'react-router-dom'
import User from '../../assets/user.png'
const Home = () => {
  return (
    <div className='home-container'>

      <div className='content-navbar'>

        <form className="search-box">
          <input type="text" name="searchItem" id="search-bar" placeholder='Search'/>
          <Link type="submit" to><GoSearch/></Link>
        </form>
        <div className='nav-items'>
          <MdOutlineMessage className='navbar-message' />

          <div class="dropdown">
            <div class="dropbtn"><img src={User} alt="" /></div>
            <div class="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Setting</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Home