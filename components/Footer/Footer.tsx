import React from 'react';
import { NextPage } from 'next';

const Footer: NextPage = () : JSX.Element => {
  const footerElements = ['About','Help Center','Terms of Service','Privacy Policy','Cookie Policy','Accessibility','Ads info','Blog','Status','Careers','Brand Resources','Advertising','Marketing','Twitter for Business','Developers','Directory','Settings','© 2022 Twitter, Inc.']
    return (
    <div className='min-h-[10vh] text-[#7a7a7a] flex justify-center items-center px-[2rem] text-[0.9rem] w-full flex-wrap'>
        {footerElements.map((element:string,index:number) => <p key={index} className='px-[0.7rem] py-[0.2rem] '>{element}</p>)}
    </div>
  )
}

export default Footer