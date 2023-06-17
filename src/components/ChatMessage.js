import React from 'react'

const ChatMessage = ({name,msg}) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
        <img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        />
        <span className='font-bold px-2'>
            {name}
        </span>
        <span>{msg}</span>
    </div>
  )
}

export default ChatMessage