import React from 'react'
import Header from '../components/Header'
import Challenges from '../components/Challenges'
import Newsletter from '../components/NewLetter'
import Candidate from '../components/candidates/Candidate'
import Team from '../components/Team/Team'

const Home = () => {
  return (
    <div>
        <Header />
        <Challenges />
        <Candidate />
        <Team />
        <Newsletter />
    </div>
  )
}

export default Home