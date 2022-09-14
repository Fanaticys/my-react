import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';

import { increment } from '../../redux';
import Counter1Logger from '../Counter1Logger/Counter1Logger';
import Counter2Logger from '../Counter2Logger/Counter2Logger';
import CountersWrapper from '../CountersWrapper';

const ReduxTest = () => {
  const dispatch = useDispatch();

  const handleIncrementCounter1 = useCallback(() => {
    dispatch(increment({ propName: 'counter1' }));
  }, [dispatch]);

  const handleIncrementCounter2 = useCallback(() => {
    dispatch(increment({ propName: 'counter2' }));
  }, [dispatch]);

  console.count('ReduxTest')

  return (
    <>
    <button onClick={handleIncrementCounter1}>Increment counter 1</button>
    <button onClick={handleIncrementCounter2}>Increment counter 2</button>
    <div>
      <CountersWrapper>
        <Counter1Logger />
        <Counter2Logger />
      </CountersWrapper>
    </div>
    </>
    
  )
}

export default ReduxTest;
