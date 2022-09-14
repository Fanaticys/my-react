import React, { useState, useCallback } from 'react'
import { v4 as uuid } from 'uuid';
import { getRandomColor } from '../../../utils';

import Cell from '../Cell/Cell';
import styles from './Cells.module.scss';

const generateCellData = () => ({ id: uuid(), backgroundColor: getRandomColor() });
const cells = Array.from(Array(3), generateCellData);

const Cells = () => {
  const [data, setData] = useState(cells);
  const [, setCounter] = useState(0);

  const addToMiddle = useCallback(
    () => {
      setData((currentData) => {
        const newData = [...currentData];
        newData.splice(2, 0, generateCellData());
        return newData;
      });
    },
    [],
  )

  const rerenderParent = useCallback(() => setCounter((c) => c + 1), []);
  const reinit = useCallback(() => setData(cells), []);

  return (
    <>
    <div className={styles.controls}>
      <button onClick={addToMiddle}>Add after 2</button>
      <button onClick={rerenderParent}>Re-render parrent</button>
      <button onClick={reinit}>Re-init</button>
    </div>
    <ul>
      {data.map((cell, i) => <Cell key={cell.id} {...cell} />)}
    </ul>
    </>
  )
}

export default Cells
