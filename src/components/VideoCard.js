import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)

    const {snippet,statistics} = info;

    const {thumbnails} =snippet;
    
  return (
    <div className='shadow-lg w-80 rounded-lg p-2 m-2'>
        <img className='rounded-lg' alt="video" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold'>{snippet.title}</li>
            <li>{snippet.channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard