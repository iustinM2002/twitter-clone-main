import React,{SyntheticEvent, useContext,useState} from 'react';
import { NextPage } from 'next';
// components
import SelectImage from './SelectImage';
// context   
import { ProfileContext } from '../../context/ProfileContext';
import { TweetContext } from '../../context/TweetContext';
import { PostImageContext } from '../../context/PostImageContext';
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('../utils/SelectImage'),{ssr:false});



const PostTweet:NextPage = ():JSX.Element => {

  // context deconstruct
    const [ImageSrc,setImageSrc,ImagesSrc,dispatchImg] = useContext(PostImageContext);
    const {currentPicture} = useContext(ProfileContext);
    const [currentProfilePic] = currentPicture;
    const [addTweets,dispatchTweets,tweet,setTweet] = useContext(TweetContext);
    // declared local state
    const [activebutton,setActiveButton] = useState<Boolean>(false)
  
    // handlers
    // setting tweet 
    const AddTweetHandler = (e:SyntheticEvent) =>{
      let target = e.target as HTMLInputElement
      e.preventDefault();
      setTweet(target.value)
      if(target.value.length > 0){
        setActiveButton(true);
      }else{
        setActiveButton(false);
      }
    }
    // adding tweet to tweets array
    const sendTweetHandler = ()=> {
      dispatchTweets({type:'ADD_TWEET',payload:{tweet:tweet}});
      dispatchImg({type:'ADD_IMG',payload:{image:ImageSrc}});
      setImageSrc('')
      setTweet('');
      setActiveButton(false)
    }

  return (
    <div className='border-b-[1px] border-[#00000310]'>
    <div className='flex'>
        <div className=" ml-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full" style={{backgroundImage:`url(${currentProfilePic})`}} ></div>
        <input value={tweet} onChange={(e) =>AddTweetHandler(e)} className='border-b-[1px] border-[#00000310 w-[90%] xl:w-[75%] mx-auto outline-none' type="text" data-testid='inputform' placeholder="What's happening?" />
    </div>
      <div className="flex">
          <DynamicComponent setActiveButton={setActiveButton}/>
        <div className="tweet-btn w-full flex h-[50px] justify-end my-[1.5rem] mx-[2rem]">
            <button onClick={sendTweetHandler} className={`${activebutton ? 'bg-[#1D9BF0] hover:bg-[#1882c9] cursor-pointer ' : 'bg-[#1d9cf07e] cursor-default'} text-white  w-[100px] min-h-[30px] rounded-[5rem]  transition-all `} >Tweet</button>
        </div>
      </div>
    </div>
  )
}

export default PostTweet