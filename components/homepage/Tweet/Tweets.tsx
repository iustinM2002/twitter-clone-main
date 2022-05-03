import React,{useContext} from 'react';
import { NextPage } from 'next';
// import components
import Tweet from './Tweet';
// context
import { TweetContext } from '../../../context/TweetContext';
import { PostImageContext } from '../../../context/PostImageContext';

const Tweets:NextPage = ():JSX.Element => {
  const [addTweets] = useContext(TweetContext);
  const [ImageSrc,setImageSrc] = useContext(PostImageContext);
  return (
    <div>  
        {addTweets.filter((tweet:string) => tweet !== '' ).map((tweet:string,index:number) => <Tweet key={index} index={index} tweet={tweet}/>)}
    </div>
  )
}

export default Tweets;