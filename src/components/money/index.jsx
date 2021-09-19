import React from 'react'
import PropTypes from 'prop-types'

const chunk = str => {
  const ret = []
  const n = 3

  for (let i = 0; i <= str.length; i += n) {
    ret.unshift(str.substr(str.length - i, n))
  }
  ret.unshift(str.substr(0, str.length % n))

  return ret.join(' ').slice(0, -1)
}

const Money = ({ amount }) => {
  const currency = '€'
  const rest = Math.abs(amount) % 100
  const cents = rest.toString(10)
  const round = Math.trunc((amount) / 100).toString(10)

  return (`${chunk(round)}.${cents.length !== 1 ? cents : `0${cents}`} ${currency}`)
}

Money.propTypes = {
  amount: PropTypes.number.isRequired
}

export default Money
