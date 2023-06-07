import { Circle } from '@phosphor-icons/react'
import styles from './Checkbox.module.css'

export function Checkbox () {
  return (
    <button className={styles.checkbox}>
      <Circle size={24} />
    </button>
  )
}
