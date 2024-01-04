import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const RenderChildFunction = props => {
  const [state, setstate] = useState(0);

  const handleUpdate = useCallback(
    () => {
      setstate(value => value + 1);
    },
    [],
  )

  return (
    <>
    <span>{state}</span>
      <button onClick={handleUpdate}>Update Child</button>
      <div>{props.children()}</div>
    </>
  )
}

RenderChildFunction.propTypes = {}

export default RenderChildFunction