import React, { useState } from 'react';
import { NextPage } from 'next';
// font awesome and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
// components
import { randomCommentShareNumber } from '../../../components/utils/utils';

const RandomProfileBody:NextPage<{user:any}> = ({user}):JSX.Element => {
  return (
    <div className=''>
      <div className="profile-background min-h-[15rem] bg-[#CFD9DE] w-full bg-cover bg-center  " style={{backgroundImage:`url(https://www.comicmoviedb.com/wp-content/uploads/2016/01/twitter-bg.jpg)`}}></div>
      <div className="profile-description relative pl-[1rem] border-b-[0.5px]">
          <div className="profile-img "  >
              {user.picture ? <div className="bg-white w-[8rem] min-h-[8rem] rounded-[100%]  absolute top-[-75%] left-[5%]  z-[10] "> <div className="w-[8rem] min-h-[8rem] rounded-[100%] absolute border-[5px] border-white bg-cover bg-center z-[20] " style={{backgroundImage:`url(${user.picture.large})`}}></div> </div> :<div className="bg-white w-[8rem] min-h-[8rem] rounded-[100%]  absolute top-[-75%] left-[5%]  z-[10] "><div className="w-[8rem] min-h-[8rem] rounded-[100%] absolute  border-[5px] border-white bg-cover bg-center" style={{backgroundImage:`url(${user.logo})`}}>
              </div></div>  }
          </div>
          <div className="first-row flex flex-col  py-[0.3rem] mt-[3rem] relative">
              <div className="verift-row flex">
                  {user.name?  <p className="text-xl font-bold">{user.name.first  +' ' + user.name.last} </p> : <p className="text-xl font-bold"> {user.business_name}</p>  }
              </div>
              {user.name? <p className="text-[#646464e0]">{`@${(user.name.first + + user.name.last).toLowerCase()}}`}</p> : <p className="text-[#646464e0]">{`@${ user.business_name}}`}</p> }
              <p className="text-[1rem] py-[0.5rem]" >What's happening?!</p>
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

export default RandomProfileBody