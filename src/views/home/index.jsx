import React from 'react'
import { css } from '@emotion/css'

import Showroom from './showroom'
import About from './about'
import SlideShow from './slideshow'
import Carousel from './carousel'

import Space from 'components/ui/space'

const Home = () => {
  return (
    <div className={css`height: 300vh`}>
      <Space direction='vertical' size={40}>
        <Showroom />
        <About />
        <SlideShow />
        <Carousel />
      </Space>
    </div>
  )
}

export default Home
