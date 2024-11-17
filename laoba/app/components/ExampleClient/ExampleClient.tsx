import React from 'react'
import Extracted from '../Extracted'
import styles from './ExampleClient.module.css'

const ExampleClient = () => {
  return (
    <div className={styles.card}>
        <h1>Hey</h1>
        <button className='btn btn-primary'>DaisyUI</button>
        <Extracted />
    </div>
  )
}

export default ExampleClient