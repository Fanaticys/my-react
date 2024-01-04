import React, { useState, useMemo, useCallback } from 'react';

import ContextRenderingContext from './ContextRenderingContext';

const Provider = props => {
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

  const [counter, setCounter] = useState(0);

  return (
    <ContextRenderingContext.Provider value={value}>
      <button onClick={() => setCounter(i => i + 1)}>Increment</button>
      {props.children}
    </ContextRenderingContext.Provider>
  )
}

export default Provider
