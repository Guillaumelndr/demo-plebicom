import React from 'react'

import useSWR from 'swr'
import { fetchItems } from 'utils/api/requests'
import { API_PRODUCTS_LIST } from 'utils/api/endpoints'

import Container from 'components/ui/container'
import BikeCard from 'components/bike-card'

import { grid } from './style'

const ProductGrid = () => {
  const { data: bikes, error } = useSWR(API_PRODUCTS_LIST, fetchItems)
  console.log(bikes)
  return (
    <div>
      <Container>
        <div className={grid}>
          {
              bikes && !error
                ? (
                    bikes.map(({ id, title, price, rating }) => (
                      <BikeCard {...{ id, title, price, rating }} key={id} />
                    ))
                  )
                : 'loading...'
          }
        </div>
      </Container>
    </div>
  )
}

export default ProductGrid
