import React, { memo } from 'react'

import styles from './Cell.module.css';

const Cell = ({ backgroundColor }) => {
  console.log(`Render ${backgroundColor}`)

  return (
  <li className={styles.container} style={{ backgroundColor }}>{backgroundColor}</li>
  )
}

export default memo(Cell);
