import React, { useReducer, useState, useMemo, useCallback } from 'react'

import ContextRenderingContext from './ContextRenderingContext';
import ContextRenderingReducerContext from './ContextRenderingReducerContext';
import ConsumerComponent from './ConsumerComponent';
import ConsumerReducerComponent from './ConsumerReducerComponent';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
      throw state;
  }
}

const ContextRendering = props => {
  const [data, setData] = useState([]);
  
  const addData = useCallback(
    (newData) => {
      setData([...data, newData]);
    },
    [data],
  );

  const value = useMemo(() => ({
    addData
  }), [addData]);

  const [reducerData, dispatch] = useReducer(reducer, initialState);

  const addReducerData = useCallback(
    (newData) => {
      dispatch({ type: 'add', payload: newData })
    },
    [],
  );

  const reducerValue = useMemo(() => ({
    addData: addReducerData
  }), [addReducerData]);

  console.log({ data, reducerData })

  return (
    <div>
      <ContextRenderingContext.Provider value={value}>
        <ConsumerComponent />
      </ContextRenderingContext.Provider>
      <ContextRenderingReducerContext.Provider value={reducerValue}>
        <ConsumerReducerComponent />
      </ContextRenderingReducerContext.Provider>
    </div>
  )
}

ContextRendering.propTypes = {

}

export default ContextRendering
