import React,{useState} from 'react';
import Link from 'next/link';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// yup and form hook imports
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// types
import { FormValues,dataContact } from 'types';
import { NextPage } from 'next';
const inputStyle = `w-[50%] border-[1px] border-[#7d7d7d9c] rounded-[0.3rem] px-[0.5rem] py-[1rem] mx-auto my-[1rem] relative `;
const schema = yup.object().shape({
    email: yup.string().required().email('Must be a valid email'),
    password : yup.string().required().min(4)
});

const Form:NextPage<{onSubmit: (data: dataContact) => Promise<void>,errorForm:string}> = ({onSubmit,errorForm}):JSX.Element => {
    // state
    const [passwordVis,setPasswordVis] = useState<string>('show');
    // form hook deconstruct 
    const {register,handleSubmit,setError,formState: { errors }} = useForm<FormValues>({
        resolver:yupResolver(schema)
    });
    // function for showing or hidden password
    const showHidePassHandler = (e:React.SyntheticEvent) : void =>{
        e.preventDefault()
        if(passwordVis === 'show'){
            setPasswordVis('hide')
        }else{
            setPasswordVis('show')
        }
    }
    const MyLink = React.forwardRef( ()  => {return <FontAwesomeIcon  className='cursor-pointer text-black absolute top-[0.5rem] left-[0.5rem] text-[1.2rem] px-[0.7rem] py-[0.45rem] transition-all hover:bg-[#a1a1a16d] rounded-full' icon={faXmark}/> })
    
  return (
    <form data-testid='form' className='bg-white w-[35rem] mx-auto min-h-[60vh] rounded-[1rem] relative md:w-full md:min-h-[100vh] md:rounded-[0rem]' onSubmit={handleSubmit(onSubmit)}>
    <Link  href={'/'}><MyLink/></Link>
        <div className="icon min-h-[3rem] flex justify-center items-center w-full">
            <FontAwesomeIcon className='text-[#1D9BF0] text-[2rem] ' icon={faTwitter}/>
        </div>
        <div className="">
            <h2 className='w-[50%] mx-auto font-bold text-[2rem] py-[1rem]'>Sign in to Twitter</h2>
            <div className="inputs flex flex-col">
                <input className={inputStyle} type="email" placeholder='Email' {...register('email')} />
                <div className='w-[50%] mx-auto text-[0.9rem]'>{errors.email? <p>Must be a valid email</p> : ''}</div>
                <div className="relative flex  flex-col items-center">
                    <input className={inputStyle}   type={passwordVis === 'show' ? 'password' : 'text'} placeholder='Password'  {...register('password',{minLength:4}) }  />
                    <div className='w-[50%] mx-auto text-[0.9rem]'>{errors.password? <p>Password should contain at least 4 caracters</p> : ''}</div>
                    <div  className='text-white bg-[#272C30] absolute top-[32%] translate-y-[-50%]  right-[25%] rounded-r-[0.3rem] px-[0.5rem] py-[1rem]  my-[1rem]  cursor-pointer' onClick={showHidePassHandler}>{passwordVis.toLocaleUpperCase()}</div>
                </div>
            </div>
        </div>
        <div className="flex items-end">
            <button className='cursor-pointer w-[50%] my-[1rem] text-white bg-[#272C30] py-[0.5rem] rounded-[5rem] mx-auto flex justify-center items-center font-bold' type='submit'>Next</button>
        </div>
         <p className='w-[50%] mx-auto py-[1rem]' data-testid="error">{errorForm.length > 1 ?  errorForm : ""}</p>
    </form>
  )
}

export default Form