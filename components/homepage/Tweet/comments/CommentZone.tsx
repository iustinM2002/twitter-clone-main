import React,{useContext} from 'react';
import { NextPage } from 'next';
// context
import { ProfileContext } from '../../../../context/ProfileContext';

const CommentZone:NextPage<{comm:string,username:string}> = ({comm,username}) => {
  // deconstruct context
    const {currentUsername,currentPicture} = useContext(ProfileContext)
    const [currentUserName] = currentUsername;
    const [currentProfilePic] = currentPicture;
    
    return (
      <div className="tweet  border-t-[1px] pb-[1rem] border-[#bdbdbd8e] bg-[#00000007]">
          <h2 className='p-[1rem] font-bold'>{`Reply to ${username}`}</h2>
          <div className="flex py-[1rem] px-[0.5rem] ">
              <div className=" ml-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${currentProfilePic})`}}></div>
              <div className="px-[0.5rem]">
                    <div className="username flex ">
                    <h4 className='px-[0.3rem] font-bold '>{currentUserName}</h4>
                    <h5 className='text-[#0000008a]' >{"@" + currentUserName.toLocaleLowerCase()}</h5>
                  </div>
                  <p className='px-[0.3rem]'>{comm}</p>
              </div>
          </div>
              
        </div>
    )
}

export default CommentZone