import React from 'react'
import { css } from '@emotion/css'
import Showroom from './showroom'
import Space from '../../components/ui/space'

const Home = () => {
  return (
    <div className={css`height: 300vh`}>
      <Space direction='vertical'>
        <Showroom />
      </Space>
    </div>
  )
}

export default Home
