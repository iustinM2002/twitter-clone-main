import React,{useState,useMemo, useContext} from 'react';
import { NextPage } from 'next';
// font awesome and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment,faRetweet,faHeart,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
// utils
import {randomCommentShareNumber,randomLikeNumber} from './utils';
// context
import { CommentContext } from '../../context/CommentContext';
// styles
const numberStyle = `number text-[#27272788] pt-[3px] pl-[2px] text-[0.9rem]`;

const Reaction:NextPage = ():JSX.Element => {
    // state and context deconstruct
    const [activeLike,setActiveLike] = useState(false);
    const {activeComment} = useContext(CommentContext)
    const [activeCom,setActiveCom] = activeComment
  
  return (
    <div className="reaction-zone flex justify-around w-full  py-[0.3rem] ">
    <div className="reaction flex ">
        <FontAwesomeIcon onClick={() =>setActiveCom(!activeCom)} className=  " p-[7px] text-[#35353588] hover:bg-[#D3E9F6] rounded-full transition-all hover:text-[#1D9BF0]"  icon={faComment}/>
        <p className={numberStyle}>{randomCommentShareNumber()}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon className="py-[7px] px-[5px] text-[#38383888]  hover:bg-[#B4E6D5] rounded-full transition-all hover:text-[#0EBE83]" icon={faRetweet}/>
        <p className={numberStyle}>{randomCommentShareNumber()}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon onClick={() => setActiveLike(!activeLike)} className={activeLike ? "p-[7px] text-[#F91880] cursor-pointer hover:bg-[#F8E0EB] rounded-full transition-all" :"p-[7px] text-[#3f3f3f88] cursor-pointer hover:bg-[#F8E0EB] rounded-full transition-all hover:text-[#F91880] "} icon={faHeart}/>
        <p className={numberStyle}>{randomLikeNumber() + "k"}</p>
    </div>
    <div className="reaction flex ">
        <FontAwesomeIcon className="p-[7px] text-[#2c2c2c88] hover:bg-[#D3E9F6] rounded-full transition-all hover:text-[#1D9BF0]" icon={faArrowUpFromBracket}/>
    </div>
</div>
  )
}

export default Reaction