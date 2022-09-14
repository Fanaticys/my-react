import React from 'react'
import PropTypes from 'prop-types'

const CountersWrapper = props => {
  return (
    <div>
      <h3>CountersWrapper</h3>
      {props.children}
    </div>
  )
}

CountersWrapper.propTypes = {

}

export default CountersWrapper
