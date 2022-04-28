import React from "react";

interface Action{
    type:string,
    payload?:{

    }
}


export const LoggedReducer:any = (data:Boolean,action:Action) =>{
    switch(action.type){
        case 'IS_LOGGED':
            return 'true';
        case 'NOT_LOGGED' :
            return 'false';
        default : return data;
    }
}
