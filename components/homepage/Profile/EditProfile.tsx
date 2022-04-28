import React,{useState,useContext} from 'react'
import { NextPage } from 'next';
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// importing util funtions
import { handleOnChange , handleOnSubmit } from '../../../components/utils/utils';
// context imports
import { ProfileContext } from 'context/ProfileContext';

const EditProfile:NextPage<{setActiveEdit:any}> = ({setActiveEdit}:{setActiveEdit:any}):JSX.Element => {
    // state
    const [imageSrc, setImageSrc] = useState('');
    const [imageSrc2, setImageSrc2] = useState('');
    // context
    const {currentPicture,currentBgPic} = useContext(ProfileContext)
    const [currentProfilePic,setCurrentProfilePic] = currentPicture;
    const [currentBackgroundPic,setCurrentBackgroundPic] = currentBgPic

  return (
    <div className='fixed w-[100%] min-h-[100vh]  bg-[#6d6d6d84] top-0 left-0 z-10 flex justify-center items-center'>
        <div className="edit bg-white rounded-[1rem] relative flex md:flex-col">
        <FontAwesomeIcon onClick={() => setActiveEdit(false)} className='cursor-pointer text-black absolute top-[0.5rem] left-[0.5rem] text-[1.2rem] px-[0.7rem] py-[0.45rem] transition-all hover:bg-[#a1a1a16d] rounded-full' icon={faXmark}/>
        <form  method="post"  onSubmit={(e) =>handleOnSubmit(e,'order1',setCurrentProfilePic)} onChange={(e) => handleOnChange(e,'first',setImageSrc)} className='flex flex-col justify-center items-center min-h-[30vh] w-full '>
            <label htmlFor="file" className="btn cursor-pointer flex justify-center bg hover:underline mt-[1rem]">Select Profile Image</label>
            <input className='invisible' id='file' type="file" name="file" placeholder='update' />   
            {imageSrc.length >1 ?<div className='w-[100px] h-[100px] bg-cover bg-center m-[1rem] rounded-full' style={{backgroundImage:`url(${imageSrc})`}}></div> : '' } 
            <button className=' border-[1px] border-black p-[0.5rem] rounded-[1rem] font-bold mb-[1rem]'>Upload Files</button> 
        </form>
        <form  method="post"   onSubmit={(e) =>handleOnSubmit(e,'order2',setCurrentProfilePic,setCurrentBackgroundPic)} onChange={(e) => handleOnChange(e,'second',setImageSrc,setImageSrc2)} className='flex flex-col justify-center items-center min-h-[30vh] w-full '>
            <label htmlFor="file2" className="btn cursor-pointer flex justify-center bg hover:underline mt-[1rem]">Select Background</label>
            <input className='invisible' id='file2' type="file" name="file2" placeholder='update' />
            {imageSrc2.length >1 ?<div className='w-[150px] h-[100px] bg-cover bg-center m-[1rem] ' style={{backgroundImage:`url(${imageSrc2})`}}></div> : '' } 
            <button className=' border-[1px] border-black p-[0.5rem] rounded-[1rem] font-bold mb-[1rem]'>Upload Files</button> 
        </form>
        </div>
    </div>
  )
}

export default EditProfile