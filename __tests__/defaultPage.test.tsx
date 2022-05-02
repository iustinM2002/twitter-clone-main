import { fireEvent, render,screen } from "@testing-library/react";
import DefaultPage from '../components/homepage/defaultPage'
import { LoginProvider } from '../context/LoginContext';
import { ProfileProvider } from '../context/ProfileContext';
import {TweetProvider} from '../context/TweetContext';
import {RandomUserProvider} from '../context/randomUserContext';
import { NavProvider } from '../context/NavContext';
import { CommentProvider } from '../context/CommentContext';
import { PostImageProvider } from '../context/PostImageContext';
import { QueryClientProvider,QueryClient } from "react-query";


describe('defaultPage' , () => {
 
})