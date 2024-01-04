import React, { memo, useRef } from 'react'
import { useSelector } from 'react-redux';

const s = state => {
  return state.reduxTest.counter1;
}

const Counter1Logger = () => {
  const counter = useSelector(s);
  const renders = useRef(0);
  console.log('Counter1Logger');
  return (
    <div>
      Counter: {counter}
      Renders: {renders.current++}
    </div>
  )
}

Counter1Logger.propTypes = {

}

export default memo(Counter1Logger)
