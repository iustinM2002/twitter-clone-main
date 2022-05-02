import React, { useContext,useEffect } from 'react';
import { NextPage } from 'next';
// components
import Nav from '../components/homepage/Nav';
import DefaultPage from '../components/homepage/defaultPage';
import Profile from '../components/homepage/Profile/Profile';
import Messages from '../components/homepage/messages/Messages';
import Recommandation from '../components/homepage/Recommandation';
import Explore from '../components/homepage/explore/Explore';
import RandomProfile from '../components/homepage/randomProfiles/randomProfile';
import Lists from '../components/homepage/lists/Lists';
import IsLogged from '../components/utils/isLogged'
// context
import { LoginContext } from '../context/LoginContext';
import {ProfileContext} from '../context/ProfileContext';
import {NavContext} from '../context/NavContext'

const HomePage:NextPage = ():JSX.Element => {
  const {switchLogged} = useContext(LoginContext);
  const [isLogged,dispatchLog] = switchLogged;
  const [navIndex] = useContext(NavContext);
  const {currentPicture,currentUsername,currentBgPic,currentSelectedUser} = useContext(ProfileContext)
  const [currentUserName,setCurrentUsername] = currentUsername;
  const [currentBackgroundPic,setCurrentBackgroundPic] = currentBgPic
  const [currentProfilePic,setCurrentProfilePic] = currentPicture;
  const [currentUser,setCurrentUser] = currentSelectedUser;

  // uploading name and profile image on sessionStorage
  useEffect(()=>{
      setCurrentProfilePic(sessionStorage.getItem('profilePic'));
      setCurrentBackgroundPic(sessionStorage.getItem('profilePic2'));
      setCurrentUsername(sessionStorage.getItem('username'));
      if(sessionStorage.getItem('isLogged') === 'true')
      dispatchLog(sessionStorage.getItem('isLogged'));
  },[]);
  
  return (
    <div className='flex justify-center '>
      { isLogged === 'false' ? <IsLogged/>: 
      <div className="w-full flex justify-center">
        <Nav/>
        {navIndex === 0 ? <DefaultPage/> : ''}
        {navIndex ===1 ? <Explore/>: ''}
        {navIndex === 3 ? <Messages/> : ''}
        {navIndex === 6 ? <Profile/> : ''}
        {navIndex === 8 ? <RandomProfile user={currentUser}/> : ''}
        {navIndex === 10 ? <Lists/> : ''}
        <Recommandation/>
      </div>}
    </div>
  )
}

export default HomePage