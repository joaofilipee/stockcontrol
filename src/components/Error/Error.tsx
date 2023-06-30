import React from 'react'

import styles from "./Error.module.css"

interface IError {
    message: string
    errorRef: React.RefObject<HTMLDivElement>
}

const Error = ({message, errorRef}: IError) => {
  return (
    <div className={styles.error} ref={errorRef}>
        <h4>{message}</h4>
    </div>
  )
}

export default Error