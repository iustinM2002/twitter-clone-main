import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
// components
import ProfileBody from './ProfileBody';
import WhoToFollow from './WhoToFollow';
// context import 
import { ProfileContext } from '../../../context/ProfileContext';


const Profile:NextPage = () : JSX.Element => {

    // context deconstruct
    const {currentPicture,currentUsername,currentBgPic} = useContext(ProfileContext)
    const [currentUserName,setCurrentUsername] = currentUsername;
    const [currentBackgroundPic,setCurrentBackgroundPic] = currentBgPic
    const [currentProfilePic,setCurrentProfilePic] = currentPicture;
  
    return (
        <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem]'>
          <h3 className='p-[1rem] text-[1.2rem] font-bold'>{currentUserName}</h3>
          <ProfileBody currentUserName={currentUserName} currentProfilePic={currentProfilePic} currentBackgroundPic={currentBackgroundPic}/>
          <WhoToFollow/>
        </div>
    )
}

export default Profile