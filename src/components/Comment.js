import React from 'react'

const Comment = ({data}) => {
    const {name,text} = data;
  return (
    <div className='flex shadow-md bg-gray-50 p-2 rounded-lg my-1'>
        <img className='w-8 h-8 m-1' alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}


export default Comment