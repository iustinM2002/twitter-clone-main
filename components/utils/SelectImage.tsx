import React,{useContext,useState} from 'react';
import { NextPage } from 'next';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage ,faFaceSmile} from '@fortawesome/free-solid-svg-icons';
// context and utils
import { PostImageContext } from 'context/PostImageContext';
import { TweetContext } from 'context/TweetContext';
import { handleOnSubmit,handleOnChange } from './utils';
// emoji picker
import Picker from 'emoji-picker-react';

const SelectImage:NextPage<{setActiveButton:any}> = ({setActiveButton}) => {
    // emoji 
    const [chosenEmoji, setChosenEmoji] = useState<any>(null);
    // state
    const [activePicker,setActivePicker] = useState(false);
    // context
    const [ImageSrc,setImageSrc] = useContext(PostImageContext);
    const [addTweets,dispatchTweets,tweet,setTweet] = useContext(TweetContext);
    // setting up emojis
    const onEmojiClick = (event:any,emojiObject:any)=>{
        setChosenEmoji(emojiObject);
        if(chosenEmoji !== null)
        setTweet(tweet + " " + chosenEmoji.emoji);
        if(tweet.length >= 1){
          setActiveButton(true)
        }
      };
    
  return (
    <div className="reactions w-full py-[2rem] pl-[2rem] flex justify-start">
        <form className='md:w-[100px]' method='post' onSubmit={(e) =>handleOnSubmit(e,'order3',null,null,setImageSrc)} onChange={(e) =>handleOnChange(e,'first',setImageSrc)}>
          <label htmlFor="file"><FontAwesomeIcon className='cursor-pointer text-[#1D9BF0] hover:bg-[#1d9cf01c] p-[0.5rem] hover:rounded-full' icon={faImage}/></label>
          <FontAwesomeIcon onClick={() => setActivePicker(!activePicker)} className='cursor-pointer text-[#1D9BF0] hover:bg-[#1d9cf01c] p-[0.5rem] hover:rounded-full' icon={faFaceSmile}/>
          <input className='invisible p-0' type="file" id='file' name='file' />
          {ImageSrc.length >1 ?<div className='w-[150px] h-[100px] bg-cover bg-center m-[1rem] ' style={{backgroundImage:`url(${ImageSrc})`}}></div> : '' } 
              <div className="absolute">
                {activePicker ? <Picker onEmojiClick={onEmojiClick} /> : ''}
              </div>
          </form> 
          </div>
  )
}

export default SelectImage