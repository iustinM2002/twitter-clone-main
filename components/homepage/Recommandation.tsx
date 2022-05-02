import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import Company from './company';
//context
import { RandomContext } from '../../context/randomUserContext';

const Recommandation:NextPage = ():JSX.Element => {
  // deconstruct context
  const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery] = useContext(RandomContext);

  return (
    <div className='w-[25%] h-[320px] bg-[#efefef] 2xl:hidden rounded-[2rem] m-[2rem] fixed right-[0]' >
        <h3 className='font-bold p-[1rem] text-[1.3rem]'>You might like</h3>
        {randomCompanyQuery.data.map((company:any,index:number) => <Company key={index} company={company}/>)}
    </div>
  )
}

export default Recommandation