import React,{useContext} from 'react';
import { NextPage } from 'next';
// font awesome setup and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// context
import { LoginContext } from '../../context/LoginContext';
// yup and react hook form
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {dataContact,FormValues} from '../../types'
// styles
const inputStyle = `w-[80%] border-[1px] border-[#7d7d7d9c] rounded-[0.3rem] px-[0.5rem] py-[1rem] mx-auto my-[1rem]`;

// yup schema
const schema = yup.object().shape({
    username:yup.string().required().max(15),
    email:yup.string().required().email(),
    password:yup.string().required().min(6)
});
// add a new user to the database
async function saveContact(contact:any){
    const response = await fetch('/api/register',{
        method: 'POST',
        body:JSON.stringify(contact)
    });
    console.log(response)
    if(!response.ok){
        throw Error(response.statusText)
    }
    return await response.json();
}

const RegisterForm:NextPage = (): JSX.Element => {
    // deconstruct context
    const {registerFormSwitch} = useContext(LoginContext);
    const [RegisterActive,dispatch] = registerFormSwitch;
    const setUnactiveRegister = () =>{
        dispatch({type:'SET_REGISTER_FALSE'})
    }
    // deconstrcut use form hook
    const {register,handleSubmit,formState:{errors}} = useForm<FormValues>({
        resolver:yupResolver(schema)
    });
    const onSubmit = async (data:dataContact) =>{
        await saveContact({username:data.username,email:data.email,password:data.password});
    }
    
  return (
    <div className='fixed w-full min-h-[100vh] bg-[#0000005b] flex justify-center items-center'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-white w-[35rem]  mx-auto min-h-[68vh] rounded-[1rem] relative md:w-full md:min-h-[100vh] md:rounded-[0rem]'>
            <FontAwesomeIcon onClick={setUnactiveRegister} className='cursor-pointer text-black absolute top-[0.5rem] left-[0.5rem] text-[1.2rem] px-[0.7rem] py-[0.45rem] transition-all hover:bg-[#a1a1a16d] rounded-full' icon={faXmark}/>
            <div className="icon min-h-[3rem] flex justify-center items-center w-full">
                <FontAwesomeIcon className='text-[#1D9BF0] text-[2rem] ' icon={faTwitter}/>
            </div>
            <div className="">
                <h2 className='w-[80%] mx-auto font-bold text-[2rem] py-[1rem]'>Create your account</h2>
                <div className="inputs flex flex-col">
                    <input className={inputStyle} type="text" placeholder='Name' {...register('username')} />
                    {errors.username? <p className='w-[80%] mx-auto'>Please use a shorter username.</p> : ''}
                    <input className={inputStyle} type="email" placeholder='Email' {...register('email')} />
                    {errors.email? <p className='w-[80%] mx-auto'>Please use a valid email.</p> : ''}
                    <input className={inputStyle} type="text" placeholder='Password'{...register('password')} />
                    {errors.password? <p className='w-[80%] mx-auto'>Please use a longer password.</p> : ''}
                </div>
            </div>
            <div className="min-h-[20vh] flex items-end md:min-h-[40vh]">
                <button type='submit' className="w-[80%] my-[1rem] text-white bg-[#999999] py-[1rem] rounded-[5rem] mx-auto flex justify-center items-center font-bold">Next</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm;