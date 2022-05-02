import '@/styles/global.css'
import type { AppProps } from 'next/app';
// providers
import { LoginProvider } from '../context/LoginContext';
import { ProfileProvider } from '../context/ProfileContext';
import {TweetProvider} from '../context/TweetContext';
import {RandomUserProvider} from '../context/randomUserContext';
import { NavProvider } from '../context/NavContext';
import { CommentProvider } from '../context/CommentContext';
import { PostImageProvider } from '../context/PostImageContext';
// react query
import { Hydrate,QueryClient,QueryClientProvider } from 'react-query';
const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={client} contextSharing={true}><Hydrate state={pageProps.dehydratedState}><LoginProvider><ProfileProvider><RandomUserProvider><TweetProvider><PostImageProvider><NavProvider><CommentProvider><Component {...pageProps} /></CommentProvider></NavProvider></PostImageProvider></TweetProvider></RandomUserProvider></ProfileProvider></LoginProvider></Hydrate></QueryClientProvider>
}
