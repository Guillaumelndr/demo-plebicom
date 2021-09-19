import React from 'react'
import {Space, Skeleton} from 'antd'
import {Box} from 'components/ui/box'
import PropTypes from 'prop-types'
import {css} from '@emotion/css'

const chunk = str => {
    const ret = []
    const n = 3

    for (let i = 0; i <= str.length; i += n) {
        ret.unshift(str.substr(str.length - i, n))
    }
    ret.unshift(str.substr(0, str.length % n))

    return ret.join(' ').slice(0, -1)
}

const Money = ({amount, stylize, loading}) => {
    const curency = '€'
    const rest = Math.abs(amount) % 100
    const cents = rest.toString(10)
    const round = Math.trunc((amount) / 100).toString(10)

    if (loading) {
        return (
            <Space size={2} align="start">
                <Box w="80px">
                    <Skeleton paragraph={false} active className={css`.ant-skeleton-title {margin: 0!important;}`} />
                </Box>
            </Space>
        )
    }

    if (stylize) {
        return (
            <Space size={2} align="start">
                <Box>{chunk(round)}</Box>
                <Box css={{
                    fontSize: '60%',
                    paddingTop: '40%',
                }}
                >
                    {curency}
                </Box>
                <Box css={{
                    fontSize: '60%',
                    paddingTop: '20%',
                }}
                >
                    {cents.length !== 1 ? cents : `0${cents}`}
                </Box>
            </Space>
        )
    }
    return (`${chunk(round)}.${cents.length !== 1 ? cents : `0${cents}`} ${curency}`)
}

Money.defaultProps = {
    stylize: false,
}

Money.propTypes = {
    stylize: PropTypes.bool,
    amount: PropTypes.number.isRequired,
    loading: PropTypes.bool,
}

export default Money
