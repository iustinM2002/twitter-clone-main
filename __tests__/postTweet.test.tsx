import { act, fireEvent, render,screen } from "@testing-library/react";
import { LoginProvider } from '../context/LoginContext';
import { ProfileProvider } from '../context/ProfileContext';
import {TweetProvider} from '../context/TweetContext';
import { CommentProvider } from '../context/CommentContext';
import { PostImageProvider } from '../context/PostImageContext';
import PostTweets from "@/components/homepage/Tweet/PostTweets";

describe('tweet input zone' ,() => {
  render(<LoginProvider value><ProfileProvider><CommentProvider><TweetProvider><PostImageProvider><PostTweets/></PostImageProvider></TweetProvider></CommentProvider></ProfileProvider></LoginProvider>)
  it('post tweet when exists a value and Tweet button is clicked' , async () => {
    const input =  screen.getByTestId('inputform')
    const button = screen.getByRole('button', {name: /tweet/i})
    act(() => {
      fireEvent.change(input,{target:{value:'cv'}});
    })
    act(()=>{
      fireEvent.click(button);
    })
    expect(screen.getByTestId('tweet')).toBeInTheDocument()
  })
})