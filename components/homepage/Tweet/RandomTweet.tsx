import React,{useContext,useState} from 'react';
import { NextPage } from 'next';
// components
import Reaction from '../../utils/Reaction';
import CommentSec from './comments/CommentSec';
import RandomProfile from '../randomProfiles/randomProfile';
// context
import { CommentContext } from 'context/CommentContext';
import { NavContext } from 'context/NavContext';
import { ProfileContext } from 'context/ProfileContext';
import { randomIntervalNumber } from '../../../components/utils/utils';

const RandomTweet:NextPage<{index:number,picture:any,user:any,text:string,number:number}> = ({index,picture,user,text,number}):JSX.Element => {
  
  // context deconstruct
  const {activeComment,commentLib,commentsLib} = useContext(CommentContext);
  const [navIndex,setNavIndex] = useContext(NavContext);
  const [activeCom,setActiveCom] = activeComment
  const [comment,setComment] =commentLib;
  const [comments,setComments] = commentsLib;
  const {currentSelectedUser} = useContext(ProfileContext);
  const [currenuUser,setCurrentUser] = currentSelectedUser;
  // state
  const [activeUser,setActiveUser] = useState(false);

  return (
    <div className='border-b-[1px] border-[#00000310] '  >
      <div className="flex py-[1rem]  ">
          <div className=" mx-[0.8rem] w-[60px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${user.picture.large})`}}></div>
          <div className=" mx-[0.5rem] w-full">
              <div className="username flex">
              <h4 className='px-[0.3rem] font-bold cursor-pointer hover:underline'  onClick={() =>{setCurrentUser(user); setNavIndex(8)}}>{user.name.first + " " + user.name.last}</h4>
              <h5 className='text-[#0000008a]' >{`@${user.name.first.toLowerCase() + user.name.last.toLowerCase()}`}</h5> 
              </div>
              <p className='px-[0.5rem] md:text-[0.9rem]'>{text}</p>
              {index % randomIntervalNumber(1,5) ===0 ? <div className=" mx-[0.5rem] w-full min-h-[300px] my-[1rem] bg-cover bg-center rounded-[1rem] md:w-[70%] md:min-h-[150px]"  style={{backgroundImage:`url(${picture.data[index].download_url})`}}></div> : ''}
          </div>
      </div>
      <Reaction/>
      {activeCom ? <CommentSec comment={comment} setComment={setComment} comments={comments} setComments={setComments} username={user.name.first + " " + user.name.last}/> : ''}
      
  </div>
  )
}

export default RandomTweet