import React from 'react'
import { useSelector } from 'react-redux';

const Counter2Logger = () => {
  const counter = useSelector(state => state.reduxTest.counter2);
  console.count('Counter2Logger');
  return (
    <div>
      Value: {counter}
    </div>
  )
}

Counter2Logger.propTypes = {

}

export default Counter2Logger
