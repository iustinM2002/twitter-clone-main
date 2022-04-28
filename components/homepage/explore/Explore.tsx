import React,{useContext} from 'react'
// components
import Loadmore from '../../utils/Loadmore';
import ExplorePost from './ExplorePost';
// uuid

// context
import { RandomContext } from 'context/randomUserContext';
const Explore = () => {
  const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery,randomPostQuery] = useContext(RandomContext);
    
  return (
    <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem] md:mx-0'>
      
      <div className="p-[1rem] text-[1.2rem] font-bold flex items-center border-b-[1px] border-b-[#00000310] ">
        
        <h3 className='p-[1rem] text-[1.2rem] font-bold'>Explore</h3>
      </div>
      {randomPostQuery.data.data.map((post:any,index:number) => <ExplorePost key={index} post={post}/>)}
    </div>
  )
}

export default Explore