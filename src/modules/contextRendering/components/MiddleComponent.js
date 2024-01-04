import React from 'react'
import PropTypes from 'prop-types'

const MiddleComponent = props => {
  console.log('MiddleComponent');
  return (
    <div>{props.children}</div>
  )
}

MiddleComponent.propTypes = {}

export default MiddleComponent