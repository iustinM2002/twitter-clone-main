export interface Action{
    type:string,
    payload?:{
        tweet?:string,
        image?:string
    }
}
export interface dataContact{
    email:string,
    password:string
    username?:string,
}

export interface SignInProps{
    initialContacts:[],
    onSubmit : (data:dataContact) => void;
}
export interface FormValues extends Record<string,any>{
    email:string,
    password:string
}
 export interface ProfileBodyInt{
     currentUserName:string,
     currentProfilePic:string;
     currentBackgroundPic:string
 }
 