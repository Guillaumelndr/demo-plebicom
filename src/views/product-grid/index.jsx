import React from 'react'

import useSWR from 'swr'
import { fetchItems } from 'utils/api/requests'
import { API_PRODUCTS_LIST } from 'utils/api/endpoints'

import Container from 'components/ui/container'
import BikeCard from 'components/bike-card'
import BikeCardSkeleton from 'components/bike-card/skeleton'

import { grid } from './style'

const ProductGrid = () => {
  const { data: bikes, error } = useSWR(API_PRODUCTS_LIST, fetchItems)

  return (
    <div>
      <Container>
        <div className={grid}>
          {
              bikes && !error && false
                ? (
                    bikes.map(({ id, title, price, rating }) => (
                      <BikeCard {...{ id, title, price, rating }} key={id} />
                    ))
                  )
                :  [...Array(20)].map((el, index) => <BikeCardSkeleton key={index} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default ProductGrid
