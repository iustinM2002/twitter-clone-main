import React,{useContext,useState} from 'react';
import { NextPage } from 'next';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// context
import { ProfileContext } from '../../../../context/ProfileContext';
import { CommentContext } from 'context/CommentContext';

const CommentSec:NextPage<{comment:string,setComment:any,comments:string[],setComments:any,username:string}> = ({comment,setComment,comments,setComments,username}) => {
 
  // deconstruct context
    const {currentPicture} = useContext(ProfileContext);
    const [currentProfilePic] = currentPicture;
    const [activebutton,setActiveButton] = useState<Boolean>(false);
    const {activeComment,replyUser} = useContext(CommentContext)
    const [activeCom,setActiveCom] = activeComment;
    const [replyedUsername,setReplyedUsername] = replyUser;
  
    // handlers
    // event for setting text from  a twitter post and make button active
    const AddCommentHandler = (e:React.SyntheticEvent) =>{
      let target = e.target as HTMLInputElement
      e.preventDefault();
      setComment(target.value)
      if(target.value.length > 0){
        setActiveButton(true);
      }else{
        setActiveButton(false);
      }
    }
    // event for setting up an array of tweets
    const CommentHandler = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        if(comment.length > 1){
          setComments([...comments,comment]);
          setReplyedUsername([...replyedUsername,username])
          setComment('');
          setActiveCom(false)
        }
      }

  return (
    <div className='fixed w-full min-h-[100vh] bg-[#b6b6b607] flex justify-center items-center top-0 left-0 z-20'>
      <form action=""  className='bg-white w-[35rem]  mx-auto min-h-[28vh] rounded-[1rem] relative md:w-full md:min-h-[100vh] md:rounded-[0rem]'>
        <FontAwesomeIcon onClick={() => setActiveCom(false)} className='cursor-pointer text-black absolute top-[0.5rem] left-[0.5rem] text-[1.2rem] px-[0.7rem] py-[0.45rem] transition-all hover:bg-[#a1a1a16d] rounded-full' icon={faXmark}/>
            <div className="">
                <h2 className='w-[80%] mx-auto font-bold text-[2rem] py-[1rem]'>Comment</h2>
                <div className="flex ">
                  <div className=" mx-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full" style={{backgroundImage:`url(${currentProfilePic})`}} ></div>
                      <input onChange={AddCommentHandler} className='outline-none'  type="text" placeholder='Tweet your reply'  />
                </div>
            </div>
            <div className="tweet-btn w-full flex justify-end py-[1rem] px-[2rem]">
            <button onClick={CommentHandler}  className={`${activebutton ? 'bg-[#1D9BF0] hover:bg-[#1882c9] cursor-pointer ' : 'bg-[#1d9cf07e] cursor-default'} text-white px-[1rem] py-[0.5rem] rounded-[5rem]  transition-all `} >Reply</button>
            </div>
      </form>
</div>
  )
}

export default CommentSec