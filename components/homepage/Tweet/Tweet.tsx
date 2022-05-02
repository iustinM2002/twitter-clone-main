import React,{useContext,useState} from 'react';
import { NextPage } from 'next';
// components
import CommentSec from './comments/CommentSec';
import Reaction from '../../utils/Reaction';
// context
import { ProfileContext } from '../../../context/ProfileContext';
import { CommentContext } from '../../../context/CommentContext';
import { PostImageContext } from '../../../context/PostImageContext';

const Tweet:NextPage<{tweet:string,index:number}> = ({tweet,index}):JSX.Element => {
    // deconstruct context
    const [ImageSrc,setImageSrc,ImagesSrc,dispatchImg] = useContext(PostImageContext);
    const {currentPicture,currentUsername} = useContext(ProfileContext);
    const {activeComment,commentLib,commentsLib} = useContext(CommentContext)
    const [activeCom] = activeComment
    const [currentProfilePic] = currentPicture;
    const [currentUserName] = currentUsername;
    const [comment,setComment] =commentLib;
    const [comments,setComments] = commentsLib;
    console.log(ImagesSrc)
    return (
      <div data-testid='tweet' className='border-b-[1px] border-[#00000310]'>
          <div className="flex py-[1rem] px-[0.5rem] ">
          <div className=" mx-[0.5rem] w-[60px]  h-[50px] bg-cover bg-center rounded-full" style={{backgroundImage:`url(${currentProfilePic})`}} ></div>
              <div className="px-[0.5rem] w-full">
                  <div className="username flex ">
                  <h4 className='px-[0.3rem] font-bold '>{currentUserName}</h4>
                  <h5 className='text-[#0000008a]' >{"@" + currentUserName.toLocaleLowerCase()}</h5>
                  </div>
                  <p className='px-[0.3rem] md:text-[0.9rem]'>{tweet}</p>
                 {ImagesSrc[index].length > 1 ? <div className=" mx-[0.5rem] w-full min-h-[300px] my-[1rem] bg-cover bg-center rounded-[1rem] md:w-[70%] md:min-h-[150px]"  style={{backgroundImage:`url(${ImagesSrc[index]})`}}></div> : ''}
              </div>
          </div>
          {activeCom ? <CommentSec comment={comment} setComment={setComment} comments={comments} setComments={setComments} username={currentUserName}/> : ''}
          <Reaction/>
      </div>
    )
}

export default Tweet