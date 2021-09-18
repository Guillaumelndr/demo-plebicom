import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from 'components/ui/container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { content, swiper, text } from './style'

const ADVERTS_LIST = t => [
  t('flash_advert.advert1'),
  t('flash_advert.advert2')
]

const FlashAdvert = React.forwardRef((props, ref) => {
  const { t } = useTranslation()

  return (
    <div className={content} ref={ref}>
      <Container>
        <Swiper
          className={swiper}
          slidesPerView={1}
          autoplay
          grabCursor
          centeredSlides
          loop
        >
          {
                        ADVERTS_LIST(t).map(advert => (
                          <SwiperSlide key={advert}>
                            <div className={text}>
                              {advert}
                            </div>
                          </SwiperSlide>
                        ))
                    }
        </Swiper>
      </Container>

    </div>
  )
})

export default FlashAdvert
