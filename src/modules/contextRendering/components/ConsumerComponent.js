import React, { useContext, memo } from 'react'

import ContextRenderingContext from './ContextRenderingContext';

const ConsumerComponent = () => {
  const { addData } = useContext(ContextRenderingContext);

  console.log(addData);

  return (
    <div>
      <button onClick={() => addData(1)}>Add</button>
    </div>
  )
}

export default memo(ConsumerComponent)
