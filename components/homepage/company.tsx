import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
// context 
import { NavContext } from '../../context/NavContext';
import { ProfileContext } from '../../context/ProfileContext';

const Company:NextPage<{company:any}> = ({company}):JSX.Element => {
  // context deconstruct
  const [navIndex,setNavIndex] = useContext(NavContext);
  const {currentSelectedUser} = useContext(ProfileContext);
  const [currentUser,setCurrentUser] = currentSelectedUser;
  // state
  const [follow,setFollow] = useState('Follow');
  // making component active
  const selectCompanyHandler = () =>{
    setNavIndex(8);
    setCurrentUser(company)
  }
  // changing follow button text
  const followHandler = () => {
    if(follow === 'Follow'){
      setFollow('Unfollow')
    }else{
      setFollow('Follow')
    }

  }
  return (
    <div className='flex py-[1rem] justify-between'>
        <div className=" flex">
            <div className=" mx-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full"  style={{backgroundImage:`url(${company.logo})`}}></div>
            <div className="text flex flex-col ">
                <h4 className='text-[0.9rem] cursor-pointer hover:underline' onClick={selectCompanyHandler}>{company.business_name}</h4>
                <h6 className='text-[#000000a1] text-[0.8rem]'>{`@${company.business_name.split(' ')[0]}`}</h6>
            </div>
        </div>
        <div className="button mx-[1rem]">
            <button className='py-[0.3rem] px-[0.5rem] rounded-[5rem] bg-black text-white' onClick={followHandler}>{follow}</button>
        </div>
    </div>
  )
}

export default Company