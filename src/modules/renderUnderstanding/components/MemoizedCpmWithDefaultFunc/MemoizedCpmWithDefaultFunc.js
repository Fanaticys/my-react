import React, { memo } from 'react'
import PropTypes from 'prop-types'

const MemoizedCpmWithDefaultFunc = ({onClick = () => console.log('clicked')}) => {
  console.log('render MemoizedCpmWithDefaultFunc');
  return (
    <button onClick={onClick}>
      MemoizedCpmWithDefaultFunc
    </button>
  )
}

MemoizedCpmWithDefaultFunc.propTypes = {
  onClick: PropTypes.func,
}

export default MemoizedCpmWithDefaultFunc
