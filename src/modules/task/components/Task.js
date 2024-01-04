import React, { useState, useEffect, useCallback } from 'react'

const Counter = ({counter}) => <span>{counter}</span>;

const RandomList = ({ count }) => {
  const generateNumbers = () => {
    const arr = new Array(count).fill(0).map(() => Math.floor(Math.random() * 101));
    return arr.map((number, i) => {
      return <li key={i}>{number}</li>
    });
  }
  
  return (<ul>{generateNumbers()}</ul>);
}

function ParentComponent() {
  const [value, setValue] = useState(0);

  const handleCount = useCallback(() => setValue(value => value < 100 ? value + 1 : value), []);

  useEffect(() => {
    const int = setInterval(handleCount, 3000);
    return () => clearInterval(int);
  }, [handleCount]);

  return (
    <div>
      <button onClick={handleCount}>Инкрементировать</button>
      <Counter counter={value} />
      <RandomList count={value} />
    </div>
  );
}

export default ParentComponent;

// ReactDOM.render(
// 	<ParentComponent />,
// 	document.getElementById('root')
// );
