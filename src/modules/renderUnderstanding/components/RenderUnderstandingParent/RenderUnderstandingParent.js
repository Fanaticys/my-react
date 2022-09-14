import React, { useEffect } from 'react'

import RenderUnderstandingChild from '../RenderUnderstandingChild';

const RenderUnderstandingParent = props => {
  console.log("RenderUnderstandingParent");

  useEffect(() => {
    console.log("mount RenderUnderstandingParent");
    return () => {}
  }, [])

  useEffect(() => {
    console.log("update RenderUnderstandingParent");
  })

  return (<RenderUnderstandingChild />
    // <RenderUnderstandingChild />
  );
}

RenderUnderstandingParent.propTypes = {

}

export default RenderUnderstandingParent
