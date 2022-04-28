import React, { createContext,useState } from 'react';
type navInt =  [  
   navIndex:number ,
    setNavIndex:React.Dispatch<React.SetStateAction<number>>[] | any,
]
let initValue!:navInt ;
export const NavContext = createContext(initValue)

export const NavProvider = (props:any) => {
    const [navIndex,setNavIndex] =useState<number>(0)
  return (
    <NavContext.Provider value={[navIndex,setNavIndex]}>{props.children}</NavContext.Provider>
  )
}

