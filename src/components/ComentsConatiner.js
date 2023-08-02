import React from 'react'
import Comment from './Comment';


const commentsData = [
    {
      name: "Dhiraj Jadhav",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Dhiraj Jadhav",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Dhiraj Jadhav",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Dhiraj Jadhav",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Dhiraj Jadhav",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Dhiraj Jadhav",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Dhiraj Jadhav",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

const CommentList = ({comments}) =>{


    return comments.map((comment,index)=>(
    <div key={index}><Comment data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
      <CommentList comments={comment.replies}/>
    </div>
    </div>))
  

}
  
const ComentsConatiner = () => {
  return (
    <div className='m-5 p-3'>
        <h1 className='font-bold text-2xl p-2'>Comments :</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}
export default ComentsConatiner;