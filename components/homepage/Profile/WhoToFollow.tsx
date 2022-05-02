import React,{useMemo,useContext,useState} from 'react';
import { NextPage } from 'next';
// uuid
import { uuid } from 'uuidv4';
// usetable
import {useTable} from 'react-table';
// context
import { RandomContext } from '../../../context/randomUserContext';
const WhoToFollow:NextPage = ():JSX.Element => {
    // context deconstruct
    const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery] = useContext(RandomContext);

    // setting up data and columns for table hook
    const data:any = useMemo(() => 
        randomCompanyQuery.data.map((company:any,index:number) => {return {
            column1:<div className='flex md:text-[0.8rem]' ><div className="  mx-[0.5rem] w-[50px]  h-[50px] bg-cover bg-center rounded-full md:text-[0.8rem]"  style={{backgroundImage:`url(${company.logo})`}}></div><div className='flex flex-col '><div className='flex justify-between md:text-[0.8rem] '><p>{company.business_name}</p> </div><p>{randomIpsumQuery.data[index].short_sentence}</p></div></div>,
            column2:<div className='flex justify-end w-full md:justify-center'><button className='py-[0.1rem] px-[0.7rem] h-[40px] rounded-[5rem] bg-black text-white text-[0.8rem]  ' >Follow</button> </div>,
        }})   
    ,[]);

    const columns:any = useMemo(() => [
        {
            Header:'column1',
            accessor:'column1'
        },
        {
            Header:'column2',
            accessor:'column2'
        },
    ],[]);

    // table proprieties
    const {headerGroups,getTableBodyProps,getTableProps,prepareRow,rows} = useTable({columns,data})
    return (
        <div>
            <h1 className='font-bold p-[1rem]'>Who to follow</h1>
            <table className='w-full' {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup =>
                        <tr  {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => 
                            <th {...column.getHeaderProps()}>
                                {/* {column.render('Header')} */}
                            </th>)}
                    </tr>)}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return(
                                <tr className='flex md:flex-col' {...row.getRowProps()}>
                                {row.cells.map(cell =>
                                <td className=' flex my-[1rem] w-full '>
                                    {cell.render('Cell')}
                                </td>)}
                            </tr>
                    )})}
                </tbody>
            </table>

        </div>
    )
}

export default WhoToFollow;