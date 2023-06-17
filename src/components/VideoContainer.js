import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUB_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
    const getVideoData = async () => {
    
      const data = await fetch(YOUTUB_API_URL);
      const json = await data.json();
      
      setVideos(json.items);
      
    };
    getVideoData();
  }, []);


  return videos.length < 1 ? null : (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((item) => (
        <Link  key={item.id} to={"/watch?v="+item.id}><VideoCard info={item} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
