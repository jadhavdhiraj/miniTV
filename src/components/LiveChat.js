import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName, generateRandomText } from "../utils/helper";
const LiveChat = () => {
    const [liveMeaage,setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMessages = useSelector(store=>store.chat.items)
    useEffect(()=>{
        
        const t = setInterval(()=>{
            

            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomText(20)
            }))
        },2000)

        return ()=>{
            clearInterval(t);
        }
    },[dispatch])
  return (
    <div>
    <div className="mx-2 p-2 border border-black bg-slate-100 rounded-lg h-[400px] overflow-y-scroll flex flex-col-reverse ">
     {
        chatMessages.map((e,i)=><ChatMessage  key={i} name={e.name} msg={e.message}/>)
     }

    </div>
    <form className="p-2 ml-2 border border-black w-full" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
            name:"Dhiruj",
            message:liveMeaage
        }))
        setLiveMessage("")
    }}>
        <input type="text" className="w-auto " value={liveMeaage} onChange={(e)=>{setLiveMessage(e.target.value
            )}}/>
        <button className="px-2 mx-2 bg-slate-300 rounded-lg" onChange={(e)=>{setLiveMessage(e.target.value
            )}}>SEND</button>
    </form>
    </div>
  );
};

export default LiveChat;
