import React,{useState,createContext} from 'react';
// interface for initialValue
interface CommentInit{
  activeComment:[
    activeCom:Boolean,
    setActiveCom:  React.Dispatch<React.SetStateAction<boolean>>
  ],
  commentLib:[
    comment:string,
    setComment: React.Dispatch<React.SetStateAction<string>>
  ],
  commentsLib:[
    comments:string[],
    setComments: React.Dispatch<React.SetStateAction<string[]>>
  ],
  replyUser:[
    replyedUsername:string[],
    setReplyedUsername: React.Dispatch<React.SetStateAction<string[]>>
  ]
}
// create context for comments
let initValue!:CommentInit;
export const CommentContext = createContext(initValue);

export const CommentProvider = (props:any) => {
  // state declarations
    const [activeCom,setActiveCom] = useState(false);
    const [comment,setComment] = useState<string>('');
    const [comments,setComments] = useState<string[]>([]);
    const [replyedUsername,setReplyedUsername] = useState<string[]>([]);

  return (
    <CommentContext.Provider value={{activeComment:[activeCom,setActiveCom],commentLib:[comment,setComment],commentsLib:[comments,setComments],replyUser:[replyedUsername,setReplyedUsername]}}>
        {props.children}
    </CommentContext.Provider>
  )
}

