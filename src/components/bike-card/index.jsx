import React from 'react'

import Space from 'components/ui/space'
import Image from 'components/ui/image'
import Money from 'components/money'

import bike from 'assets/images/bike/default.webp'

import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'

import { image, info, textEllipsis, money, monthPaymentInfo } from './style'

import _ from 'lodash'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { css, cx } from '@emotion/css'

const BikeCard = ({ id, title, price, rating }) => {
  const { t } = useTranslation()

  // hue-rotate is used to give the impression that the bikes are different
  return (
    <Space direction='vertical' size={0}>
      <Link to={`/bike/${id}`}>
        <Image
          alt={_.kebabCase(title)}
          src={bike}
          ratio='85%'
          center
          className={cx(image, css`img{filter: hue-rotate(${_.random(0, 1000)}deg);}`)}
        />
      </Link>
      <div className={info}>
        <Space>
          <Link to={`/bike/${id}`}>
            <div className={textEllipsis}>{'Speedmax CF 8 DISC' || title}</div>
          </Link>
          <Rate value={rating.rate} />
        </Space>
        <div className={money}><Money amount={price * 2000} /></div>
      </div>
      <div className={monthPaymentInfo}>
        <Space size={2}>
          {`${t('word:or')} .`}
          <Money amount={Math.round((price * 2000) / 12)} />
          <span>/</span>
          {t('word:month')}
        </Space>
      </div>
    </Space>
  )
}

export default BikeCard
