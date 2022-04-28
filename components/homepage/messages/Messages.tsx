import React from 'react';
import CommentBody from '../Tweet/comments/CommentSm';
import { NextPage } from 'next';

const Messages:NextPage = ():JSX.Element => {
  return (
    <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem]'>
      <h3 className='p-[1rem] text-[1.2rem] font-bold'>Messages</h3>
      <CommentBody/>
    </div>
  )
}

export default Messages