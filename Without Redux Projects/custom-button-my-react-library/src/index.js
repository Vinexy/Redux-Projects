import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({text,type}) =>{

  if(type=="primary"){
    return(
    <button className={styles.primary}>{text}
    </button>
    )
  }
  if(type=="default"){
    return(
      <button className={styles.default}>{text}
      </button>
    )    
  }
  if(type=="dashed"){
    return(
      <button className={styles.dashed}>{text}
      </button>
    )    
  }
  if(type=="texty"){
    return(
      <button className={styles.texty}>{text}
      </button>
    )    
  }
  if(type=="link"){
    return(
      <button className={styles.link}>{text}
      </button>
    )    
  }
  
}
