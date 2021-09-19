import React, { useState } from 'react'

import useSWR from 'swr'
import { fetchItems } from 'utils/api/requests'
import { API_PRODUCTS_LIST } from 'utils/api/endpoints'

import Container from 'components/ui/container'
import BikeCard from 'components/bike-card'
import BikeCardSkeleton from 'components/bike-card/skeleton'
import Select from 'components/ui/select'

import { grid, filters } from './style'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const ProductGrid = () => {
  const [sort, setSort] = useState('asc')
  const { type } = useParams()
  const { data: bikes, error } = useSWR(`${API_PRODUCTS_LIST}?sort=${sort}`, fetchItems)
  const { t } = useTranslation()

  const isLoading = !(bikes && !error)

  const sortOptions = [
    { label: 'price asc', value: 'asc' },
    { label: 'price desc', value: 'desc' }
  ]

  return (
    <div>
      <Container>
        <div className={filters}>
          <h1>{type ? type.toUpperCase() : t('word.bikes').toUpperCase}</h1>
          <Select options={sortOptions} onChange={setSort} placeholder={t('word:sort')} />
        </div>
        <div className={grid}>
          {
              !isLoading
                ? (
                    bikes.map(({ id, title, price, rating }) => (
                      <BikeCard {...{ id, title, price, rating }} key={id} />
                    ))
                  )
                : [...Array(20)].map((el, index) => <BikeCardSkeleton key={index} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default ProductGrid
