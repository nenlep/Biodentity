import React from 'react'
import Herosection from '../../Herosection'
import Pricing from '../../Pricing'

import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <Herosection {...HomeObjOne} />
      <Herosection {...HomeObjThree} />
      <Herosection {...HomeObjTwo} />
      <Pricing />
      <Herosection {...HomeObjFour} />
  
    </>
  )
}

export default Home
