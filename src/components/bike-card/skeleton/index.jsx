import React from 'react'
import Space from 'components/ui/space'

import { image, info, monthPaymentInfo } from './style'
import Skeleton from 'components/skeleton'

const BikeCardSkeleton = () => {
  return (
    <Space direction='vertical' size={0}>
      <Skeleton className={image} />
      <div className={info}>
        <Skeleton width='200px' />
        <Skeleton />
      </div>
      <div className={monthPaymentInfo}>
        <Skeleton width='150px' />
      </div>
    </Space>
  )
}

export default BikeCardSkeleton
