import React,{useState,useContext} from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import { PrismaClient } from '@prisma/client';
// use form hook and yup imports 
import { ProfileContext } from '../context/ProfileContext';
import { dataContact } from 'types';
import Form from '../components/registerlogincomponents/Form';

// getting prisma contacts
const prisma = new PrismaClient()
export async function getServerSideProps(){
    const contacts = await prisma.contact.findMany()
    return {
    props:{
        initialContacts:contacts
    }
}
}
const Login : NextPage<{initialContacts:any}> = ({initialContacts}) :JSX.Element => {
    const {currentPicture} = useContext(ProfileContext);
    const [currentProfilePic] = currentPicture
    // state
    const [errorForm,setFormError]= useState<string>('');
    // deconstruct context 
    const {currentUsername} = useContext(ProfileContext);
    const [currentUserName,setCurrentUsername] = currentUsername;

    // onSubmit function for form submit
   const onSubmit = async (data:dataContact) =>{
        initialContacts.forEach(async (contact:dataContact) =>{
            if(contact.email === data.email && contact.password === data.password){
                setCurrentUsername(contact.username);
                sessionStorage.setItem('username',contact.username!);
                sessionStorage.setItem('profilePic',currentProfilePic)
                sessionStorage.setItem('isLogged','true');
                setFormError('')
                Router.push('/homepage')   
            } 
        })
        setFormError('Email or password are incorrect, please try again.')
    }
  return (
    <div className='fixed w-full min-h-[100vh] bg-[#0000005b] flex justify-center items-center'>
        <Form onSubmit={onSubmit} errorForm={errorForm}/>
    </div>
  )
}

export default Login