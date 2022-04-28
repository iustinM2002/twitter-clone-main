import  React,{useContext} from 'react';
import { NextPage } from 'next';
// font awesome icons and setup
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faHashtag, faEnvelope,faList,faUser} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// context
import { NavContext } from '../../context/NavContext';
const liStyle = `text-[1.3rem] w-[15rem]  py-[0.5rem] cursor-pointer px-[2rem] hover:bg-[#00000036] flex   rounded-[5rem] my-[0.2rem] transition-all lg:px-[0rem] lg:hover:bg-transparent lg:w-[3rem]`;
const iconStyle= `px-[0.9rem] lg:hover:bg-[#00000036] lg:py-[0.9rem] lg:rounded-full transition-all lg:px-[0.5rem]`;
const spanClass = `lg:hidden`;

const Nav:NextPage = ():JSX.Element => {
  const [navIndex,setNavIndex] = useContext(NavContext)
  return (
    <nav className="min-h-[100vh] flex flex-col w-[20%] items-start  lg:min-h-[10%]  bg-white  semi-tall:hidden lg:w-[5rem] fixed z-10 left-0 md:bottom-0 md:w-full ">
      <ul className="nav-links flex flex-col mx-[2rem] w-full text-left md:flex-row md:bg-white md:w-full md:justify-around md:mx-0">
         <li className={`${liStyle} text-[#1D9BF0] text-[1.8rem]`}><FontAwesomeIcon className={iconStyle} icon={faTwitter}/></li>
         <li onClick={() => setNavIndex(0)} className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faHouse}/><span className={spanClass}>Home</span> </li>
         <li onClick={() => setNavIndex(1)} className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faHashtag}/><span className={spanClass}>Explore</span>  </li>   
         <li onClick={() => setNavIndex(3)} className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faEnvelope}/><span className={spanClass}>Messages</span>  </li>
         <li onClick={() => setNavIndex(10)} className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faList}/> <span className={spanClass}> List</span></li>
         <li onClick={() => setNavIndex(6)} className={liStyle}><FontAwesomeIcon className={iconStyle} icon={faUser}/> <span className={spanClass}> Profile</span></li>
     </ul>
 </nav>
  )
}

export default Nav