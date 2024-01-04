import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const RenderUnderstandingChild = props => {
  console.log("RenderUnderstandingChild");

  useEffect(() => {
    console.log("mount RenderUnderstandingChild");
    return () => {}
  }, [])

  useEffect(() => {
    console.log("update RenderUnderstandingChild");
  })

  return (
    <div>
      
    </div>
  )
}

export default RenderUnderstandingChild
