import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TopBannerWeeklyChallenge from '../components/WeeklyChallenges/TopBannerWeeklyChallenge'
import ActiveWeeklyChallenges from '../components/WeeklyChallenges/ActiveWeeklyChallenges';
import PreviousWeeklyChallenges from '../components/WeeklyChallenges/PreviousWeeklyChallenges'
import FilteredWeeklyActiveChallenge from '../components/WeeklyChallenges/FilteredWeeklyActiveChallenge'

const WeeklyChallenges: NextPage = () => {
  return (
    <div>
        <Head>
        <title>ClueLess | JavaScript Thursday</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <Navbar />
        <TopBannerWeeklyChallenge />
        <FilteredWeeklyActiveChallenge 
        type='CSS'
        />
        <PreviousWeeklyChallenges />
    </div>
  )
}

export default WeeklyChallenges