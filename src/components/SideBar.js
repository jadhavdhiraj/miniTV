import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const SideBar = () => {
    const isToggle = useSelector((store)=>store.app.isToggle)

    
  return !isToggle? null : (
    <div className='shadow-lg p-4 w-48'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Live</li>
            <li>Saved</li>
        </ul>
        <ul>
            <h1 className='font-bold pt-2'>subscription</h1>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <ul>
            <li className='font-bold pt-2 '>
                Library
            </li>
            <li>History</li>
            <li>Watch Later</li>
        </ul>
    </div>
  )
}

export default SideBar