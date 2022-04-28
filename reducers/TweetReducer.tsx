interface Action{
    type:string,
    payload:{
        tweet:string
    }
}

export const initialTweet:string[] | any = [];

export const TweetReducer :any= (data:[],action:Action) =>{
    switch(action.type){
        case'ADD_TWEET':
            return [...data,action.payload.tweet];
        default: data;
    }
}