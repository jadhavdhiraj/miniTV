import React from 'react'

const Button = ({title}) => {

    
  return (
    <div>
        <button className='p-2 bg-gray-300 hover:bg-black hover:text-white rounded-lg m-2'>{title}</button>
    </div>
  )
}

export default Button