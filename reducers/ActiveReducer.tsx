import React from "react";
interface Action{
    type:string
}

export const initalActive : Boolean = false;

export const  RegisterActiveReducer = (data:Boolean,action:Action) =>{
    switch(action.type){
        case 'SET_REGISTER_ACTIVE':
            return true;
        case 'SET_REGISTER_FALSE' :
            return false;
        default : return data;
    }
}
