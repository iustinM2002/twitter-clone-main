import React,{createContext,useState,useReducer} from 'react';


interface initialValue{
    currentPicture:[
        currentProfilePic:string,
        setCurrentProfilePic:any
    ],
    currentUsername:[
        currentUserName:string,
        setCurrentUsername:any
    ],
    currentBgPic:[
      currentBackgroundPic:string,
      setCurrentBackgroundPic:any
    ],
    currentSelectedUser:[
      currentUser:{},
      setCurrentUser:any
    ],
}

let initValue!:initialValue;
export const ProfileContext = createContext(initValue)

export const ProfileProvider = (props:any) => {
    const [currentProfilePic,setCurrentProfilePic] = useState<string>('https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png');
    const [currentBackgroundPic,setCurrentBackgroundPic] = useState<string>('https://www.comicmoviedb.com/wp-content/uploads/2016/01/twitter-bg.jpg')
    const [currentUserName,setCurrentUsername] = useState<string>('username');
    const [currentUser,setCurrentUser] = useState<{}>({})
  return (
    <ProfileContext.Provider value={{currentPicture:[currentProfilePic,setCurrentProfilePic],currentUsername:[currentUserName,setCurrentUsername],currentBgPic:[currentBackgroundPic,setCurrentBackgroundPic],currentSelectedUser:[currentUser,setCurrentUser]}}>{props.children}</ProfileContext.Provider>
  )
}

