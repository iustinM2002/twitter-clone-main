import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import RandomTweet from './RandomTweet';
// context
import { RandomContext } from '../../../context/randomUserContext';
import { randomIntervalNumber } from '../../../components/utils/utils';

const RandomTweets:NextPage = ():JSX.Element => {
  const [randomUsersQuery,randomIpsumQuery,randomCompanyQuery,randomPostQuery,randomPicsumQuery] = useContext(RandomContext);
  return (
    <div>
      {randomUsersQuery.data.results.map((user:any,index:number) =><RandomTweet key={index} index={index} picture={randomPicsumQuery} user={user} text={randomIpsumQuery.data[index].very_long_sentence} number={randomIntervalNumber(0,50)} /> )}
    </div>
  )
}

export default RandomTweets