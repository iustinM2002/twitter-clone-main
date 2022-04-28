import React, { useState } from 'react';
import { NextPage } from 'next';
// font awesome and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
// types import 
import { ProfileBodyInt } from 'types';
// components
import { randomCommentShareNumber } from '../../../components/utils/utils';
import EditProfile from './EditProfile';

const ProfileBody:NextPage<ProfileBodyInt> = ({currentUserName,currentProfilePic,currentBackgroundPic}):JSX.Element => {
    
    const [activeEdit,setActiveEdit] = useState<Boolean>(false);
    return (
        <div className=''>
            {activeEdit ? <EditProfile setActiveEdit={setActiveEdit}/> : ""}
            
            <div className="`profile-background min-h-[15rem] bg-[#CFD9DE] w-full bg-center  bg-cover bg-center`" style={{backgroundImage:`url(${currentBackgroundPic})`}}></div>
                <div className="profile-description relative pl-[1rem] border-b-[0.5px]">
                    <div className="profile-img">
                        {!currentProfilePic ? 
                        <div className="w-[8rem] min-h-[8rem] rounded-[100%] absolute top-[-75%] left-[5%] border-[5px] border-white bg-cover bg-center" style={{backgroundImage:`url(https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png)`}}></div>
                        :
                        <div className="w-[8rem] min-h-[8rem] rounded-[100%] absolute top-[-75%] left-[5%] border-[5px] border-white bg-cover bg-center" style={{backgroundImage:`url(${currentProfilePic})`}}></div>
                        }
                        </div>
                    <div className="first-row flex flex-col  py-[0.3rem] mt-[3rem] relative">
                        <div className="verift-row flex">
                            <p className="text-xl font-bold">{currentUserName}</p>
                        </div>
                        <p className="text-[#646464e0]">{`@${currentUserName.toLowerCase()}`}</p>
                        <p className="text-[1rem] py-[0.5rem]" >What's happening?!</p>
                        <button onClick={() => setActiveEdit(true)} className='absolute top-[1rem] right-[1rem] border-[1px] border-[#00000047] font-bold text-[0.8rem] rounded-[2rem] py-[0.5rem] px-[0.8rem] transition-all hover:bg-[#00000016]'>Edit Profile</button>
                    </div>
                    <div className="profile-about-section">
                        <div className="date-joined flex">
                            <FontAwesomeIcon className="text-[#646464e0] mt-1 mr-1" icon={faCalendar}/>
                            <p className="text-[#646464e0] ">Joined 2022</p>
                        </div>
                        <div className="followers flex pb-[1rem]">
                            <p className="text-[#646464e0] pr-[1rem]"><span className="font-bold pr-[0.5rem] text-black">{randomCommentShareNumber()}</span>Following</p>
                            <p className="text-[#646464e0]"><span className="font-bold pr-[0.5rem] text-black">{randomCommentShareNumber()}</span>Followers</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProfileBody