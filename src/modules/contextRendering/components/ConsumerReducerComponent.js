import React, { useContext, memo } from 'react'

import ContextRenderingReducerContext from './ContextRenderingReducerContext';

const ConsumerReducerComponent = () => {
  const value = useContext(ContextRenderingReducerContext);

  console.log(value);

  return (
    <div>
      <button onClick={() => value.addData(1)}>Add in Reducer</button>
    </div>
  )
}

export default memo(ConsumerReducerComponent);
