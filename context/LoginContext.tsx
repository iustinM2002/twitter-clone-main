import React,{ createContext,useReducer, useState} from 'react';
// importing reducers
import { initalActive,RegisterActiveReducer } from '../reducers/ActiveReducer';

interface InitialInt  {
    registerFormSwitch:[
        ActiveRegister:Boolean,
        dispatch: any
    ],
    switchLogged:[
      isLogged:string,
      dispatchLog: React.Dispatch<React.SetStateAction<string>> | any
    ]
}
let initialValue!:InitialInt;

export const LoginContext = createContext(initialValue);
export const LoginProvider = (props:any) => {
    const [ActiveRegister,dispatch] = useReducer(RegisterActiveReducer,initalActive);
    const [isLogged,dispatchLog] = useState('false')
  return (
    <LoginContext.Provider value={{registerFormSwitch:[ActiveRegister,dispatch],switchLogged:[isLogged,dispatchLog]}}>
        {props.children}
    </LoginContext.Provider>
  )
}