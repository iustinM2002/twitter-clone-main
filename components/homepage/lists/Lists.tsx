import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';import ListElement from './ListElement';
import ListsBody from './ListsBody'
const Lists = () => {
  const [activeElement,setActiveElement] = useState<boolean>(false)
  // query and fetch
  const [tag,setTag] = useState<any>('dog')
  return (
    <div className='border-[1px] border-[#00000310] w-[45%] lg:w-full mx-[1rem]  lg:ml-[5rem] md:mx-0'>
      <div className="p-[1rem] text-[1.2rem] font-bold flex items-center border-[1px] border-b-[#00000310] ">
        <FontAwesomeIcon onClick={() => setActiveElement(false)} className='cursor-pointer' icon={faArrowLeft}/>
        <h3 className='p-[1rem] text-[1.2rem] font-bold'>Lists</h3>
      </div>
    {activeElement ? <ListElement tag={tag}/> :  <ListsBody tag={tag}  setTag={setTag} activeElement={activeElement} setActiveElement={setActiveElement}/>}
    </div>
  )
}

export default Lists