import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import menuLogo from "../assets/menu.png";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { CORS_API_HOST } from "../utils/constant";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([])
  const [showSuggetions,setShowSuggetions] = useState(true)

  const searchCache = useSelector((store)=>store.search)
  useEffect(() => {
    const timer = setTimeout(() =>
    {if(searchCache[searchQuery]){
      setSuggetions(searchCache[searchQuery])
    }
    else{
    getSearchSuggetion()}}, 200);
    console.log(searchQuery);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const URL = `${CORS_API_HOST+YOUTUBE_SEARCH_API }`;
    const data = await fetch(URL + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}))
    console.log(json[1]);
  };

  return (
    <div className="grid grid-flow-col shadow-lg py-4">
      <div className="flex col-span-1 pl-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={menuLogo}
        />
        <a href="/">
          <img
            className="h-8 ml-2 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 ml-32 p-2 rounded-l-full bg-slate-50 border border-gray-300"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggetions(true)}
            onBlur={()=>setShowSuggetions(false)}
          />

          <button className="p-2 bg-slate-100 rounded-r-full border border-gray-400 px-4">
            🔍
          </button>
        </div>
        {showSuggetions && <div className="ml-32 bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg border-gray-200 absolute">
          <ul>
            {suggetions.map((ele)=> <li onClick={()=>setSearchQuery(ele)} key={ele} className="shadow-sm py-2 px-3 hover:bg-slate-100">
              🔍 {ele}
            </li>)}
           
          
          </ul>
        </div>}
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
