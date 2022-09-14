import React, { useState, useCallback } from 'react'

import RenderUnderstandingParent from '../RenderUnderstandingParent';
import MemoizedCpmWithDefaultFunc from '../MemoizedCpmWithDefaultFunc';

const RenderUnderstanding = props => {
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
    <button onClick={handleUpdate}>Update</button>
    <MemoizedCpmWithDefaultFunc />
  </>
  );
}

RenderUnderstanding.propTypes = {

}

export default RenderUnderstanding
