import React from 'react'
import Button from './Button'


const ButtonList = () => {
const list=["Live",'Gaming','Songa','Movies','Populer','News','Love','Meditation','Yoga','Romantic','Spirtual','Meditation','Spirtual','Meditation',]

  return (
    <div className='flex'>

        {list.map((item,index)=><Button key={index} title={item}/>)}
        


    </div>
  )
}

export default ButtonList