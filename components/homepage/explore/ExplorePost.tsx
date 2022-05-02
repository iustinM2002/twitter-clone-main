import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import Reaction from '../../../components/utils/Reaction';
import CommentSec from '../Tweet/comments/CommentSec';
// context import 
import { CommentContext } from '../../../context/CommentContext';

const ExplorePost:NextPage<{post:any}> = ({post}):JSX.Element => {
      
  // context deconstruct
      const {activeComment,commentLib,commentsLib} = useContext(CommentContext);
      const [activeCom] = activeComment
      const [comment,setComment] =commentLib;
      const [comments,setComments] = commentsLib;
      
      return (
        <div className='border-b-[1px] border-[#00000310] '  >
          <div className="flex py-[1rem]  ">
              <div className=" mx-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${post.owner.picture})`}}></div>
              <div className=" mx-[0.5rem] w-full">
                  <div className="username flex">
                    <h4 className='px-[0.3rem] font-bold cursor-pointer hover:underline'  >{post.owner.firstName + " " + post.owner.lastName}</h4>
                    <h5 className='text-[#0000008a]' >{`@${post.owner.firstName.toLowerCase() + post.owner.lastName.toLowerCase()}`}</h5> 
                  </div>
                  <p className='px-[0.5rem]'>{post.text}</p>
                  <div className="w-full flex justify-center my-[1rem]">
                  <div className=" mx-[0.5rem] w-full min-h-[300px] bg-cover bg-center rounded-[1rem] md:w-[50%] md:min-h-[150px] "  style={{backgroundImage:`url(${post.image})`}}></div></div>
              </div>
          </div>
          <Reaction/>
          {activeCom ? <CommentSec comment={comment} setComment={setComment} comments={comments} setComments={setComments} username={post.owner.firstName + " " +post.owner.lastName}/> : ''}
  </div>
  )
}

export default ExplorePost