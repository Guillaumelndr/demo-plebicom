import React, { useContext } from 'react'

import useSWR from 'swr'
import { fetchItems } from 'utils/api/requests'
import { API_PRODUCT_VIEW } from 'utils/api/endpoints'

import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

import Money from 'components/money'
import Button from 'components/ui/button'
import Image from 'components/ui/image'
import Skeleton from 'components/skeleton'
import Container from 'components/ui/container'
import Space from 'components/ui/space'

import { image, row, col, imageSkeleton, info, infoRow, content } from './style'

import bikeImage from 'assets/images/bike/default.webp'

import { useTranslation } from 'react-i18next'
import { cartContext } from 'context/cart'
import { ADD_CART_ITEM } from '../../context/cart/actions'

const Product = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { dispatch } = useContext(cartContext)

  const { data: bike, error } = useSWR(API_PRODUCT_VIEW.replace(':id', id), fetchItems)

  const isLoading = !(bike && !error)

  const addToCard = () => {
    console.log('hello')
    dispatch({ type: ADD_CART_ITEM, payload: bike })
  }

  return (
    <div>
      <Container>
        <div className={row}>
          <div className={col}>
            {
                    isLoading
                      ? <Skeleton className={imageSkeleton} />
                      : (
                        <Image
                          alt={_.kebabCase(bike.title)}
                          src={bikeImage}
                          ratio='85%'
                          center
                          className={image}
                        />
                        )
                }
          </div>
          <div className={col}>
            <div className={content}>
              <Space direction='vertical'>
                <div className={info}>
                  <h1>Speedmax CF 8 DISC</h1>
                </div>
                {isLoading ? <Skeleton width='200px' /> : <p>{bike.title}</p>}
                <div className={infoRow}>
                  {isLoading ? <Skeleton /> : <Rate value={bike.rating.rate} />}
                  {isLoading ? <Skeleton /> : <Money amount={bike.price * 2000} />}
                </div>
                <Button onClick={() => addToCard()}>{t('product.button')}</Button>
              </Space>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
