import React,{useContext} from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
// font awesome setup and icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// components
import RegisterForm from './RegisterForm';
// context
import { LoginContext } from '../../context/LoginContext';
// styles
const iconText='text-[#1D9BF0] text-[2.5rem]';

const Starter:NextPage = () : JSX.Element => {
    // context deconstruct
    const {registerFormSwitch} = useContext(LoginContext);
    const [RegisterActive,dispatch] = registerFormSwitch;
    // event handlers
    const setActiveRegister = () =>{
        dispatch({type:'SET_REGISTER_ACTIVE'})
    }
  return (
    <div className='min-h-[100vh] w-full flex lg:flex-col'>
        {RegisterActive ? <RegisterForm/> : ''}
        <div className="image-starter min-h-[100vh] w-[50%] bg-cover bg-center bg-[url('../images/starter_semi_bg.png')] flex justify-center items-center lg:order-2 lg:w-full lg:min-h-[50vh]">
            <FontAwesomeIcon className='text-white text-[15rem] sm:text-[10rem]' icon={faTwitter} />
        </div>
        <div className="form-starter flex flex-col justify-center px-[2rem] lg:w-[70%] lg:mx-auto ">
            <div className="icon lg:pt-[3rem] ">
            <FontAwesomeIcon className={iconText} icon={faTwitter} />
            </div>
            <div className="register-form flex flex-col ">
                <h2 className='font-bold text-[4rem] py-[4rem] md:text-[2rem] sm:py-[2rem]'>Happening now</h2>
                <h3 className='text-[1.7rem] font-bold'>Join Twitter today</h3>
                <div onClick={setActiveRegister} className=" cursor-pointer link my-[1rem] text-white bg-[#1D9BF0] w-[17rem] flex justify-center py-[0.5rem] rounded-[10rem] font-bold text-[0.9rem] transition-all hover:bg-[#1884cb]">
                <button className='font-bold' >Sign up with phone or email</button>
                </div>
                <p className='text-[0.7rem] w-[17rem] leading-[0.75rem] text-[#00000096]'>By signing up, you agree to the <span className='text-[#1D9BF0]'>Terms of Service</span> and <span className='text-[#1D9BF0]'>Privacy Policy</span>, including <span className='text-[#1D9BF0]'>Cookie Use.</span></p>
            </div>
            <div className="login-form pt-[4rem] flex flex-col lg:pb-[2rem] sm:pt-[2rem] ">
                <h4 className='font-bold text-[1.2rem]'>Already have an account?</h4>
                <Link href='/login'><div className="cursor-pointer my-[1rem] link text-[#1D9BF0] w-[17rem] flex justify-center py-[0.5rem] rounded-[10rem] font-bold text-[0.9rem] border-[1px] border-[#00000035] transition-all hover:bg-[#1883cb15]">Sign in</div></Link>
            </div>   
        </div>
    </div>
  )
}

export default Starter