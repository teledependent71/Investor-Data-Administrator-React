import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Data Administrator</title>
        <meta property="og:title" content="Investor Data Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
