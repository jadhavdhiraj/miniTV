import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import ComentsConatiner from "./ComentsConatiner";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchUrl] = useSearchParams();
  
  return (
    <div className="flex flex-col w-full">
    <div className="ml-3 shadow-lg flex">
      <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/"+searchUrl.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
    <ComentsConatiner/>
    </div>
  );
};

export default WatchPage;
