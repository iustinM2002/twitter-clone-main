import React,{createContext,useReducer,useState} from 'react';
import {TweetReducer,initialTweet} from '../reducers/TweetReducer';

type initialValue = [
    addTweets:string[] | any,
    dispatchTweets:any,
    tweet:string,
    setTweet:any
]

let initValue!:initialValue;
export const TweetContext = createContext(initValue);

export const TweetProvider = (props:any) => {
    const [addTweets,dispatchTweets] = useReducer(TweetReducer,initialTweet)
    const [tweet,setTweet] = useState<string>('')
  return (
    <TweetContext.Provider value={[addTweets,dispatchTweets,tweet,setTweet]} >
        {props.children}
    </TweetContext.Provider>
  )
}

export default TweetProvider