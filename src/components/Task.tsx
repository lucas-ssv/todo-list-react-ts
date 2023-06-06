import { Circle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task () {
  return (
    <div className={styles.task}>
      <button className={styles.checkbox}>
        <Circle size={24} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
