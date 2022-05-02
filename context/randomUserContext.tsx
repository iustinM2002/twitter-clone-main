import React,{createContext,useEffect,useState} from 'react';
import { QueryClient,dehydrate,useQuery } from 'react-query';
import Loading from '../components/utils/Loading'
type initalValue = any;
let initValue!:initalValue;
export const RandomContext = createContext(initValue)
let index = 50;

 const randomUsers= async () => await(await fetch(`https://randomuser.me/api/?results=${index}`)).json()
 const randomIpsum= async () => await(await fetch('https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum?size=50')).json()
 const randomCompany= async () => await(await fetch('https://random-data-api.com/api/company/random_company?size=3')).json()
 const randomPost = async () => await( await fetch('https://dummyapi.io/data/v1/post?limit=50',{headers:{'app-id':'625ffa6de6a875ce42705773',}})).json();
 const randomPicsum = async () => await(await fetch('https://picsum.photos/v2/list?page=2&limit=50')).json()
 const randomTag = async () => await( await fetch('https://dummyapi.io/data/v1/tag?limit=1',{headers:{'app-id':'625ffa6de6a875ce42705773',}})).json();
 
export const RandomUserProvider = (props:any) => {
  const randomUsersQuery = useQuery('random_users', randomUsers);
  const randomIpsumQuery = useQuery('random_ipsum', randomIpsum);
  const randomCompanyQuery = useQuery('random_compnay', randomCompany);
  const randomPostQuery = useQuery('random_post',randomPost);
  const randomPicsumQuery = useQuery('random_picusm',randomPicsum);
  const randomTagQuery = useQuery('random_tag',randomTag);
  

  if(randomIpsumQuery.isLoading || randomUsersQuery.isLoading || randomCompanyQuery.isLoading || randomPostQuery.isLoading || randomPicsumQuery.isLoading || randomTagQuery.isLoading){
    return <Loading/>
  }

  return (
    <RandomContext.Provider value={[randomUsersQuery,randomIpsumQuery,randomCompanyQuery,randomPostQuery,randomPicsumQuery,randomTagQuery]}>{props.children}</RandomContext.Provider>
  )
}

