import React from 'react'
import { NextPage } from 'next'
// importing compponents
import PostTweet from '../utils/postTweet';
import Tweets from './Tweet/Tweets';
import RandomTweets from './Tweet/randomTweets';

const DefaultPage:NextPage = ():JSX.Element => {
  return (
    <div className='  border-[1px] border-[#00000310] w-[45%] lg:w-full '>
        <h3 className='p-[1rem] text-[1.2rem] font-bold'>Home</h3>
        <PostTweet/>
        <Tweets/>
        <RandomTweets/>
    </div>
  )
}

export default DefaultPage