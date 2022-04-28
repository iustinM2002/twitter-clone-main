import React,{useReducer,createContext,useState} from 'react';
import {initialImages,ImageReducer} from '../reducers/ImageReducer'
interface initalValue{
    ImageSrc:string[] | any,
    dispatchImg:any
}
let initValue!:initalValue | any;
export const PostImageContext = createContext(initValue)

export const PostImageProvider = (props:any) => {
    const [ImagesSrc,dispatchImg] = useReducer(ImageReducer,initialImages)
    const [ImageSrc,setImageSrc] = useState('')
  return (
    <PostImageContext.Provider value={[ImageSrc,setImageSrc,ImagesSrc,dispatchImg]}>{props.children}</PostImageContext.Provider>
  )
}