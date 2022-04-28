import Loading from '../../../components/utils/Loading';
import React from 'react';
import { useQuery } from 'react-query';
import ListPost from './ListPost'

const ListElement = ({tag}:{tag:any}) => {
  const randomTagPost = async () =>  await(await fetch(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`,{headers:{'app-id':'625ffa6de6a875ce42705773'}}) ).json();
  const randomTagPostQuery = useQuery('random_tag_post',randomTagPost);

 
  if(randomTagPostQuery.isLoading) return <Loading/>
  return (
    <div className="">
      {randomTagPostQuery.data.data.length === 0 ? 
      <div className="w-full">
        <p className='p-[1rem]'>No posts like that yet.</p>
      </div> :
    <div className=' w-full '>
     { randomTagPostQuery.data.data.map((post:any,index:number) => <ListPost key={index} post={post} />)}
    </div>
    }
    </div>
  )
}

export default ListElement