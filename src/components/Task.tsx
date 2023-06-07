import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import { Checkbox } from './Checkbox'
import styles from './Task.module.css'

export function Task () {
  const [isCheckedTask, setIsCheckedTask] = useState<boolean>()

  function handleCheckTask () {
    setIsCheckedTask(isCheckedTask => !isCheckedTask)
  }

  return (
    <div className={styles.task}>
      <Checkbox onClick={handleCheckTask} isChecked={isCheckedTask} />
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
