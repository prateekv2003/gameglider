import React from 'react'
import HomeHero from './hero/HomeHero';
import MatchArea from './match/MatchArea';
import WatchLiveStremingArea from './watch-live-streaming/WatchLiveStremingArea';
import WelcomeFeaturesArea from './welcome-features/WelcomeFeaturesArea'

const Home = () => {


  return (
    <>
        <HomeHero/>
        <WelcomeFeaturesArea/>
        <WatchLiveStremingArea/>
        <MatchArea/>
    </>
  )
}

export default Home