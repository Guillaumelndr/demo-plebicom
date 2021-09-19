import React from 'react'

import Space from 'components/ui/space'
import Image from 'components/ui/image'

import bike from 'assets/images/bike/default.webp'

import _ from 'lodash'

const BikeCard = ({ id, title, price, rating }) => {
  console.log(title)
  return (
    <Space direction='vertical'>
      <Image alt={_.kebabCase(title)} src={bike} ratio='80%' />
      {title}
    </Space>
  )
}

export default BikeCard
