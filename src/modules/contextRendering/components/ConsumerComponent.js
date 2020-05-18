import React, { useContext, memo } from 'react'

import ContextRenderingContext from './ContextRenderingContext';

const ConsumerComponent = () => {
  const value = useContext(ContextRenderingContext);

  console.log(value);

  return (
    <div>
      <button onClick={() => value.addData(1)}>Add</button>
    </div>
  )
}

export default memo(ConsumerComponent)
