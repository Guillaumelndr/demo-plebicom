import React from 'react'
import Container from "components/ui/container";

import {row, col, number} from './style'
import {useTranslation} from "react-i18next";
import Space from "components/ui/space";

const About = () => {
    const {t} = useTranslation()

  return (
    <Container className={row}>
        <div className={col}>
            <Space>
                <div className={number}>3x</div>
                <Space direction="vertical">
                    <h3>{t('about.speed.title')}</h3>
                    <p>{t('about.speed.content')}</p>
                </Space>
            </Space>
        </div>
        <div className={col}>
            <Space>
                <div  className={number}>3x</div>
                <Space direction="vertical">
                    <h3>{t('about.power.title')}</h3>
                    <p>{t('about.power.content')}</p>
                </Space>
            </Space>
        </div>
    </Container>
  )
}

export default About
