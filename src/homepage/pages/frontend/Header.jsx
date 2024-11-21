import { imgPath } from '@/helpers/functions-general'
import { Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-primary'>
      <div className="container">
        <div className='flex justify-between'>
            <ul className='text-white flex gap-6 items-center'>
              <img src={`${imgPath}/Netflix_Logo_PMS.png`} alt="" className='w-[200px]'/>
              <li><NavLink to="/tvShows">TV Shows</NavLink></li>
              <li><NavLink to="/movies">Movies</NavLink></li>
              <li><NavLink to="/recentlyAdded">Recently Added</NavLink></li>
              <li><NavLink to="/myList">My List</NavLink></li>
            </ul>
          <button><Search stroke='white'/></button>

      </div>
      </div>
      
    </header>
  )
}

export default Header