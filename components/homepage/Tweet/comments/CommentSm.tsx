import React,{useState,useContext} from 'react';
import { NextPage } from 'next';
// components
import CommentZone from './CommentZone';
// context
import { CommentContext } from '../../../../context/CommentContext';

const CommentBody:NextPage = () :JSX.Element => {
    // deconstruct context
    const {activeComment,commentsLib,replyUser} = useContext(CommentContext)
    const [activeCom] = activeComment
    const [comments] = commentsLib
    const [replyedUsername] = replyUser;
   
  return (
    <div>
        {comments.map((comm:string,index:number) => <CommentZone key={index} comm={comm} username={replyedUsername[index]}/>)}
    </div>
  )
}

export default CommentBody