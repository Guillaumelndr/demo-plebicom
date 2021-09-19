import React, { useState } from 'react'

import useSWR from 'swr'
import { fetchItems } from 'utils/api/requests'
import { API_PRODUCTS_LIST } from 'utils/api/endpoints'

import Container from 'components/ui/container'
import BikeCard from 'components/bike-card'
import BikeCardSkeleton from 'components/bike-card/skeleton'
import Space from 'components/ui/space'
import Skeleton from 'components/skeleton'
import Select from 'components/ui/select'

import { grid, filters } from './style'
import { useTranslation } from 'react-i18next'

const ProductGrid = () => {
  const [sort, setSort] = useState('asc')
  const { data: bikes, error } = useSWR(`${API_PRODUCTS_LIST}?sort=${sort}`, fetchItems)
  const { t } = useTranslation()

  const isLoading = !(bikes && !error)

    const sortOptions = [
        {label: 'asc', value: 'asc'},
        {label: 'desc', value: 'desc'}
    ]

  return (
    <div>
      <Container>
        <div className={filters}>
          <Space>
            {isLoading ? <Skeleton /> : <span>{`${bikes.length} ${t('word:bikes')}`}</span>}
              <Select options={sortOptions} onChange={setSort} placeholder={t('word:sort')} />
          </Space>
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
