import React from 'react'
import PropTypes from 'prop-types'
import Log from './Log'

const MiddleComponent = props => {
  console.log({props})
  return (
    <div>
      <Log name="MiddleComponent" />
      {props.children}
    </div>
  )
}

MiddleComponent.propTypes = {}

export default MiddleComponent