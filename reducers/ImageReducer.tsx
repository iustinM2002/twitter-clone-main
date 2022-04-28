import React from "react";
import { Action } from "types";
export const initialImages : string[] | any = [];

export const ImageReducer : any = (data:[],action:Action) =>{
    switch(action.type){
        case 'ADD_IMG' :
            return [...data,action.payload!.image];
        default : data
    }

}