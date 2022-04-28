import React from 'react';
import Link from 'next/link';

const IsLogged = () => {
  return (
    <div className='z-50 w-full min-h-[100vh] bg-white fixed top-0 left-0 flex flex-col justify-center items-center px-[2rem]'>
        <p>You are not signed in, please sign in or if you don't have an account sign up.</p>
        <div className=" px-[0.5rem] py-[0.2rem] border-[1px] border-black mt-[1rem]">
            <Link href='/login'>Sign in</Link>
        </div>
    </div>
  )
}

export default IsLogged