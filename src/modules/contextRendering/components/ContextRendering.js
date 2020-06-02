import React, { useState, useMemo, useCallback } from 'react'

import ContextRenderingContext from './ContextRenderingContext';
import ConsumerComponent from './ConsumerComponent';

const ContextRendering = props => {
  const [data, setData] = useState([]);
  
  const addData = useCallback(
    (newData) => {
      setData((data) => [...data, newData]);
    },
    [],
  );

  const getData = useCallback((index) => data[index], [data]);

  const value = useMemo(() => ({
    addData,
    getData,
  }), [addData, getData]);


  return (
    <ContextRenderingContext.Provider value={value}>
      <ConsumerComponent />
    </ContextRenderingContext.Provider>
  )
}

ContextRendering.propTypes = {

}

export default ContextRendering
