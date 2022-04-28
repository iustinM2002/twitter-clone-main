import React,{useMemo,useContext,useState,useEffect} from 'react';
import { useTable } from 'react-table';
import { RandomContext } from 'context/randomUserContext';
import { useQuery,QueryClient,dehydrate } from 'react-query';
import { randomIntervalNumber } from '@/components/utils/utils';
import ListElement from './ListElement';
import { NextPage } from 'next';

const randomTagPost = async (tag:string) =>  await(await fetch(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`,{headers:{'app-id':'625ffa6de6a875ce42705773'}}) ).json();
interface ListBodyInt {
    tag:string,
    setTag: React.Dispatch<React.SetStateAction<string>>;
    activeElement:Boolean;
    setActiveElement: React.Dispatch<React.SetStateAction<boolean>>
}
let  sm = '';
const ListsBody:NextPage<ListBodyInt> = ({ tag, setTag,activeElement,setActiveElement}) => {
    // context
    const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery,randomPostQuery,randomPicsumQuery,randomTagQuery] = useContext(RandomContext);
    const tags = randomTagQuery.data.data.slice(1,randomIntervalNumber(2,15));
    const data = useMemo(() =>tags.map((tag:string,index:number) => { 
        
        return{
            col1:tag,
            key:index
        }
    }),[]);
    const columns:any = useMemo(()=>[
        {
            Header:'col1',
            accessor:'col1'
        },
       
    ],[]);
    const tableInstance = useTable({columns,data});
    const {getTableBodyProps,getTableProps,headerGroups,rows,prepareRow} = tableInstance
    
  return (
    <div>
        
        <table {...getTableBodyProps()}>
            <thead >
                {headerGroups.map(headerGroup => 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map( column =>
                    <th {...column.getHeaderProps()}>
                            {/* {column.render('Header')} */}
                    </th>
                    )}
                </tr>
                )}
            </thead>
            <tbody {...getTableBodyProps}>
                {rows.map(row => {
                    prepareRow(row)
                    return(
                    <tr className='relative' {...row.getRowProps()}>
                        {row.cells.map(cell =>
                        <td className='font-bold flex my-[1rem] cursor-pointer ' onClick={() =>{setTag(cell.value.replace(/\s/g, "")); setActiveElement(true)}}>
                            <div  className="`  profile-background min-h-[45px] w-[45px] rounded-[0.5rem] mx-[1rem] bg-[#CFD9DE] bg-center  bg-cover bg-center`" style={{backgroundImage:`url(https://pbs.twimg.com/media/EXZ27UwVcAIcDfd?format=png&name=240x240 )`}}></div>
                            {cell.render('Cell')}
                        </td>
                        )}
                    </tr>
                )})}
            </tbody>
        </table>
        {activeElement ?<ListElement tag={tag}/> : ''}
        
    </div>
  )
}
export async function getServerSideProps(){
    const client = new QueryClient();
    await client.prefetchQuery('random_tag_post', () => randomTagPost(sm))
    return{
        props:{
            dehydratedState: dehydrate(client)
        }
    }

}
export default ListsBody